import React, {useState, useEffect} from "react";
import Aboutme from "./components/Aboutme";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Badget from "./components/Badget";
import Soon from "./components/Soon";
import Loading from "./components/Loading";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MobileNavbar from "./components/MobileNavbar";
import DesktopNavbar from "./components/DesktopNavbar";


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
     <Router>
     <DesktopNavbar />
    <MobileNavbar />
    <Routes >   
    <Route path="/myportffolioreact" element={<Home/>} />
    <Route path="/" element={<Home/>}  />
    <Route path="/home" element={<Home/>}  />    
    <Route  path="/aboutme" element={< Aboutme />} />
    <Route path="/projects" element={<Projects />}/>
    <Route path="/skills" element={<Skills />} /> 
    <Route path="/badget" element={<Badget />} /> 
    <Route path="/contact" element={<Contact />} />
    <Route path="/main" element={<Soon />} />
        <Route path="/admin" element={<Soon />} />
        <Route path="/any-other-word" element={<Soon />} />
    </Routes>
    </Router>
  );       
}
export default App;