import React from "react";
import profile from "../img/profile.png";
import { Spring } from "react-spring/renderprops";

function About_Main() {
  return (
    <Spring
      from={{ opacity: 0, marginLeft: 500 }}
      to={{ opacity: 1, marginLeft: 0 }}
      config={{duration:700}}
    >
      {props => (
        <div style={props}>
          <div className="about_main">
            <img className="about_main_img" src={profile} alt="profile"></img>
            <p className="about_main_p">
              <i className="fa fa-quote-left" aria-hidden="true"></i>
              <span className="tab">&#9;&#9;&#9;&#9;&#9;</span>
              October 2018,
              <br />I tried something new that<br></br>I secretly always wanted to do.
              <br />I wanted to start from scratch <br></br>in an unfamiliar place.
              <br />
              Knowing nothing, knowing no one <br />
              brought me thrilled because<br></br>I wanted to see and learn new World.
              <br />
              <br></br>
              Fortunately,
              <br />
              it went out of one of my successful experiences.
              <br />
              For this time,
              <br />I like to keep moving forward<br></br>as a frontend developer.
              <span className="tab">&#9;&#9;&#9;&#9;&#9;</span>
              <i className="fa fa-quote-right" aria-hidden="true"></i>
            </p>
          </div>
        </div>
      )}
    </Spring>
  );
}

export default About_Main;
