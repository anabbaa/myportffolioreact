import { BrowserRouter as Link,  NavLink } from "react-router-dom";
const Header = ()=>{

    return (
   <div className="head">
     <div className="logo"><span className="a-logo">A</span><spasn className="n-logo">N</spasn></div>
<nav className="nav-ul">
    <ul className="nav-li">
      <NavLink className="anchor" to="/home"><li className="a">Home</li></NavLink>
      <NavLink className="anchor" to="/aboutme"><li  className="a">About Me</li></NavLink>
      <NavLink className="anchor" to="/projects"><li  className="a">My rojects</li></NavLink>
      <NavLink className="anchor" to="/skills"><li  className="a">Skills</li></NavLink>
      <NavLink className="anchor" to="/contact"><li  className="a">Contact Me</li></NavLink>
      <NavLink className="anchor" to="/footer"><li  className="a">My Contacts</li></NavLink>
      </ul>
    </nav>
    </div>
    )
}
export default Header;