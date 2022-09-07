import "./Main.css";
import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import JSZip from "jszip";
import Tree from "../Context/Tree";
import useDrivePicker from "react-google-drive-picker/dist";

function Main() {
    const [about, setAbout] = useState({});
    const [details, setDetails] = useState();
    const [openPicker, authResponse] = useDrivePicker();
    const reader = new FileReader();
    const errorSection = document.getElementById("errorSection");
    if (errorSection) {
        errorSection.style.display = "none";
    }

    localStorage.removeItem("item");
    let i = 20;

    const extensions = [
        "7z",
        "zipx",
        "rar",
        "tar",
        "exe",
        "dmg",
        "iso",
        "zip",
        "msi",
        "nrg",
        "gz",
        "cab",
        "bz2",
        "wim",
        "ace",
        "alz",
        "ar",
        "arc",
        "arj",
        "bin",
        "cdi",
        "chm",
        "cpt",
        "cpio",
        "cramfs",
        "crunch",
        "deb",
        "dd",
        "dms",
        "ext",
        "fat",
        "format",
        "gpt",
        "hfs",
        "ihex",
        "lbr",
        "lzh",
        "lzma",
        "lzm",
        "mbr",
        "mdf",
        "nsa",
        "nds",
        "nsis",
        "ntfs",
        "pit",
        "pak",
        "pdf",
        "pp",
        "qcow2",
        "rpm",
        "sar",
        "squashfs",
        "squeeze",
        "sit",
        "sitx",
        "swf",
        "udf",
        "uefi",
        "vdi",
        "vhd",
        "vmdk",
        "warc",
        "xar",
        "xz",
        "z",
        "zoo",
        "zi",
        "jar",
    ];
    const handleCount = () => {
        document.getElementById("extensions").innerHTML = extensions
            .slice(0, extensions.length)
            .map((extension) => extension + ", ");
    };

    const input = () => {
        let getInput = document.createElement("input");
        getInput.type = "file";
        getInput.click();
        getInput.addEventListener("change", (event) => {
            const file = event.target.files[0];
            if (
                file?.name.includes(".zip") ||
                file?.name.includes(".7z") ||
                file?.name.includes(".dmg") ||
                file?.name.includes(".zipx") ||
                file?.name.includes(".rar") ||
                file?.name.includes(".tar") ||
                file?.name.includes(".exe")
            ) {
                setAbout(file);
                JSZip.loadAsync(file).then((data) => {
                    setDetails(data.files);
                });
            } else {
                document.getElementById("details-section").style.display = "block";
                document.getElementById("container").style.display = "none";
                document.getElementById("errorSection").style.display = "flex";
                document.getElementById("details-section").innerText =
                    "Unsupported File Format";
            }
        });
    };

    const handleUploads = (e) => {
        if (
            e?.name.includes(".zip") ||
            e?.name.includes(".7z") ||
            e?.name.includes(".dmg") ||
            e?.name.includes(".zipx") ||
            e?.name.includes(".rar") ||
            e?.name.includes(".tar") ||
            e?.name.includes(".exe")
        ) {
            setAbout(e);
            JSZip.loadAsync(e).then((data) => {
                setDetails(data.files);
            });
        } else {
            document.getElementById("details-section").style.display = "block";
            document.getElementById("container").style.display = "none";
            document.getElementById("errorSection").style.display = "block";
            document.getElementById("details-section").innerText =
                "Unsupported File Format";
        }
    };

    useEffect(() => {
        if (details) {
            setDetails(details);
            document.getElementById("details-section").style.display = "block";
        }
        else {
            document.getElementById("details-section").style.display = "none";
        }
    }, [details]);

    return (
        <div className="main">
            <div className="container"
                id="container">
                <div className="head">
                    <div className="heading">
                        <img src={logo}
                            alt="logo"
                            className="logo"
                            width={60}
                            height={50}
                        />
                        Archive Extractor
                    </div>
                    <p className="heading-text">
                        Archive Extractor is a small and easy online tool that can extract
                        over 70 types of <br /> compressed files, such as 7z, zipx, rar,
                        tar,exe,dmg and much more.
                    </p>
                </div>

                <div
                    className="upload"
                >
                    <div
                        className='upload-container'
                        id="fileSection"
                    >
                        <div id="upload-section" className="upload-section">
                            <div
                                onClick={() => input()}
                                className="upload-button"
                            >
                                <div className="upload-text-lg">Choose File</div>
                                <small className="upload-text-sm">From Your Computer</small>
                            </div>
                        </div>

                        <div
                            id="online-storages-container"
                            className="links"
                        >
                            <span
                                id="gDrive"
                                className="drive"
                            >
                                <div className="gdrive-icon"></div> From Google Drive
                            </span>
                            <span
                                id="dropbox"
                                className="link"
                            >
                                <div className="dropbox-icon"></div> Dropbox
                            </span>
                            <span
                                id="url"
                                className="link"
                            >
                                <div className="url-icon"></div> URL
                            </span>
                        </div>

                        <div className="drag-drop">
                            <div id="drop_zone demo" className="drag-drop">
                                <input
                                    type="file"
                                    onChange={(e) => handleUploads(e.target.files[0])}
                                    id="file"
                                    onClick={(e) => e.preventDefault()}
                                    className="custom-file-input"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div id="details-section">
                    <h1>Name: {about?.name}</h1>
                    <h1>
                        Size: {(about?.size / (1024 * 1024)).toString().slice(0, 3)}MB
                    </h1>
                </div>
                <div id="tree jstree">
                    {details ? <Tree data={[details]}></Tree> : ""}
                </div>
                <div
                    className="info"
                >
                    <div className="formats">
                        <div className="texts">Supported Formats: </div>
                        <div id="extensions">
                            {extensions.slice(0, 20).map((extension) => extension + ", ")}
                            <span
                                className="see-more"
                                onClick={handleCount}
                            >
                                ...see more
                            </span>
                        </div>
                    </div>
                    <div className="texts">Supports password-protected archives</div>
                    <div className="texts">
                        Can unpack multi-part archives (zip.001, rar.part1, z01, etc)
                    </div>
                </div>
            </div>

            <div
                id="errorSection"
                className="error-section"
            >
                <h1>
                    You have Selected Unsupported file format{" "}
                    <span
                        className="reload"
                        onClick={() => window.location.reload()}
                    >
                        Reload
                    </span>
                </h1>
            </div>
        </div>
    );
}

export default Main;
