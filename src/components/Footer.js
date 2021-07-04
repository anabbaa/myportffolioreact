import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { VscMention } from "react-icons/vsc";

const Footer=()=>{
    let showdate = new Date();
    let displaydate = showdate.getFullYear();
    return(
        <div className="footer-father">
            <div className="icon-father">
         <a className="icon" href="https://www.facebook.com/ahmed.nabaa.an/">  < FaFacebookF /></a>
             <a className="icon"  href= "https://github.com/anabbaa" ><FaGithub  /></a>
            <a className="icon"  href= "https://twitter.com/AhmedNabaa4" > <FaTwitter /> </a>
             <a className="icon"   href="mailto:ahmed.nabaa.an@gmail.com" target="_blank">< VscMention /></a>
             </div>
             <div className="reference">
             <h1 className="reference-an" >Made with <div class="heart">❤️</div>By AHMED</h1> 
        <h2 className="reference-mid">All copyrights reserved ® 
            <input className="date" type="text" value= {displaydate}   readonly="true"/>
        </h2>
             </div>
        </div>
    )
}

export default Footer;   