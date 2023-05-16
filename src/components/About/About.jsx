import React from 'react';
import "./about.css";
import Cv from "../../assets/elvanunalCV.pdf";
import Info from "./Info";

const About=()=>{
    return(
        <section className="about section" id="about">
             <h2 className="section__title">
                 About Me
             </h2>
            <span className="section__subtitle">
                My introduction
            </span>

            <div className="about-container container grid">
                <img src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3132&q=80"/>
                <div className="about-data">
                    <Info/>

                    <p className="about-description">
                        Frontend developer, I create a web pages with UI / UX user interface, I have years of experience and many clients are happy with the projects carried out.
                    </p>

                    <a download="" href={Cv} className="button button-flex"> Download CV</a>

                </div>
            </div>
        </section>
    )
}

export default About