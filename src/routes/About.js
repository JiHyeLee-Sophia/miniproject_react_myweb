import React from "react";
import "./About.css";

import AboutMain from "../components/AboutMain";
import AboutData1 from "../components/AboutData1";
import AboutData2 from "../components/AboutData2";

import cv_eng from "../img/jihyelee_CuriculumVitae.pdf";
import cv_kor from "../img/이지혜_이력서.pdf";

class About extends React.Component {
  state = {
    info: [
      { title: "Name", data: "Ji Hye Lee" },
      { title: "Date of Birth", data: "21/01/1991" },
      { title: "Nationality", data: "South Korea" },
      { title: "Address", data: "Gyeonggi-do, South Korea" },
      { title: "E-mail", data: "sophitalia121@gmail.com" },
      { title: "GitHub", data: "https://github.com/JiHyeLee-Sophia" }
    ],
    datas: ["Javascript", "HTML", "CSS", "Typescript"],
    subDatas: [ "React JS"],
    achievement: [
      {
        language: "Vanilla Js",
        link:
          "https://jihyelee-sophia.github.io/miniproject_vanillajs_todolist/",
        name: "Todo List Web Version"
      },
      {
        language: "Vanilla Js",
        link:
          "https://jihyelee-sophia.github.io/miniproject_vanillajs_babyjump/",
        name: "Baby Jump Web Game"
      },
      {
        language: "React Js",
        link: "https://jihyelee-sophia.github.io/findmusicdotcom/",
        name: "Music Site"
      }
    ],
    myCV: [
      { name: "MyCV_Eng", file: cv_eng },
      { name: "MyCV_Kor", file: cv_kor }
    ]
  };
  render() {
    const { info, datas, subDatas, achievement, myCV } = this.state;
    return (
      <div className="about">
        <AboutMain ></AboutMain>
        <div className="about_data_1">
        <div className="about_data_1_1">
          {info.map((each,index) => (
            <AboutData1 key={index} title={each.title} data={each.data} />
          ))}
          </div>
          <div className="about_data_1_bg"></div>
        </div>
        <AboutData2
          datas={datas}
          subDatas={subDatas}
          achievement={achievement}
          myCV={myCV}
        ></AboutData2>
      </div>
    );
  }
}

export default About;
