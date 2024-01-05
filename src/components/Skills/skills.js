import React from "react";
import './skills.css';
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'

function Skills() { 
    return(
        <section id="skills">
            <span className="skillTitle"> What I do </span>
            <span className="skillDesc"> I'am a skilled and passionate Full stack developer. I love creating visually appealing and user friednly websites. I'am professional in MERN stack and design software such as Figma and adobe photoshop </span>
            
            <div className="skillBars"> 
              
              <div className="skillBar">
                <img src={UIDesign} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2> UI/UX Design </h2>    
                    <p> demo text </p>
                </div>
              </div>

              <div className="skillBar">
                <img src={WebDesign} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2> Web Design </h2>    
                    <p> demo text </p>
                </div>
              </div>

              <div className="skillBar">
                <img src={AppDesign} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2> App Design </h2>    
                    <p> demo text </p>
                </div>
              </div>

            </div>
        </section>
    )
}

export default Skills;