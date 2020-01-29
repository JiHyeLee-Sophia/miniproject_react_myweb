import React from "react";
import { Link } from "react-router-dom";


function Navigation() {
  return (
    <div className="navigation">
      <Link className="link" to="/">HOME</Link>
      <Link className="link" to="/about">ABOUT ME</Link>
    </div>
  );
}

export default Navigation;
