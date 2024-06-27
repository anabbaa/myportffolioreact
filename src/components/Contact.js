import React  from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Contact=({incFooter})=>{

  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   message: ''
  // });

  // const { name, email, message } = formData;

  // const onChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };
  


  const onSubmit = async (e) => {
    e.preventDefault();
  }
    // try {
    //   const response = await fetch('/api/messages', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(formData)
    //   });
    //   console.log(response);

    //   const result = await response.json();
    //   if (response.ok) {
    //     alert(result.message);
    //     setFormData({ name: '', email: '', message: '' });
    //   } else {
    //     alert('Error: ' + result.message);
    //   }
    // } catch (err) {
    //   console.error('Error submitting form:', err);
    //   alert('Error submitting form');
    // }
  

  return (
    <React.Fragment>
        <div className="contact-father">
        <div className="aboutme-title-father">
                <p className="aboutme-title" >Contact Me</p>
            </div>

    <form onSubmit={onSubmit}>
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
    {!incFooter && <div className="back">          
            <Link className="back-soon" to="/home" style={{textDecoration: "none"}}>Go to Home</Link>
        </div>}
    </div>
  
        <Footer />
        </React.Fragment>
  )};
export default Contact;  

