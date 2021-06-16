import React, {useState} from "react";
const Header = ()=>{
    const [userInpur, setUserInput] = useState();
    function menue (){

    }
    return (
        <div className="head">
            <div className="hamburger-menue " onClick={menue}>
                <div className="hamburger-menue-div first-line"></div>
                <div className="hamburger-menue-div second-line"></div>
                <div className="hamburger-menue-div third-line"></div>
            </div>

            <div class="drop-menu-father">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About me</a></li>
                    <li><a href="">Projectss</a></li>
                    <li><a href="">Contacts</a></li>
                </ul>
               </div > 



        </div>
    )
}







export default Header;
