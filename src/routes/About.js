import React from "react";
import "./About.css";
import AboutMain from "../components/AboutMain";
import AboutData1 from "../components/AboutData1";
import AboutData2 from "../components/AboutData2";

class About extends React.Component {
  state = {
    main: {
      opacity: true
    },
    data: {
      opacity: false
    },
    icon: {
      true: "fa fa-angle-double-right fa-2x select",
      false: "fa fa-angle-double-left fa-2x select"
    }
  };
  toggle =()=> {
    this.setState({
      main: {
        opacity: !this.state.main.opacity
      },
      data: {
        opacity: !this.state.data.opacity
      },
      icon: {
        true: "fa fa-angle-double-right fa-2x select",
        false: "fa fa-angle-double-left fa-2x select"
      }
    });
  };
  render() {
    return (
      <div className="about">
        {this.state.main.opacity ? (
          <div className="about_div">
            <i className={this.state.icon.true} onClick={this.toggle}></i>
            <AboutMain></AboutMain>
          </div>
        ) : (
          <div className="about_div">
            <i className={this.state.icon.false} onClick={this.toggle}></i>
            <div className="about_data">
              <AboutData1></AboutData1>
              <AboutData2></AboutData2>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default About;
