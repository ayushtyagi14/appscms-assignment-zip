import React, { useEffect, useState } from "react";
import './style.css';

const Tree = ({ data }) => {
  return (
    <div>
      {data.map((tree) => (
        <TreeNode node={tree}></TreeNode>
      ))}
    </div>
  );
};

const TreeNode = ({ node }) => {
  const childs = Object.keys(node);
  const [hasChildFolders, setHasChildFolders] = useState(false);

  useEffect(() => {
    childs.map((child) =>
      child.includes("/") ? setHasChildFolders(true) : setHasChildFolders(false)
    );
  }, [childs]);

  const caret = document.getElementById("caret");
  let getInput = document.getElementById("check");
  if (getInput) {
    getInput.style.display = "none";
  }

  const toggle = () => {
    getInput.click();
    caret.style.transform = "rotate(-90deg)";
    document.getElementById("files").style.display = "none";
    if (getInput.checked) {
      caret.style.transform = "rotate(0deg)";
      document.getElementById("files").style.display = "block";
    }
  };

  return (
    <div>
      <input type="checkbox" id="check" />
      <span
        id="parent"
        onClick={toggle}
        className='parent'
      >
        <img className="caret" id="caret" src="https://img.icons8.com/external-creatype-glyph-colourcreatype/15/000000/external-caret-miscellaneous-user-interface-v1-creatype-glyph-colourcreatype-4.png" />{" "}
        <img className="folder" src="https://img.icons8.com/ios-glyphs/15/000000/folder-invoices--v1.png" />
        {childs[0].split("/")[0]}
      </span>
      <ul id="files">
        {childs.map((item) => (
          <li
            key={childs.indexOf(item)}
            className='item-list'
          >
            <a href={item} download className="href">
              {item.split(".")[item.split(".").length - 1] === "js" ||
                item.split(".")[item.split(".").length - 1] === "js" ? (
                <img src="https://img.icons8.com/ios-filled/15/ffffff/javascript-logo.png" />
              ) : item.split(".")[item.split(".").length - 1] === "html" ||
                item.split(".")[item.split(".").length - 1] === "htm" ? (
                <img src="https://img.icons8.com/ios-glyphs/15/ffffff/html-5.png" />
              ) : item.split(".")[item.split(".").length - 1] === "pdf" ||
                item.split(".")[item.split(".").length - 1] === "pdf" ? (
                <img src="https://img.icons8.com/ios-glyphs/15/ffffff/pdf.png" />
              ) : item.split(".")[item.split(".").length - 1] === "scss" ||
                item.split(".")[item.split(".").length - 1] === "_sass" ? (
                <img src="https://img.icons8.com/external-creatype-outline-colourcreatype/15/ffffff/external-document-file-extension-web-format-file-creatype-outline-colourcreatype-60.png" />
              ) : item.split(".")[item.split(".").length - 1] === "png" ||
                item.split(".")[item.split(".").length - 1] === "jpg" ||
                item.split(".")[item.split(".").length - 1] === "png" ||
                item.split(".")[item.split(".").length - 1] === "jpg" ? (
                <img src="https://img.icons8.com/material/15/ffffff/image-document.png" />
              ) : item.split(".")[item.split(".").length - 1] === "gif" ? (
                <img src="https://img.icons8.com/material-rounded/15/ffffff/gif.png" />
              ) : item.split(".")[item.split(".").length - 1] === "md" ? (
                <img src="https://img.icons8.com/material-outlined/15/ffffff/project-setup.png" />
              ) : item.split(".")[item.split(".").length - 1] === "json" ? (
                <img src="https://img.icons8.com/ios/15/ffffff/json.png" />
              ) : item.split(".")[item.split(".").length - 1] ===
                "gitignore" ? (
                <img src="https://img.icons8.com/ios-filled/15/ffffff/git.png" />
              ) : item.split(".")[item.split(".").length - 1] === "css" ? (
                <img src="https://img.icons8.com/ios-filled/15/ffffff/css-filetype.png" />
              ) : item.split(".")[item.split(".").length - 1] ? (
                <img src="https://img.icons8.com/material-rounded/15/ffffff/file--v1.png" />
              ) : (
                ""
              )}
              {item.split("/").pop()}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tree;
