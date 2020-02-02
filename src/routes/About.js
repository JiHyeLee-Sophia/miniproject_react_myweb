import React from "react";
import "./About.css";
import AboutMain from "../components/AboutMain";
import AboutData1 from "../components/AboutData1";
import AboutData2 from "../components/AboutData2";


function About() {
    return (
      <div className="about">
          <AboutMain></AboutMain>
          <AboutData1></AboutData1>
          <AboutData2></AboutData2>
      </div>
    );

}
export default About;
