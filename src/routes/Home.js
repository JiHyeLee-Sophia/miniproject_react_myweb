import React, { Component } from "react";
import "../Style.css";
import Contact from "../components/Contact";

const style = {
  color: "rgba(112, 128, 145, 0.788)",
  backgroundColor: "rgba(206, 195, 191, 0.432)",
  lineHeight: "1.5rem",
  height:"200px"
};
const titleStyle = {
  fontWeight: "bold",
  fontSize: "1.2rem",
  padding:"5px 20px",
  paddingTop:"20px"
};
class Home extends Component {
  state = {
    infos: [
      { id: 1, name: "EMAIL", address: "sophitalia121@gmail.com" },
      { id: 2, name: "GITHUB", address: "https://github.com/JiHyeLee-Sophia" }
    ]
  };
  render() {
    return (
      <div>
        <div className="homeImage">
          <h3 className="dolomiti">Dolomiti, Italy</h3>
        </div>
        <div style = {style}>
          <h1 style={titleStyle}>CONTACT</h1>
          {this.state.infos.map(info => (
            <Contact
              key={info.id}
              id={info.id}
              name={info.name}
              address={info.address}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
