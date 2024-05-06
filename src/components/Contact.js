import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Contact=({incFooter})=>{
    const handleSubmit = (e) => {
        e.preventDefault();
      };
    return (
        <React.Fragment>
        <div className="contact-father">
            <input className="name" type="text"   placeholder="Please wreit Your name here"    />
            <input className="email" type="text"  placeholder="Please write your email here"     />
            <textarea  cols="88" rows="22"        />
            <input className="send" type="submit" value="submit" onSubmit={handleSubmit}/>  
        {!incFooter &&    <Link className="back-soon" to="/home" style={{ textDecoration: "none" }}>
        Back
        </Link>}
        </div>
        <Footer />
        </React.Fragment>
    )
}
export default Contact;  