
import React , {useState , useEffect , useRef, } from "react";
// import IntersectionObserver from "react";
import dataSkills from "../imgskills.json";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Skills = ({incFooter})=>{

const elementRef = useRef(null);
const [reachedPoint, setReachedPoint] = useState(false);

// Simulated function to reset data or convert to false
const resetData = () => {
  // Perform your reset logic here
  setReachedPoint(false); // Reset the reachedPoint state
};

useEffect(() => {
    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const offset = 2000 // Example extent point, adjust as needed
        
        if (!reachedPoint && scrollPosition >= offset) {
          
          setReachedPoint(true); // Set reachedPoint to true once the extent point is reached
        }
  
        // Reset data or convert to false when scrolling above the extent point
        if (reachedPoint && scrollPosition <= offset) {
          resetData(); // Reset data or convert to false
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [reachedPoint]); // Re-run the effect whenever reachedPoint changes

    const program = dataSkills.slice(0, 20).map((obj, i)=>{
        const {
            id,
            title,
            img,
        } = obj;
        return (
            <div className="img-father" key={id}>
                <div className="img-wrapper">
                <img className="img-skills" src={`${process.env.PUBLIC_URL}/${img}`} alt={title} />
                </div>
                <div className="title-father">
                <h2 className="title">{title}</h2>
                </div>
            </div>
        )
    });

    const lang = dataSkills.slice(20 , 23).map((obj, i)=>{
        const {
            id,
            title,
            img,
        } = obj;
        return (
            <div  className="img-father" key={id}>
                <div className="img-wrapper">
                    <img className="img-skills" src={`${process.env.PUBLIC_URL}/${img}`} alt={title}/>
                </div>
                <div className="title-father">
                <h2 className="title">{title}</h2>
            </div>
            </div>
        )
    });

    const others = dataSkills.slice(23 , 28).map((obj, i)=>{
        const {
            id,
            title,
            img,
        } = obj;
        return (
            <div  className="img-father" key={id}>
                <div className="img-wrapper">
                    <img className={ i === 4  ? "github":"img-skills" } 
                    src={`${process.env.PUBLIC_URL}/${img}`} alt={title} />
                </div>
                <div className="title-father">
                <h2 className="title">{title}</h2>
                </div>
            </div>
        )
    });

return (
    <React.Fragment>

        <div className="skill-father">
        <div ref={elementRef} className={reachedPoint ? "skills-title-father":"a"}>
                <p className="aboutme-title" >My Skills</p>
            </div>
            <div className="skill-son">
            <div ref={elementRef} className={reachedPoint ? "scrollSkills":"program"}>
                <h2 className="h-skills"> programming </h2>
                {program}
                </div>

            <div ref={elementRef} className={reachedPoint ? "scrollLang":"others"}>
                <h2 className="h-skills"> Languages </h2>
                {lang}</div>
                
            <div ref={elementRef} className={reachedPoint ? "scrollOthers":"lang"}>
                <h2 className="h-skills"> Others </h2>
                {others}
                </div>
                </div>
                {!incFooter &&   <div className="back">
                <Link className="back-soon" to="/" style={{textDecoration: "none"}}>Go to Home</Link>
        </div>}
                </div>
                
      
        {!incFooter && <Footer />}
        </React.Fragment>
    )
}
export default Skills;