import React, {useState} from "react";
import  "./services.css"

const Service=()=>{

    const[toggleState,setToggleState]=useState(0);

    const toggleTab=(index)=>{
        setToggleState(index)
    }

    return(
        <section className="services section" id="services" >
            <h2 className="section__title">
                Services
            </h2>
            <span className="section__subtitle">
            What I Offer
            </span>


            <div className="services__container container grid">

                <div className="services__content">
                    <div className="skills__data">
                        <i className="uil uil-web-grid services__icon"> </i>
                        <h3 className="services__title">Frontend <br/> Developer</h3>
                    </div>

                    <span className="services__button" onClick={()=>toggleTab(1)}>
                        View More
                        <i className="uil uil-arrow-right services_button-icon"></i>
                    </span>
                    <div className={toggleState === 1 ? 'active-modal' : 'services__modal' }>
                        <div className="services__modal_content">
                            <i className="il uil-times services_modal_close"
                               onClick={()=> toggleTab(0)}
                            ></i>
                            <h3 className="services-modal-title">Frontend Developer</h3>
                            <p className="services-modal-description">  Service with more than a years of experience.
                                Providing quality work to clients and companies.</p>
                            <ul className="services_modal_services grid">
                                <li className="services_modal_service">
                                    <i className= "uil uil-check-circle services_modal_icon"></i>
                                    <p className="services_modal_info">
                                        Adept at collaborating with cross-functional teams to deliver high-quality front end solution.
                                    </p>
                                </li>
                                <li className="services_modal_service">
                                    <i className= "uil uil-check-circle services_modal_icon"></i>
                                    <p className="services_modal_info">
                                        Strong problem-solving skills and a focus on delivering seamless user experience.
                                    </p>
                                </li>
                                <li className="services_modal_service">
                                    <i className= "uil uil-check-circle services_modal_icon"></i>
                                    <p className="services_modal_info">
                                        Committed to staying updated with the latest industry trends and technology.
                                    </p>
                                </li>

                            </ul>
                        </div>

                    </div>

                </div>


                <div className="services__content">
                    <div className="skills__data">
                        <i className="uil uil-web-grid services__icon"> </i>
                        <h3 className="services__title">Product <br/> Designer</h3>
                    </div>

                    <span className="services__button" onClick={()=>toggleTab(2)}>
                        View More
                        <i className="uil uil-arrow-right services_button-icon"></i>
                    </span>
                    <div className={toggleState === 2 ? 'active-modal' : 'services__modal' }>
                        <div className="services__modal_content">
                            <i className="il uil-times services_modal_close"
                            onClick={()=> toggleTab(0)}
                            ></i>
                            <h3 className="services-modal-title">Product Designer</h3>
                            <p className="services-modal-description">  Service with more than a years of experience.
                                Providing quality work to clients and companies.</p>
                            <ul className="services_modal_services grid">
                                <li className="services_modal_service">
                                    <i className= "uil uil-check-circle services_modal_icon"></i>
                                    <p className="services_modal_info">
                                        I develop the user interface.
                                    </p>
                                </li>
                                <li className="services_modal_service">
                                    <i className= "uil uil-check-circle services_modal_icon"></i>
                                    <p className="services_modal_info">
                                        Web page development.
                                    </p>
                                </li>
                                <li className="services_modal_service">
                                <i className= "uil uil-check-circle services_modal_icon"></i>
                                <p className="services_modal_info">
                                    Design and mockups of products for companies.
                                </p>
                            </li>

                            </ul>
                        </div>

                    </div>

                </div>
                <div className="services__content">
                    <div className="skills__data">
                        <i className="uil uil-web-grid services__icon"> </i>
                        <h3 className="services__title">UI/UX <br/> Designer</h3>
                    </div>

                    <span className="services__button" onClick={()=>toggleTab(3)}>
                        View More
                        <i className="uil uil-arrow-right services_button-icon"></i>
                    </span>
                    <div className={toggleState === 3 ? 'active-modal' : 'services__modal' }>
                        <div className="services__modal_content">
                            <i className="il uil-times services_modal_close"
                               onClick={()=> toggleTab(0)}
                            ></i>
                            <h3 className="services-modal-title">UI/UX Designer</h3>
                            <p className="services-modal-description">  Service with more than a years of experience.
                                Providing quality work to clients and companies.</p>
                            <ul className="services_modal_services grid">
                                <li className="services_modal_service">
                                    <i className= "uil uil-check-circle services_modal_icon"></i>
                                    <p className="services_modal_info">
                                        I develop the user interface.
                                    </p>
                                </li>
                                <li className="services_modal_service">
                                    <i className= "uil uil-check-circle services_modal_icon"></i>
                                    <p className="services_modal_info">
                                        I develop the user experience.
                                    </p>
                                </li>
                                <li className="services_modal_service">
                                    <i className= "uil uil-check-circle services_modal_icon"></i>
                                    <p className="services_modal_info">
                                        I develop the best design for company.
                                    </p>
                                </li>

                            </ul>
                        </div>

                    </div>

                </div>

            </div>


        </section>
    )
}

export default Service