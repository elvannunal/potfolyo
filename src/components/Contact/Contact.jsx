import React, {useState} from "react";

import "./contact.css";

const Contact=()=>{
    return(
        <section className="contact section" id="contact">
            <h2 className="section__title">
               İletişim
            </h2>


            <div className="contact-container">
                <div className="contact-info">
                    <div className="contact-card">
                        <div  className="contact-icon-name">
                            <i className="bx bx-mail-send contact-card-icon"> </i>
                            <h3 className="contact-card-title">Mail</h3>
                        </div>

                        <div className="contact-email-and-link">
                            <span className="contact-card-data">elvanunalll@gmail.com</span>

                            <a className="contact-button" href="mailto:elvanunalll@gmail.com">
                               Mesaj Gönder
                                <i className="bx bx-right-arrow-alt contact-button-icon"></i>
                            </a>
                        </div>

                    </div>
                </div>
            </div>

        </section>



   )
}

export default Contact