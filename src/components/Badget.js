import React, {useState , useEffect , useRef} from "react";
import { Link } from "react-router-dom";
import Badgets from "../badgets.json";
import Footer from"./Footer";
const Badget = ({incFooter})=>{

  const [reachedPointBadget, setReachedPointBadget] = useState(false);
  const elementRefBadget = useRef(null);

  // Simulated function to reset data or convert to false
  const resetData = () => {
    // Perform your reset logic here
    setReachedPointBadget(false); // Reset the reachedPoint state
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const offset = 4000 // Example extent point, adjust as needed
      
      if (!reachedPointBadget && scrollPosition >= offset) {
        
        setReachedPointBadget(true); // Set reachedPoint to true once the extent point is reached
      }

      // Reset data or convert to false when scrolling above the extent point
      if (reachedPointBadget && scrollPosition <= offset) {
        resetData(); // Reset data or convert to false
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [reachedPointBadget]); // Re-run the effect whenever reachedPoint changes

    const badge = Badgets.map((obj, i)=>{
        const {
            id,
            title,
            a,
            img
        } = obj;
        return(
            // <div ref={elementRefBadget} className={reachedPointBadget? "scrollBadgetFather": ""}>
              <div key={id} className={i === 1 ? "img-badges-father-two":"img-badges-father"}>
                <a target='_blank' href={a} >
                  
                    <img className="badget-img" src={`${process.env.PUBLIC_URL}/${img}`}  alt={title} /> </a>
            </div>
            
          
        )
    })

    return (
        <React.Fragment>
            <div  class= "badget-father">
            <div className="aboutme-title-father">
                <p className="aboutme-title" >My Badges</p>
            </div>
          <div ref={elementRefBadget} className={reachedPointBadget? "badget-son": "scroll-badges-father"}>
            {badge} 
            </div>

            {!incFooter &&    <div className="back">
                <Link className="back-soon" to="/" style={{textDecoration: "none"}}>Go to Home</Link>
        </div>}
            </div>   
        {!incFooter && <Footer /> }
        </React.Fragment>
    )
};
export default Badget;