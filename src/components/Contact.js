import React  from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Contact=({incFooter})=>{

  const handleSubmit = async e => {
    e.preventDefault();
  }

  return (
    <React.Fragment>
        <div className="contact-title-father">
        <p className="contact-title" >Contact Me</p>
        </div>  
        <div className="contact-father">

    <form onSubmit={handleSubmit}>
    <div className="name-email-father">
      <input
        type="text"
        name="name"
        placeholder="Please Write Your Name"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Please Write Your Email"
        required
      />
      </div>
      <textarea
        name="message"
        placeholder="Please Write Your Message"
        required
      />
      <button className="send" type="submit">Send</button>
    </form>
    </div>
    {!incFooter && <div className="back">          
            <Link className="back-soon" to="/home" style={{textDecoration: "none"}}>Go to Home</Link>
        </div>}
        <Footer />
       
        </React.Fragment>
  )};
export default Contact;  