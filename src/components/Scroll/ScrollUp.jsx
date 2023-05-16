
import "./Scroll.css"
import React from "react";
const ScrollUp=()=>{
    window.addEventListener("scroll",function (){
        const scrollup=document.querySelector(".scrollUp");
        if(this.scrollY >= 560){
            scrollup.classList.add("show-scroll")
        }else {
            scrollup.classList.remove("show-scroll")
        }
    })
    return(
        <a href="#" className="scrollUp">
            <i className="uil uil-arrow-up scrollUp-icon"></i>
        </a>
    )
}

export default ScrollUp