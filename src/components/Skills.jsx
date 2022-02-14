import React from "react";
import { motion } from "framer-motion";

export const Skills = () => {
  const iconNames = ["dataeng", "python", "sql", "js", "cypress", "selenium", "java", "bash", "linux"];

  function changeColorSkills() {
    let color = document.getElementById("colorWellSkills").value;
    document.getElementById("skills-color").style.backgroundColor = color;
    document.getElementById("colorWellSkills").value = color;
  }

  return (
    <div id="skills-color" className="mid-section">
      <input type="color" name="main" id="colorWellSkills" />
      <input type="button" value="Szín váltó" onClick={changeColorSkills} />
      <div className="skills-container">
        {iconNames.slice(0, 4).map((icon, index) => {
          return (
            <motion.div className="skills-background" key={index} initial={{ scale: 1 }} whileHover={{ scale: 1.2 }}>
              <img className="icons" key={index} alt={icon} src={require(`../icons/${icon}.png`)} animate={{}}></img>
            </motion.div>
          );
        })}
      </div>
      <div className="skills-container">
        {iconNames.slice(4, 9).map((icon, index) => {
          return (
            <motion.div className="skills-background" key={index} initial={{ scale: 1 }} whileHover={{ scale: 1.2 }}>
              <img
                className="icons"
                key={index}
                alt={icon}
                src={require(`../icons/${icon}.png`)}
              ></img>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
