import React, {useState, useEffect} from "react";
import Aboutme from "./components/Aboutme";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Badget from "./components/Badget";
import Soon from "./components/Soon";
import Loading from "./components/Loading";
import {BrowserRouter as Router , Switch, Route } from "react-router-dom";
import Data from "./images-.json";
import MobileNavbar from "./components/MobileNavbar";
import DesktopNavbar from "./components/DesktopNavbar";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";


function App() {
  const [load , setLoading] = useState(true);

  

  //this function for loading 
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  if (load) return <Loading />;
  <Home />

  return (
    <BrowserRouter>
     <Router>
     <DesktopNavbar />
    <MobileNavbar />
    <Switch>   
    <Route path="/myportffolioreact" exact component={Home}  />
    <Route path="/" exact component={Home}  />
    <Route path="/home" exact component={Home}  />    
    <Route path="/aboutme" exact component={Aboutme} />
    <Route
        path="/projects" exact component={Projects}/>
                <Route path="/skills" exact component={Skills} /> 
        <Route path="/badget" exact component={Badget} /> 
      <Route path="/contact" exact component={Contact} />
      <Route path={() => "/main" || "/admin" || "/any-other-word"}>
      <Soon />
      </Route>  
    </Switch>
    </Router>
  </BrowserRouter>
  );       
}
export default App;