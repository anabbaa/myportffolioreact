import {  useHistory} from "react-router-dom";

const Header = ()=>{
  const history = useHistory();

    return (
   
   <div className="head">
     <div className="logo"><span className="a-logo">A</span><spasn className="n-logo">N</spasn></div>
<nav className="nav-ul">
    <ul className="nav-li">
    <li className="a" onClick={()=>history.push("/")}>Home</li>
    <li className="a" onClick={()=>history.push("/aboutme")}>About Me</li>
    <li className="a" onClick={()=>history.push("/projects")}>Projects</li>
    <li className="a" onClick={()=>history.push("/skills")}>Skills</li>
    <li className="a" onClick={()=>history.push("/contact")}>Contact Me</li>
    <li className="a" onClick={()=>history.push("/footer")}>My Contacts</li>
      </ul>
    </nav>
    </div>
    )
}
export default Header;