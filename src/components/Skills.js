
import React , {useState , useEffect , useRef, } from "react";
// import IntersectionObserver from "react";
import dataSkills from "../imgskills.json";
import { Link } from "react-router-dom";
import Footer from "./Footer";



const Skills = ({incFooter})=>{

  const elementRef = useRef(null);
  const [reachedPoint, setReachedPoint] = useState(false);


  useEffect(() => {
    const handleScrollSkills = () => {
      if (elementRef.current) {
        const { top } = elementRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const offset = 100;
        if (top <= windowHeight - offset) {
          // Perform your action here every time the point is reached
          setReachedPoint(true);
        } else {
          // Reset the reachedPoint state if the user scrolls away from the point
          setReachedPoint(false);
        }
      }
    };

    // Attach event listener for scroll
    window.addEventListener('scroll', handleScrollSkills);

    // Cleanup: remove event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScrollSkills);
    };
  }, []);
  console.log(reachedPoint);



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
                <h2>{title}</h2>
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
                <h2>{title}</h2>
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
                <h2>{title}</h2>
            </div>
        )
    });

    

return (
    <React.Fragment>
        <div className="skill-father">
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
                </div>
                
          {!incFooter &&   <div className="back">
                <Link className="back-soon" to="/" style={{textDecoration: "none"}}>Back</Link>
        </div>}
        {!incFooter && <Footer />}
        
        
        </React.Fragment>
    )
}
export default Skills;