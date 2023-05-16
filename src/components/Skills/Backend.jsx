import React from "react";
import  "./skills.css"
const Backend=()=>{
    return(
        <section className="skills__content" >
            <h3 className="skills__title">Backend Developer</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i className="bx bx-badge-check"> </i>
                        <div>
                            <h3 className="skills__name">Asp.Net</h3>
                            <span className="skills_level">Basic</span>

                        </div>
                    </div>


                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">SQL </h3>
                            <span className="skills_level">Basic</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Backend