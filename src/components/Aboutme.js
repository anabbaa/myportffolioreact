import React from "react";
import { Link } from "react-router-dom";
const Aboutme = ({datame})=>{
    // propos datatime is for the picture from json file
    return (
        <React.Fragment>
        <div className="about-father">
            <div className="me-father">
                <div className="img-father">
            <img className="me" src={`${process.env.PUBLIC_URL}/${datame[0].imgme}`} alt="ahmed" />
            </div>
            <div className="header-father">
            <h1 className="header-about">AHMED NABBAA</h1>
            </div>
            </div>
          
            <p className="about-text">
            I have studied English Literature in my home country Syria. In 2008 I graduated with a 
            Bachelor degree  and I have worked for four years as an English teacher there. In 2015 I 
            moved to Germany and In 2020, I decided to change my career and dive into Web Development - 
            a field that has been totally new for me. So I attended Full Stack Web Development. 
            After that I have noticed how important it is to know about the other side of Information Technology
            such as servers, hardware, networking, testing,  security and deployment in general. 
         So I decided to further pursue  my interest in technology by studying to become an AWS Cloud practitioner
            with the DCI  in August 2022.Now I have already graduated from two intensive training courses from DCI
            and want to start searching for an internship or a job in Web Development or Cloud Practitioner to kick start my career.
            </p>
            <Link className="back-soon" to="/home" style={{textDecoration: "none"}}>Back</Link>
        </div>
        </React.Fragment>
    );
};
export default Aboutme;