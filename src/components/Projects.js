import React, {useState} from "react";
import { Link } from "react-router-dom";
import Slider from "./slider/Slider";

const Projects = (props)=>{
    const [val, setVal] = useState(0);

    const images = props.data.map((item,)=>{
        const {
            id,
            a,
            img,
            title,
            description,
        }= item;
    return (

        <div>
               <a  key={id} href={a}><img className="img"  src={`${process.env.PUBLIC_URL}/${img}`}
                width="500px" height="500px" alt={title}/></a>

              < div className="overlay">
                  <div className="desc">{description}</div>
                  </div>
        </div>
    )
    });
    return (
        <React.Fragment>
             <div className="slider-father">
                 <div className="slider">
      <button className="right-button" onClick={() => setVal(val + 1)}
       disabled={images.length -1 === val} >
      </button>

            <Slider images={images[val]} />

      <button className="left-button" onClick={() => setVal(val - 1)} disabled={val === 0}>   
      </button>
      </div>
    </div>
                
                <Link className="back-soon" to="/" style={{ textDecoration: "none" }}>
        Back
      </Link>
</React.Fragment>
    )
}
export default Projects