import React from "react";
import { Link } from "react-router-dom";


const Home =()=>{
    return (
      <React.Fragment>
        <div className="home">
        <p className="home1">Hey</p>
        <p className="home1">I am Ahmed Nabbaa</p>
        <p className="home1">Welcome to my page</p>
        <p className="home1">enjoy</p>
        <a className="cv" href="./mycv.pdf" download>
        My CV
      </a>
        </div>
      </React.Fragment>
    )
}
export default Home;