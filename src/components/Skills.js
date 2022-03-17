
import React from "react";
import { Link } from "react-router-dom";
const Skills = ({dataskills})=>{
return (
    <React.Fragment>
        <div className="skill-father">
            <div className="skill-son">
            <div className="program"><h1 className="h-skills"> programming</h1>
             <h2><img className="img-skills" src={`${process.env.PUBLIC_URL}/${dataskills[0].img1}`} alt="html"/> HTML5
              </h2>
              <h2><img className="img-skills"src={`${process.env.PUBLIC_URL}/${dataskills[0].imgcss}`} />CSS3</h2>
              <h2> <img className="img-skills"src={`${process.env.PUBLIC_URL}/${dataskills[0].img2}`} alt="sass"/>Sass</h2>
              <h2>  <img className="img-skills"src={`${process.env.PUBLIC_URL}/${dataskills[0].img3}`} alt="jv"/>Javascript</h2>
             <h2><img className="img-skills"src={`${process.env.PUBLIC_URL}/${dataskills[0].imgdom}`} />DOM</h2>
             <h2><img className="img-skills"src={`${process.env.PUBLIC_URL}/${dataskills[0].img4}`} />React</h2>  
             <h2> <img className="img-skills"src={`${process.env.PUBLIC_URL}/${dataskills[0].img5}`} alt="node"/>Node.js</h2>

             <h2><img className="img-skills"src={`${process.env.PUBLIC_URL}/${dataskills[0].imgexpress}`} />Express</h2>
             <h2><img className="img-skills"src={`${process.env.PUBLIC_URL}/${dataskills[0].imgmongo}`} />Mongo</h2>

             <h2><img className="img-skills"src={`${process.env.PUBLIC_URL}/${dataskills[0].imghandelbar}`} />HANDELBARS</h2>
             <h2><img className="img-skills"src={`${process.env.PUBLIC_URL}/${dataskills[0].imgejs}`} />EJS</h2>
             <h2><img className="img-skills"src={`${process.env.PUBLIC_URL}/${dataskills[0].imgmysql}`} />MYSQL</h2>
        </div>
        <div className="lang"><h1  className="h-skills"> Languages</h1>
        <h2> <img className="img-skills"src={`${process.env.PUBLIC_URL}/${dataskills[0].img7}`} alt="ar"/>Arabic: Native</h2>
        <h2> <img className="img-skills"src={`${process.env.PUBLIC_URL}/${dataskills[0].img8}`} alt="eng"/>English: Proficient</h2>
        <h2><img className="img-skills"src={`${process.env.PUBLIC_URL}/${dataskills[0].img9}`} alt="ger"/>German: intermediate</h2></div>
        <div className="others"><h1  className="h-skills"> Others</h1>
        <h2> <img className="img-skills"src={`${process.env.PUBLIC_URL}/${dataskills[0].img10}`} alt="win"/>Windows</h2>
        <h2> <img className="img-skills"src={`${process.env.PUBLIC_URL}/${dataskills[0].img11}`} alt="lin"/>Linuk</h2>
        <h2> <img className="img-skills"src={`${process.env.PUBLIC_URL}/${dataskills[0].img12}`} alt="office"/>M.S Office</h2>
        <h2> <img className="img-skills"src={`${process.env.PUBLIC_URL}/${dataskills[0].img13}`} alt="code"/>M.S Code</h2>
        <h2> <img className="img-skills"src={`${process.env.PUBLIC_URL}/${dataskills[0].img14}`} alt="hub"/>Github</h2></div>

        </div>

        <Link className="back-soon" to="/" style={{textDecoration: "none"}}>Back</Link>

        </div>
        </React.Fragment>
)
}
export default Skills;