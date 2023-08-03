import * as React from 'react';
import './Card.css';

const Card = (props) => {
  const {
    srNo,
    mainHading,
    mainHadingPara,
    secondryHeading,
    secondryHeadingPara,
    isActive,
    metaData,
  } = { ...props };
  // console.log(metaData);
  return (
    <div
      className={`cardContainer ${isActive == metaData.id ? 'isActive' : ''}`}
      onClick={() => metaData.clickHandler(metaData)}
    >
      <span className="numberContainer">{srNo}</span>
      <span className="headind">
        <h2>{mainHading}</h2>
        <p>{mainHadingPara}</p>
      </span>
      <span className="subHeading">
        <h3>{secondryHeading}</h3>
        <p>
          Verses:
          {secondryHeadingPara}
        </p>
      </span>
    </div>
  );
};

export default Card;
