import React from "react";
import "./Questions.css";
import image from "./image.png";
const Question4 = () => {
  return (
    <div className="question">
      <p className="question-text">kāds ir piemērs ar skaidrojumu?</p>
      <p className="question-text">computer - main klase</p>
      <p className="question-text">mainboard, cpu, memory - atributi</p>
      <img src={image} alt="diagramma" />
    </div>
  );
};

export default Question4;
