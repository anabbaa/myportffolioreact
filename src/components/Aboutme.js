import React from "react";
import { Link } from "react-router-dom";
const Aboutme = ({datame})=>{
    return (
        <React.Fragment>
        <div className="about-father">
            <img className="me" src={`${process.env.PUBLIC_URL}/${datame[0].imgme}`} alt="ahmed" />
            <h1 className="header-about">AHMED NABBAA</h1>
            <p className="about-text">
Hi my name is Ahmed Nabbaa i come from Syria i live in Germany now. I have 
studied English liturature in Syria but now iam going to change all my entire life
 by enreing the life of coding thanks to DCI institue in Germany who gives
  me this chance in the beggoing may be its a little bit changable but when you 
  fall in love  with it you cant live without codingh even in your dreams ...you code.
  beside development iam a founder member in a assembly in Hamburg called Amalona
  and i have a volunteer cotract with in Födern&Wohnen.
See you soon my guys ofcourse in the market.
            </p>
        </div>
        <Link className="back-soon" to="/home" style={{textDecoration: "none"}}>Back</Link>
        </React.Fragment>
    );
};
export default Aboutme;