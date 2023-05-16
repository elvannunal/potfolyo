import React from 'react';

import "./about.css";
const Info=()=>{
    return(
        <div className="about_info grid">

            <div className="about-box">
                <i class="bx bx-award"></i>
                <h3 className="about-title about-icon">Experience</h3>
                <span className="about-subtitle">1 Years Working </span>
            </div>
            <div className="about-box">
                <i className="bx bx-briefcase-alt about-icon"></i>

                <h3 className="about-title">Competed</h3>
                <span className="about-subtitle">30+ Projects </span>
            </div>
        </div>

    )
}

export default Info;