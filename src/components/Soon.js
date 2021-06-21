import React from "react";
import { Link } from "react-router-dom";
const Soon = () => {
    return( 
        <React.Fragment>
        <h1 className="soon">Coming Soon</h1>
    <Link className="back-soon" to="/home" style={{ textDecoration: "none" }}>
        Back
        </Link>
        </React.Fragment>
        )
  };
  export default Soon;