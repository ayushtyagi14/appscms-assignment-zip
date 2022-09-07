import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar-left'>
                <div className="title">
                    ZIP EXTRACTOR
                </div>
                <div className="lists">
                    <div className="list-item"><img src="https://img.icons8.com/ios/20/ffffff/laptop-play-video--v1.png" />Video Tools <img src="https://img.icons8.com/ios/10/ffffff/expand-arrow--v2.png" /></div>
                    <div className="list-item"><img src="https://img.icons8.com/ios/20/ffffff/audio-wave--v1.png" />Audio Tools <img src="https://img.icons8.com/ios/10/ffffff/expand-arrow--v2.png" /></div>
                    <div className="list-item"><img src="https://img.icons8.com/ios/20/ffffff/pdf-2--v1.png" /> PDF Tools <img src="https://img.icons8.com/ios/10/ffffff/expand-arrow--v2.png" /></div>
                    <div className="list-item"><img src="https://img.icons8.com/external-others-inmotus-design/20/ffffff/external-Rotate-configuration-others-inmotus-design.png"/> Converters <img src="https://img.icons8.com/ios/10/ffffff/expand-arrow--v2.png" /></div>
                    <div className="list-item"><img src="https://img.icons8.com/ios/20/ffffff/maintenance.png"/> Utilities <img src="https://img.icons8.com/ios/10/ffffff/expand-arrow--v2.png" /></div>
                </div>
            </div>
            <div>
                <div className='button'>Log In</div>
            </div>
        </div>
    )
}

export default Navbar
