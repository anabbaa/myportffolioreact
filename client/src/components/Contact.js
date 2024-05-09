import React , {useState}  from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import axios from "axios";

const Contact=({incFooter})=>{
    
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  


  const handleSubmit = async e => {
     e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/contact", formData);
      alert('Message sent successfully!');
      setFormData({ name: formData.name, email:formData.email , message: formData.nessage });
    } catch (err) {
      console.error('Failed to send message:', err);
      alert('Failed to send message. Please try again later.');
    }
  };



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
        value={formData.name}
        onChange={handleChange}
        placeholder="Please Write Your Name"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Please Write Your Email"
        required
      />
      </div>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
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