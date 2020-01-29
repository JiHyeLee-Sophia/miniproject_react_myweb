import React from "react";
import { Spring } from "react-spring/renderprops";

function About_Data1() {
  return (
    <Spring
    from={{ opacity: 0}}
    to={{ opacity: 1}}
    config={{duration:700}}
    >
      {props => (
        <div style={props}>
          <div className="about_data1">
            <span className="about_data_if">Name</span>
            <h5 className="about_data_if">Ji Hye Lee</h5>
            <span className="about_data_if">Date of Birth</span>
            <h5 className="about_data_if">21/01/1991</h5>
            <span className="about_data_if">Nationality</span>
            <h5 className="about_data_if">Korean</h5>
            <span className="about_data_if">Address</span>
            <h5 className="about_data_if">Gyeonggi-do, South Korea</h5>
            <span className="about_data_if">E-mail</span>
            <h5 className="about_data_if">sophitalia121@gmail.com</h5>
            <span className="about_data_if">GitHub</span>
            <a
              className="about_data_if"
              href="https://github.com/JiHyeLee-Sophia"
            >
              https://github.com/JiHyeLee-Sophia
            </a>
          </div>
        </div>
      )}
    </Spring>
  );
}

export default About_Data1;
