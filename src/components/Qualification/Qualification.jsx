import React, {useState} from "react";
import  "./qualification.css"

const Qualification=()=>{

    return(
        <section className="qualification section">
            <h2 className="section__title">
                Qualification
            </h2>
            <span className="section__subtitle">
            My Personal Journey
            </span>


            <div className="qualification__container container">

                <div className="qualification__tabs">
                    <div className="qualification__button qualification__active button--flex">
                        <i className="uil uil-graduation-cap qualification_icon"> </i>Education
                    </div>
                    <div className="qualification__button button--flex" >
                        <i className="uil uil-briefcase-alt qualification_icon"></i>Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className="qualification__content qualification_content_active">


                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Atatürk University</h3>
                                <span className="qualification_subtitle">Computer Programing</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calender-alt"> </i>2020-2023
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>


                        <div className="qualification_data">

                            <div></div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>

                            <div>
                                <h3 className="qualification_title">Kod Yazılım/Sednacloud</h3>
                                <span className="qualification_subtitle">Frontend Developer</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calender-alt"> </i>August 2020- March 2023
                                </div>
                            </div>

                        </div>



                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Akdeniz University</h3>
                                <span className="qualification_subtitle">Child Development</span>
                                <div className="qualification_calender">
                                    <i className="uil uil-calender-alt"> </i>2018-2022
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>



                    </div>


                </div>

            </div>



        </section>
    )
}

export default Qualification