import React from "react";
import { Spring } from "react-spring/renderprops";

function About_Data2() {
  return (
    <Spring
      from={{ opacity: 0}}
      to={{ opacity: 1}}
      config={{ duration: 700 }}
    >
      {props => (
        <div style={props}>
          <div className="about_data2">
            <div className="hover">
              <i
                id="programming"
                className="fa fa-code fa-2x dataIcon"
                aria-hidden="true"
              ></i><span className="name">SKILL</span>
              <p className="datas">Javascript Html CSS React.js Java</p>
            </div>
            <div className="hover">
              <i
                id="education"
                className="fa fa-graduation-cap fa-2x dataIcon"
                aria-hidden="true"
              ></i><span className="name">EDUCATION</span>
              <p className="datas">
                Hansei Universicy, South Korea<br></br>
               <span className='major'>Major : Social Welfare</span> <br></br>
                <span className="minor">Minor : Computer Engineering</span>
              </p>
            </div>
            <div className="hover">
              <i
                id="achievement"
                className="fa fa-trophy fa-2x dataIcon"
                aria-hidden="true"
              ></i><span className="name">ACHIEVEMENT</span>
              <ul className="datas">
                <span className="project">Vanilla JS</span>
                <li>
                  <a href="https://jihyelee-sophia.github.io/miniproject_vanillajs_todolist/">
                    Todo List Web Version{" "}
                    <span className="ctc">(click to check ✔)</span>
                  </a>
                </li>
                <li>
                  <a href="https://jihyelee-sophia.github.io/miniproject_vanillajs_babyjump/">
                    Baby Jump Web Game{" "}
                    <span className="ctc">(click to check ✔)</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="hover">
              <i
                id="experience"
                className="fa fa-modx dataIcon fa-2x"
                aria-hidden="true"
              ></i><span className="name">EXPERIENCE</span>
              <ul className="datas">
                <li>
                  <span className="job">- Waitress</span>
                  <br></br>
                  <span className="where">Bar Puppa</span>
                  <br></br>
                  <span className="location"><span role='img' aria-label="country">🚩</span>Venice, Italy</span>
                  <br></br>
                  <span className="date">01.2019 - 08.2019(8months)</span>
                </li>
                <li className="job2">
                  <span className="job job2">
                    - English Conversation Teacher
                  </span>
                  <br></br>
                  <span className="where">Seoil English Academy</span>
                  <br></br>
                  <span className="location"><span role='img' aria-label="country">🚩</span>Gyeonggi-do, South Korea</span>
                  <br></br>
                  <span className="date">10.2016 - 09.2018(2year)</span>
                </li>
              </ul>
            </div>
            <div className="hover">
              <i
                id="language"
                className="fa fa-language fa-2x dataIcon"
                aria-hidden="true"
              ></i><span className="name">LANGUAGE</span>
              <ul className="datas">
                <li>English <span role='img' aria-label="good">🌝🌝🌝🌚</span></li>
                <li>Italian <span role='img' aria-label="good">🌝🌝🌚🌚</span></li>
                <li>Japanese <span role='img' aria-label="good">🌝🌚🌚🌚</span></li>
              </ul>
            </div>
            <div className="hover">
              <i
                id="passion"
                className="fa fa-wpexplorer dataIcon fa-2x"
                aria-hidden="true"
              ></i><span className="name">PASSION</span>
              <ul className="datas">
                <li>Traveling</li>
                <li>Hiking</li>
                <li>Taking Photos</li>
                <li>Translating Tvshows</li>
                <li>Sewing Machine</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </Spring>
  );
}

export default About_Data2;
