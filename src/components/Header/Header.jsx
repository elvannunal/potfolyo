import React, {useState} from "react";

import "./header.css";

const Header=()=>{
    /*=============== CHANGE BACKGROUND HEADER ===============* */
    window.addEventListener("scroll",function (){
        const header=document.querySelector(".header");
        if(this.scrollY >= 80){
            header.classList.add("scroll-header")
        }else {
            header.classList.remove("scroll-header")
        }
    })


    /*=============== TOGGLE MENU ===============* */
    const[toggle,showMenu]=useState(false)
    const[activeNav,setactiveNav]=useState("#home")

    return(
      <header className="header">

          <nav className="nav container">
              <a href="index.html" className="nav_logo">Elvan

              </a>
              <div className={toggle? "nav_menu show_menu": "nav_menu"}>

                  <ul className="nav_list grid" >
                      <li className="nav_item">
                          <a href="#home"  onClick={()=> setactiveNav('#home')}
                             className={activeNav==='#home' ? "nav_link active-link" : "nav_link"
                          }>
                              <i className="uil uil-estate nav_icon"></i> Home
                          </a>
                      </li>
                      <li className="nav_item">
                          <a href="#about"  onClick={()=> setactiveNav('#about')}
                             className={activeNav==='#about' ? "nav_link active-link" : "nav_link"
                             }>
                              <i className="uil uil-user nav_icon"></i>About
                          </a>

                      </li>
                      <li className="nav_item">
                          <a href="#skills"  onClick={()=> setactiveNav('#skills')}
                             className={activeNav==='#skills' ? "nav_link active-link" : "nav_link"
                             }>
                              <i className="uil uil-user nav_icon"></i>Skills
                          </a>

                      </li>
                      <li className="nav_item">
                          <a href="#services"  onClick={()=> setactiveNav('#services')}
                             className={activeNav==='#services' ? "nav_link active-link" : "nav_link"
                             }>
                              <i className="uil uil-user nav_icon"></i>Services
                          </a>

                      </li>
                      <li className="nav_item">

                          <a href="#portfolio"  onClick={()=> setactiveNav('#portfolio')}
                             className={activeNav==='#portfolio' ? "nav_link active-link" : "nav_link"
                             }>
                              <i className="uil uil-user nav_icon"></i>Portfolio
                          </a>

                      </li>
                      <li className="nav_item">

                          <a href="#contact"  onClick={()=> setactiveNav('#contact')}
                             className={activeNav==='#contact' ? "nav_link active-link" : "nav_link"
                             }>
                              <i className="uil uil-user nav_icon"></i>Contact
                          </a>

                      </li>

                      <i className="uil uil-times nav_close" onClick={()=>showMenu(!toggle)}></i>
                  </ul>
              </div>
              <div className="nav_toggle"  onClick={()=>showMenu(!toggle)}>
                  <i className="uil uil-apps"></i>

              </div>
          </nav>

      </header>
    )
}
export default Header
