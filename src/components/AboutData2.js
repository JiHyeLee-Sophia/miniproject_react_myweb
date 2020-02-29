import React from "react";
import PropTypes from 'prop-types';

function About_Data2 ({datas, subDatas,achievement,myCV}) {
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
              {datas.map((each,index) => (
                <h2 key={index}>{each}</h2>
              ))}
              <br></br>
              <span className="project">Also, Im studying..</span>
              {subDatas.map((each,index) => (
                <h2 key={index}>{each}</h2>
              ))}
            </div>
          </div>
          <div className="about_data_2_text">
            <h1>
              Please check out my works.
            </h1>
          </div>
          <div className="hover">
            <i
              id="achievement"
              className="fa fa-trophy fa-2x dataIcon"
              aria-hidden="true"
            ></i>
            <span className="name">ACHIEVEMENT</span>
            <ul className="datas">
              {achievement.map((each,index) => (
                <li key={index}>
                  <span className="project">{each.language}</span>
                  <br></br>
                  <a href={each.link} target="_blank" rel="noopener noreferrer">
                    {each.name}
                    <span className="ctc">(click to check ✔)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="myCV_Div">
          {myCV.map((each, index) => (
            <a key={index}
              className="myCV"
              href={each.file}
              target="_blank"
              download="JiHyeLee_CV"
              rel="noopener noreferrer"
            >
              {each.name}
            </a>
          ))}
          </div>
        </div>
      </div>
    );
}
About_Data2.propTypes={
  datas:PropTypes.array.isRequired,
  subDatas:PropTypes.array.isRequired,
  achievement:PropTypes.array.isRequired,
  myCV:PropTypes.array.isRequired
}
export default About_Data2;
