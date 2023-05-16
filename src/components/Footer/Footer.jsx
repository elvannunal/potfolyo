import  "./footer.css"
import "./footer.css"
import React from "react";
const Footer=()=>{
    return(
        <footer className="footer">
            <div className="footer-container container">
                <h1 className="footer-title">Elvan</h1>

                <ul className="footer-list">
                    <li>
                        <a href="#about" className="footer_link">About
                        </a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer_link">Projects
                        </a>
                    </li>
                    <li>
                        <a href="#home" className="footer_link">Home
                        </a>
                    </li>
                </ul>
            </div>


            <div className="footer_social">
                <a href="https://www.linkedin.com/in/elvan-%C3%BCnal-b88a33225/"
                   className="footer-social-link" target="_blank">
                    <i className="bx bxl-linkedin"></i>
                </a>
                <a href="https://github.com/elvannunal"
                   className="footer-social-link" target="_blank">
                    <i className="bx bxl-github"></i>
                </a>
            </div>

            <span className="footer_copy">
                &#169; Crypticalcolder. All rights reserved
            </span>
        </footer>
    )
}

export default Footer