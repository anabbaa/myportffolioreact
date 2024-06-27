import React  from "react"
import { BrowserRouter as Link,  NavLink } from "react-router-dom";

const Header = ()=>{

  const linkNAmes = ["Home", "About ME", "My Projects", "My Skills", "My Badges", "Contact Me" ];

  const aaa = linkNAmes.map((val , i)=>{
    const names = (data)=>{
      switch(data.toLowerCase()){
        case "home":
          return "home";
        case "about me":
          return "aboutme";
        case "my projects":
          return "projects";
        case "my skills":
          return "skills";
        case "my badges":
          return "badges";
        case "contact me":
          return "contacts";
        default :
        return "";
      }
    }
  
    const path = names(val);
    return (
      <NavLink className="anchor" key={i} to={`/${path}`} >{val} </NavLink>
    );
  });

    return (
    <div className="head">
      <div className="logo"><span className="a-logo">A</span><spasn className="n-logo">N</spasn></div>
        <nav  >
          <ul >
            <li>
            {aaa}
            </li>
          </ul>
        </nav>
    </div>
    )
}
export default Header;