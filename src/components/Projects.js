import React from "react";
import { Link } from "react-router-dom";


const Projects = (props)=>{

    const images = props.data.map((item,i)=><li className="sliderl" key={i}>
        
        <a href="https://anabbaa.github.io/instgram/"><img src={`${process.env.PUBLIC_URL}/${item.img1}`} alt="instgram" width="500px"height="500px"/></a>
        <a href="https://anabbaa.github.io/countryInfo/"><img src={`${process.env.PUBLIC_URL}/${item.img2}`} alt="country"  width="500px"height="500px"/></a>
        <a href="https://anabbaa.github.io/currency/"><img src={`${process.env.PUBLIC_URL}/${item.img3}`} alt="currency"  width="500px"height="500px"/></a>
        <a href="https://anabbaa.github.io/todoReact/"><img src={`${process.env.PUBLIC_URL}/${item.img4}`} alt="do"  width="500px"height="500px"/></a>
        <a href="https://anabbaa.github.io/loginapp/"><img src={`${process.env.PUBLIC_URL}/${item.img5}`} alt="log"  width="500px"height="500px"/></a>
        <a href="https://anabbaa.github.io/morseCode/"><img src={`${process.env.PUBLIC_URL}/${item.img6}`} alt="morse"  width="500px"height="500px"/></a>
        <a href="https://anabbaa.github.io/chanum/"><img src={`${process.env.PUBLIC_URL}/${item.img7}`} alt="number"  width="500px"height="500px"/></a>
        <a href="https://anabbaa.github.io/password/"><img src={`${process.env.PUBLIC_URL}/${item.img8}`} alt="pass"  width="500px"height="500px"/></a>
        <a href="https://anabbaa.github.io/shapes//"><img src={`${process.env.PUBLIC_URL}/${item.img9}`} alt="shapes"  width="500px"height="500px"/></a>
        <a href="https://anabbaa.github.io/onlineShopReact/"><img src={`${process.env.PUBLIC_URL}/${item.img10}`} alt="shop "  width="500px"height="500px"/></a>
        <a href="https://anabbaa.github.io/StopResetwatch/"><img src={`${process.env.PUBLIC_URL}/${item.img11}`} alt="stopwatch"  width="500px"height="500px"/></a>
        <a href="https://anabbaa.github.io/weekend/"><img src={`${process.env.PUBLIC_URL}/${item.img12}`} alt="week"  width="500px"height="500px"/></a>
        <a href="https://anabbaa.github.io/xoGame/"><img src={`${process.env.PUBLIC_URL}/${item.img13}`} alt="xo"  width="500px"height="500px"/></a>
        <a href="https://anabbaa.github.io/youtube_done/"><img src={`${process.env.PUBLIC_URL}/${item.img14}`} alt="youtube"  width="500px"height="500px"/></a>
        <a href="https://anabbaa.github.io/diditalwatch/"><img src={`${process.env.PUBLIC_URL}/${item.img15}`} alt="digiwatchs"  width="500px"height="500px"/></a>

    </li>
    )
    return (
        <React.Fragment>
            
            <div className="slide">
                    <ul className="slider">
                    {images}
      </ul>
                </div>
                <Link className="back-soon" to="/home" style={{ textDecoration: "none" }}>
        Back
      </Link>
</React.Fragment>
    )
}
export default Projects