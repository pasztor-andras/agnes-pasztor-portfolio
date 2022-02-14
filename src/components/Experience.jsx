import React from "react";
import { motion } from "framer-motion";

export const Experience = () => {
  

  return (
    <div className="exp-container">
      <span>Experience timeline</span>
      <div className="exp-timeline">
        <motion.div className="exp-card left" initial={{ y: -200, opacity: 0 }}  whileInView= {{ y: 0, opacity: 1 }} transition= {{ duration: 1}} viewport={{once: true}}>
          <motion.div className="content">
            <h2>2017</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur fugiat unde, odit nesciunt expedita amet reprehenderit facere ipsam
              impedit ea voluptas, incidunt aspernatur, aliquid voluptatum sunt! Harum nemo deserunt quidem.
            </p>
          </motion.div>
        </motion.div>
        <motion.div className="exp-card right" initial={{ y: -200, opacity: 0 }}  whileInView= {{ y: 0, opacity: 1 }} transition= {{ duration: 1}} viewport={{once: true}}>
          <div className="content">
            <h2>2016</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur fugiat unde, odit nesciunt expedita amet reprehenderit facere ipsam
              impedit ea voluptas, incidunt aspernatur, aliquid voluptatum sunt! Harum nemo deserunt quidem.
            </p>
          </div>
        </motion.div>
        <motion.div className="exp-card left" initial={{ y: -200, opacity: 0 }}  whileInView= {{ y: 0, opacity: 1 }} transition= {{ duration: 1}} viewport={{once: true}}>
          <div className="content">
            <h2>2017</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur fugiat unde, odit nesciunt expedita amet reprehenderit facere ipsam
              impedit ea voluptas, incidunt aspernatur, aliquid voluptatum sunt! Harum nemo deserunt quidem.
            </p>
          </div>
        </motion.div>
        <motion.div className="exp-card right" initial={{ y: -200, opacity: 0 }}  whileInView= {{ y: 0, opacity: 1 }} transition= {{ duration: 1}} viewport={{once: true}}>
          <div className="content">
            <h2>2016</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur fugiat unde, odit nesciunt expedita amet reprehenderit facere ipsam
              impedit ea voluptas, incidunt aspernatur, aliquid voluptatum sunt! Harum nemo deserunt quidem.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
