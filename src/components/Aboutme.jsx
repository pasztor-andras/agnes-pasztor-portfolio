import React from "react";
import { motion } from "framer-motion";

export const Aboutme = () => {
  function changeColorMid() {
    let color = document.getElementById("colorWellMid").value;
    document.getElementById("mid-color").style.backgroundColor = color;
    document.getElementById("colorWellMid").value = color;
  }

  return (
    <div id="mid-color" className="mid-section about-container">
      <input type="color" name="main" id="colorWellMid" />
      <input type="button" value="Szín váltó" onClick={changeColorMid} />
      <motion.div
        className="about-text-container"
        style={{ cursor: "grab" }}
        drag
        dragConstraints={{
          top: -25,
          left: -25,
          right: 25,
          bottom: 25,
        }}
      >
        <div className="about-text-header">Bio</div>
        Born and raised in Hungary - living in Berlin since 2017. Passionate about science and animal welfare. I love playing my violin, I enjoy
        bouldering and I love books and podcasts that help me understand new things. I work as a software engineer and I do it with the same
        determination that I use to do all the above.
      </motion.div>
    </div>
  );
};
