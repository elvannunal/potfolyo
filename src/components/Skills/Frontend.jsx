import React from "react";
import  "./skills.css"
const Frontend=()=>{
    return(
        <section className="skills__content" >
            <h3 className="skills__title">Frontend Developer</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i class="bx bx-badge-check"> </i>
                        <div>
                            <h3 className="skills__name"> Html</h3>
                            <span className="skills_level">Intermediate</span>

                        </div>
                    </div>

                    <div className="skills__data">
                        <i class="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Css </h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Javascript</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                    </div>
                </div>
                <div className="skills__group">
                    <div className="skills__data">
                        <i class="bx bx-badge-check"> </i>
                        <div>
                            <h3 className="skills__name">Bootstrap</h3>
                            <span className="skills_level">Intermediate</span>

                        </div>
                    </div>

                    <div className="skills__data">
                        <i class="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name"> React Js</h3>
                            <span className="skills_level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Angular</h3>
                            <span className="skills_level">Basic</span>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Frontend