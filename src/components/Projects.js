import React, {useState} from "react";
import { Link } from "react-router-dom";
import Slider from "./slider/Slider";
import Footer from "./Footer";
import dataProjects from "../images-.json";

const Projects = ({incFooter})=>{
    const [val, setVal] = useState(0);


    const sliderAdd = ()=>{
        setVal(val + 1);
        if (val === images.length -1 ){
            setVal(0);
        }
    }
    const sliderMinus = ()=>{
        setVal(val -1 );
        if (val === 0){
            setVal(images.length -1 )
        }
    }



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
            
            <div className="slider-father">
            <div className="aboutme-title-father">
                <p className="aboutme-title" >My Projects</p>
            </div>
                <div className="slider-son">
                <div className="slider">
                    <button className="right-button" onClick={sliderAdd}
                >
                    </button>
            <Slider images={images[val]} />
            <button className="left-button" onClick={sliderMinus}>   
            </button>
            </div>
            {!incFooter && 
            <Link className="back-soon" to="/" style={{ textDecoration: "none" }}> Go to Home</Link>}
    </div>
            </div>
       
    {!incFooter && <Footer />}

    </React.Fragment>
    )
}
export default Projects