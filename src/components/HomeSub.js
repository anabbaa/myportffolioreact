import React from "react";
import TypeWriter from "./TypeWriter";
import axios from "axios";
import fileDownload from 'js-file-download';
import meimg from "../meimg.json";
import Aboutme from "./Aboutme";
import Skills from "./Skills";
import Badgets from "./Badget"
import Projects from "./Projects"
import Contact from "./Contact";

const HomeSub =()=>{
  
  const url = "http://localhost:3000/CV.pdf"

const handleDownload = (url, filename) => {
  axios.get(url, {
    responseType: 'blob',
  })
  .then((res) => {
    fileDownload(res.data, filename)
  })
}

  const myPhoto = meimg.map((obj,i) =>{
    const {
      img,
      title
    } = obj;
    return(
      <div>
  
  <img className="my-img" src={`${process.env.PUBLIC_URL}/${img}`} alt={title} /> 
      </div>
    )
  })


  return (
<React.Fragment>
        <div className="home">
          <div className="welcome-father">
            <div className="myimg-father">
        {myPhoto}
        </div>
        <div  className="typing-father">
        <TypeWriter />
        </div>
        
        </div>
        <button className="cv" onClick={() => {handleDownload(url, 'CV.pdf')
}}>Download MY CV</button>

        </div>
        <div className="aboutme-home-father">
        <p className="aboutme-home" >About me</p>
        </div>
        <Aboutme incFooter={true} />
        <div className="aboutme-home-father">
        <p className="aboutme-home" > My Projects</p>
        </div>
        <Projects  incFooter={true} />
        <div className="aboutme-home-father">
        <p className="aboutme-home" >Skills</p>
        </div>         
        <Skills incFooter={true}  />
  
        <div className="aboutme-home-father">
        <p className="aboutme-home" >My Badgets</p>
        </div>
         <Badgets incFooter={true} />
         <div className="aboutme-home-father">
        <p className="aboutme-home" >Contact Me</p>
        </div>
        <Contact incFooter={true}  />



      </React.Fragment>
    )
}
export default HomeSub;