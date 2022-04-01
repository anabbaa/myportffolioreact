import React  , {useState} from "react";
import Header from "./Header";
import { AiOutlineMenu } from 'react-icons/ai';
import {AiOutlineClose} from 'react-icons/ai';
const MobileNavbar =()=>{
    //this button for open and close hamburger menue
    const [nav, setNav ] = useState(false);
    const handelNav =()=>{
        setNav(!nav);
    }

    const hamurgerButton = <AiOutlineMenu className="hamburgerMenu" onClick={handelNav}/>
    const closeButton = < AiOutlineClose className="hamburgerMenu" onClick={handelNav}/>
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