import React from "react";

import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { VscMention } from "react-icons/vsc";

const Footer=()=>{
    return(
        <div className="footer-father">
            <div>
         <a href="https://www.facebook.com/ahmed.nabaa.an/">    <FaFacebookF /></a>
             <a href= "https://github.com/anabbaa" ><FaGithub  /></a>
            <a href= "https://twitter.com/AhmedNabaa4" > <FaTwitter /> </a>
             <a  href="mailto:ahmed.nabaa.an@gmail.com">< VscMention /></a>
             </div>
             <div>
             <h1>Made with <div class="heart">❤️</div>By AHMED</h1>
        <h2>All copyrights reserved ® <span class="year"></span></h2>
             </div>
        </div>
    )
}

export default Footer;   