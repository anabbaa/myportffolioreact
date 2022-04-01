import React from "react";
import { Link } from "react-router-dom";
const Soon = () => {
    return( 
        <React.Fragment>
            <div className="soon-father">
        <h1 className="soon">Bad Request</h1>
    <Link className="back-soon" to="/home" style={{ textDecoration: "none" }}>
        Back
        </Link>
        </div>
        </React.Fragment>
        )
  };
  export default Soon;