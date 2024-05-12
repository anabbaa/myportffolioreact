import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
const Aboutme = ({incFooter })=>{

    return (
        <React.Fragment>
            <div className="contact-title-father">
                <p className="contact-title" >About Me</p>
            </div>

        <div className="about-father">
            <h1 className="header-about">AHMED NABBAA</h1>
            <p className="about-text">
            I have studied English Literature in my home country Syria. In 2008 I graduated with a 
            Bachelor degree  and I have worked for four years as an English teacher there. In 2015 I 
            moved to Germany and In 2020, I decided to change my career and dive into Web Development - 
            a field that has been totally new for me. So I attended Full Stack Web Development. 
            After that I have noticed how important it is to know about the other side of Information 
            Technology such as servers, hardware, networking, testing,  security and deployment 
            in general. So I decided to further pursue  my interest in technology by studying to become
            an AWS Cloud practitioner with the DCI  in August 2022. Then I pursue my interest in Cloud 
            technology as self-learning. So  i have completed a course in Udemy in AWS Associate 
            Developer and i have already passed its exam and become an AWS Certified Developer. 
            Now I want  to start searching for an internship or a job in Web Development 
            or Cloud Developer to kick start my career. 
            </p>
            </div>
{!incFooter && <div className="back">          
            <Link className="back-soon" to="/home" style={{textDecoration: "none"}}>Go to Home</Link>
        </div>}
        {!incFooter && <Footer />}
        </React.Fragment>
    );
};
export default Aboutme;