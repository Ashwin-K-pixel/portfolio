import React from "react";
import './intro.css';
import { Link } from 'react-scroll'
import btnImg from '../../assets/hireme.png'
function Intro() { 
        return(
            <section id="intro">
                <div className="introContent">
                    <span className="hello"> Hello,</span>
                    <span className="introText"> I'm <span className="introName"> Ashwin </span> <br/> Full Stack Developer </span>
                    <p className="introPara"> I am a skilled Full stack developer </p>
                    <Link><button className="btn"> <img src= {btnImg} alt="" className="btnImg"/> Hire Me </button> </Link>
                </div>
            </section>
        )
}


export default Intro;
