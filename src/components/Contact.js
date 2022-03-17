import React from "react";
import { Link } from "react-router-dom";

const Contact=()=>{
    const handleSubmit = (e) => {
        e.preventDefault();
      };
    return (
        <React.Fragment>
        <div className="contact-father">
            <input className="name" type="text"   placeholder="Please wreite Your name here"    />
            <input className="email" type="text"  placeholder="Plöease write your email here"     />
            <textarea  cols="88" rows="22"        />
            <input className="send" type="submit" value="submit" onSubmit={handleSubmit}/>  
            <Link className="back-soon" to="/home" style={{ textDecoration: "none" }}>
        Back
        </Link>
        </div>
        </React.Fragment>
    )
}

export default Contact;  