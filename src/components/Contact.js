import React from "react";
import PropTypes from "prop-types";

const listStyle = {
  margin: "10px 40px"
};
const nameStyle = {
  fontWeight: "bold"
};
const gitStyle = {
  textDecoration: "none",
  color: "rgba(112, 128, 145, 0.788)",
  fontSize: "1rem",
  cursur: "pointer"
};

Contact.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired
};

export default function Contact({ name, address }) {
  return (
    <div className="contact">
      <h1 style={listStyle}>
        <span style={nameStyle}>{name}</span>
        <br></br>
        {name === "GITHUB" ? (
          <a
            href={address}
            style={gitStyle}
            target="_blank"
            rel="noopener noreferrer"
          >
            {address}
          </a>
        ) : (
          address
        )}
      </h1>
    </div>
  );
}
