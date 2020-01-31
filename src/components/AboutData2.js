import React, { Component } from "react";
import cv from "../img/jihyelee_CuriculumVitae.pdf";

class About_Data2 extends Component {
  render() {
    return (
      <div className="about_data_2">
        <div className="about_data_2_bg"></div>
        <div className="about_data_2_1">
          <div className="hover">
            <i
              id="programming"
              className="fa fa-code fa-2x dataIcon"
              aria-hidden="true"
            ></i>
            <span className="name">SKILL</span>
            <div className="datas">
              <h2>Javascript</h2>
              <h2>Html</h2>
              <h2>CSS</h2>
              <br></br>
              <span className="project">Also, Im studying..</span>
              <h2>React JS</h2>
              <h2>TypeScript</h2>
            </div>
          </div>
          <br></br>
          <br></br>
          <div className="about_data_2_text">
            <h1>
              I have been studying Frontend development since December 2019.
              Please check out my works.
            </h1>
          </div>

          <br></br>
          <br></br>
          <div className="hover">
            <i
              id="achievement"
              className="fa fa-trophy fa-2x dataIcon"
              aria-hidden="true"
            ></i>
            <span className="name">ACHIEVEMENT</span>
            <ul className="datas">
              <span className="project">Vanilla JS</span>
              <li>
                <a
                  href="https://jihyelee-sophia.github.io/miniproject_vanillajs_todolist/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Todo List Web Version{" "}
                  <span className="ctc">(click to check ✔)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://jihyelee-sophia.github.io/miniproject_vanillajs_babyjump/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Baby Jump Web Game{" "}
                  <span className="ctc">(click to check ✔)</span>
                </a>
              </li>
              <br></br>
              <span className="project">React JS</span>
              <li>
                <a
                  href="https://jihyelee-sophia.github.io/miniproject_react_myweb/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  My Own Web Site{" "}
                  <span className="ctc">(click to check ✔)</span>
                </a>
              </li>
            </ul>
          </div>
          <a
            className="myCV"
            href={cv}
            target="_blank"
            download="CV_JiHyeLee"
            rel="noopener noreferrer"
          >
            CHECK MY CV
          </a>
        </div>
      </div>
    );
  }
}

export default About_Data2;
