import React from "react";
import { motion } from "framer-motion";

export const Skills = () => {
  const iconNames = ["dataeng", "python", "sql", "js", "cypress", "selenium", "java", "bash", "linux"];

  return (
    <div id="skills-color" className="mid-section">
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
              <img className="icons" key={index} alt={icon} src={require(`../icons/${icon}.png`)}></img>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
