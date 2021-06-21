import React, {useState} from "react";
import Footer from "./components/Footer";
import Aboutme from "./components/Aboutme";
import Header from "./components//Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Soon from "./components/Soon";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Data from "./images-.json";






function App() {
  const [data , setData] = useState(Data);
  return (
    <Router>
      
      <Header />
      
      <Switch>
      <Route path="/" exact component={Home} />

      <Route
          path="/aboutme"
          exact
          component={() => <Aboutme data={Data} />}
        />
        


      <Route
          path="/projects"
          exact
          component={() => <Projects data={Data} />}
        />


        <Route path="/contact" exact component={Contact} />

        <Route path="/footer" exact component={Footer} />

        <Route path={() => "/main" || "/admin" || "/any-other-word"}>
        <Soon />

        </Route>
      
      </Switch>
    </Router>
        

  );
      

        
}

export default App;
