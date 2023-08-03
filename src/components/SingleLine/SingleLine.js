import * as React from "react";
import "./SingleLine.css";

const SingleLine = (props) => {
  const { lineText, srNo, lineStyle } = { ...props };
  return (
    <>
      <span className="lineContainer" style={lineStyle}>
      {lineText}  <span className="LineNmberContainer">{srNo}</span>
      </span>
    </>
  );
};

export default SingleLine;
