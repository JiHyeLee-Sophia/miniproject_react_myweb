import React, { Component } from "react";
import "../Style.css";
import Contact from "../components/Contact";

class Home extends Component {
  state = {
    info: [
      { id : 1,
        name : "EMAIL",
        adress : "sophitalia121@gmail.com" },
      { id : 2,
        name : "GITHUB",
        adress : "https://github.com/JiHyeLee-Sophia" }
    ]
  };
  render() {
    return (
      <div>
        <div className="homeImage">
          <h3 className="dolomiti">Dolomiti, Italy</h3>
        </div>
        <Contact info={this.state.info}></Contact>
      </div>
    );
  }
}

export default Home;
