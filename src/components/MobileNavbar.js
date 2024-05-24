import React  , {useState} from "react";
import Header from "./Header";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const MobileNavbar =()=>{
    // this componet is for responsive Hamburger Menue
    //this button for open and close hamburger menue
    const [nav, setNav ] = useState(false);
    const handelNav =()=>{
        setNav(!nav);
    }

    const hamurgerButton = <GiHamburgerMenu className="hamburgerMenu" style={{color: "black"}} onClick={handelNav}/>
    const closeButton = < IoCloseSharp className="hamburgerMenu" style={{color: "black"}} onClick={handelNav}/>
return (
    <React.Fragment>
        <div className="mobileNav">
            <div>
                {nav? closeButton:hamurgerButton}
                {nav && <Header />}
            </div>
        </div>
    </React.Fragment>
)
}
export default MobileNavbar;