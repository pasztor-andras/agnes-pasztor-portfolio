import React from "react";
import { motion } from "framer-motion";

export const Experience = () => {
  

  return (
    <div className="exp-container">
      <span className="section-title">Experience timeline</span>
      <div className="exp-timeline">
        <motion.div className="exp-card left" initial={{ y: -200, opacity: 0 }}  whileInView= {{ y: 0, opacity: 1 }} transition= {{ duration: 1}} viewport={{once: true}}>
          <motion.div className="content">
            <h2>Jun 2017 - Present</h2>
            <p>
            Senior Software Engineer in Test
            </p>
          </motion.div>
        </motion.div>
        <motion.div className="exp-card right" initial={{ y: -200, opacity: 0 }}  whileInView= {{ y: 0, opacity: 1 }} transition= {{ duration: 1}} viewport={{once: true}}>
          <div className="content">
            <h2>Nov 2013 - Aug 2016</h2>
            <p>
            Software Test Engineer/Customer Support Manager
            </p>
          </div>
        </motion.div>
        <motion.div className="exp-card left" initial={{ y: -200, opacity: 0 }}  whileInView= {{ y: 0, opacity: 1 }} transition= {{ duration: 1}} viewport={{once: true}}>
          <div className="content">
            <h2>Mar 2012 - Dec 2012</h2>
            <p>
            Software Test Engineer/Scrummaster
            </p>
          </div>
        </motion.div>
        <motion.div className="exp-card right" initial={{ y: -200, opacity: 0 }}  whileInView= {{ y: 0, opacity: 1 }} transition= {{ duration: 1}} viewport={{once: true}}>
          <div className="content">
            <h2>Sep 2008 - Aug 2010</h2>
            <p>
            Software tester/Technical writer
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
