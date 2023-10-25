import React from "react";
import axios from "axios";
import fileDownload from 'js-file-download'

const url = "http://localhost:3000/CV.pdf"

const handleDownload = (url, filename) => {
  axios.get(url, {
    responseType: 'blob',
  })
  .then((res) => {
    fileDownload(res.data, filename)
  })
}

const HomeSub =()=>{
  return (
<React.Fragment>
        <div className="home">
        <p >Hi</p>
        <p >I am Ahmed Nabbaa</p>
        <p >Welcome to my page</p>
        <p >enjoy</p>
      
        <button className="cv" onClick={() => {handleDownload(url, 'CV.pdf')
}}>Download MY CV</button>

        </div>
      </React.Fragment>
    )
}
export default HomeSub;