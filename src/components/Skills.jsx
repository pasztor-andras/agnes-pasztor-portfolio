import React from "react";
import { animated } from "react-spring";

export const Skills = () => {
  
  const iconNames = ["dataeng", "python", "sql", "js", "cypress", "selenium", "java", "bash", "linux"];
  const rowOne = iconNames.slice(0, 4).map(icon => {
    return (
      <div className="skills-background" key={icon} >
        <img className="icons" key={icon} alt={icon} src={require(`../icons/${icon}.png`)}></img>
      </div>
    );
  });
  const rowTwo = iconNames.slice(4, 9).map(icon => {
    return (
      <animated.div className="skills-background" key={icon}>
        <img className="icons" key={icon} alt={icon} src={require(`../icons/${icon}.png`)}></img>
      </animated.div>
    );
  });


  return (
    <div className="mid-section">
      <div className="skills-container">{rowOne}</div>
      <div className="skills-container">{rowTwo}</div>
    </div>
  );
};
