import React, {useState , useEffect , useRef} from "react";
import { Link } from "react-router-dom";
import Badgets from "../badgets.json";
import Footer from"./Footer";
const Badget = ({incFooter})=>{

    const [reachedPointBadget, setReachedPointBadget] = useState(false);

    const elementRefBadget = useRef(null);

    useEffect(() => {
      const handleScroll = () => {
        if (elementRefBadget.current) {
          const { top } = elementRefBadget.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const offset = 100;
          if (top <= windowHeight - offset) {
            // Perform your action here every time the point is reached
            setReachedPointBadget(true);
          } else {
            // Reset the reachedPoint state if the user scrolls away from the point
            setReachedPointBadget(false);
          }
        }
      };
  
      // Attach event listener for scroll
      window.addEventListener('scroll', handleScroll);
  
      // Cleanup: remove event listener when component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const badge = Badgets.map((obj, i)=>{
        const {
            id,
            title,
            a,
            img
        } = obj;
        return(
            <div key={id} ref={elementRefBadget} className={reachedPointBadget? "scrollBadgetFather": ""}>
                <a target='_blank' href={a} >
                    <img className="badget-img" src={`${process.env.PUBLIC_URL}/${img}`}  alt={title} /> </a>
            </div>

        )
    })

    return (
        <React.Fragment>
            <div  class= "badget-father">
            {badge}    
            </div>

        {!incFooter &&    <div className="back">
                <Link className="back-soon" to="/" style={{textDecoration: "none"}}>Back</Link>
        </div>}
       {!incFooter && <Footer /> }
        </React.Fragment>
    )
};
export default Badget;