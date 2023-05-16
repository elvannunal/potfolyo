import React, {useEffect, useState} from "react";
import "./work.css"
import {projectData, projectsNav} from "./Data";
import WorksItem from "./WorksItem";
const Works=()=>{
    const[item,setItem]=useState({name:"all"});
    const[projects,setProjects]=useState([]);
    const[active,setActive]=useState(0);

    useEffect(()=>{
        if(item.name==="all"){
            setProjects(projectData);
        }else{
            const newProjects=projectData.filter((project)=>{
                return project.category.toLowerCase()===item.name;
            });
            setProjects(newProjects);
        }
    },[item])

    const handleClick=(e,index)=>{
        setItem({name:e.target.textContent.toLowerCase()});
        setActive(index);
    }
    return(
        <div>
            <div  className="work-filters">
            {projectsNav.map((item,index)=>{
                return(
                 <span onClick={(e)=>{handleClick(e,index)}}
                       className={`${active===index ? "active-work": ""} work-item`} key={index}>
                    {item.name}
                </span>
                )

            })}

            </div>

            <div className="work-container container grid">
                {projects.map((item)=>{
                    return <WorksItem item={item} key={item.id}/>
                })}
            </div>

        </div>

    )
}

export default Works