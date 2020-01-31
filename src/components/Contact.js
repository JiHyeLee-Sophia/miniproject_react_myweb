import React, { Component } from "react";
import PropTypes from "prop-types";
const style = {
  color: "rgba(112, 128, 145, 0.788)",
  height: "140px",
  backgroundColor: "rgba(206, 195, 191, 0.432)",
  padding: "50px",
  lineHeight: "1.5rem"
};
const titleStyle = {
  fontWeight: "bold",
  fontSize: "1.2rem"
};
const listStyle = {
  margin: "8px 15px"
};
const nameStyle = {
  fontWeight: "bold"
};
const gitStyle = {
    textDecoration : "none",
    color: "rgba(112, 128, 145, 0.788)",
    fontSize:"1rem",
    cursur : "pointer"
}
export default class Contact extends Component {
  render() {
    return (
      <div className="contact" style={style}>
        <h1 style={titleStyle}>CONTACT</h1>
        {this.props.info.map(info => (
          <h1 key={info.id} style={listStyle}>
            <span style={nameStyle}>{info.name}</span>
            <br></br>
            {info.name === "GITHUB" ? (
              <a href={info.adress} style = {gitStyle} target="_blank" rel="noopener noreferrer">
                {info.adress}
              </a>
            ) : (
              info.adress
            )}
          </h1>
        ))}
      </div>
    );
  }
}
