import React from "react";
import PropTypes from 'prop-types';

const style={
  display:"grid",
  gridTemplateColumns:"1.1fr 2.5fr"
}
const spanStyle={
  paddingBottom:"8px"
}
function About_Data1({ title, data }) {
  return (
    <div style={style}>
      <span style={spanStyle}>{title}</span>
      {title === "GitHub" ? (
        <a
          className="about_data_if"
          href={data}
          target="_blank"
          rel="noopener noreferrer"
        >
          {data}
        </a>
      ) : (
        <h5 className="about_data_if">{data}</h5>
      )}
    </div>
  );
}

About_Data1.propTypes={
  title: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired
}

export default About_Data1;
