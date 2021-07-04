import { Link } from "react-router-dom";

const Header = ()=>{

    return (
   
   <div className="head">
     <div className="logo"><span className="a-logo">A</span><spasn className="n-logo">N</spasn></div>
<nav className="nav">
    <ul className="nav-ul">
      <Link className="a" to="/">
        <li className="nav-li">Home</li>
      </Link>
      <Link className="a" to="/Aboutme">
        <li className="nav-li">About me</li>
      </Link>
      <Link className="a" to="/Projects">
        <li className="nav-li">Projects</li>
      </Link>
      <Link className="a" to="/Skills">
        <li className="nav-li">Skills</li>
      </Link>
      <Link className="a" to="/Contact">
        <li className="nav-li">Contact me</li>
      </Link>
      <Link className="a" to="/Footer">
        <li className="nav-li">My Contacts</li>
      </Link>
      </ul>
    </nav>
    </div>
    )
}
export default Header;