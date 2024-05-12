import React, {useState} from "react";
import { Link } from "react-router-dom";
import Slider from "./slider/Slider";
import Footer from "./Footer";
import dataProjects from "../images-.json";

const Projects = ({incFooter})=>{
    const [val, setVal] = useState(0);

    const images = dataProjects.map((item,)=>{
        const {
            id,
            a,
            img,
            title,
            description,
        }= item;
    return (
        /*this over lay to show title of project when clicking on it  */
        <div className="overlay-father" > 
            <a  key={id} href={a} target="_blank" >
            <img className="img"  src={`${process.env.PUBLIC_URL}/${img}`}
                width="500px" height="500px" alt={title} />
                < div className="overlay">
                <div className="desc">{description}</div>
                </div>
                </a>
        </div>
    )
    });
    return (  
        <React.Fragment>
            <div className="project-title-father">
                <p className="contact-title" >My Projects</p>
                </div>

            <div className="slider-father">
                <div className="slider">
                    <button className="right-button" onClick={() => setVal(val + 1)}
                    disabled={images.length -1 === val} >
                    </button>
            <Slider images={images[val]} />
            <button className="left-button" onClick={() => setVal(val - 1)} disabled={val === 0}>   
            </button>
            </div>
            {!incFooter && 
            <Link className="back-soon" to="/" style={{ textDecoration: "none" }}> Go to Home</Link>}
    </div>
    {!incFooter && <Footer />}

    </React.Fragment>
    )
}
export default Projects