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
  
  // const url = "http://localhost:3000/CV.pdf"
const url = `http://ahmednabbaa.de/CV.pdf`
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
        <div className="cv-father">
        <button className="cv" onClick={() => {handleDownload(url, 'CV.pdf')
}}>Download MY CV</button>
</div>
        </div>

        <Aboutme incFooter={true} />  
        <Projects  incFooter={true} />
        <Skills incFooter={true}  />
        <Badgets incFooter={true} />        
        <Contact incFooter={true}  />
      </React.Fragment>
    )
}
export default HomeSub;


