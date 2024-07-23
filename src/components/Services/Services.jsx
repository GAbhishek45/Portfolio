import React from "react";
import "./services.scss";
import { motion } from "framer-motion";



const variants = {
  initial:{
    x:-500,
    y:200,
    opacity:0,
  },
  animate:{
    x:0,
    opacity:1,
    y:0,
    transition:{
      duration:1,
      staggerChildren:0.1,
    }
  },
}

const Services = () => {
  return (
    <motion.div className="services" variants={variants} initial="initial" whileInView="animate">
      <motion.div className="textContainer" variants={variants}>
        <motion.p>
          I Focus on Helping Your Brand Grow
          <br />
          With Technical Expertise
        </motion.p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1><motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas</h1>
        </div>
        <div className="title">
          {/* <img src="/people.webp" alt="" /> */}
          <h1><motion.b whileHover={{color:"orange"}}>For Your</motion.b>Business</h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <div className="box">
          <h2>Frontend Devlopment</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi ipsa delectus consectetur sequi nobis eaque dolorem quibusdam assumenda possimus deserunt?</p>
          <button>Go</button>
        </div>
        <div className="box">
          <h2>Frontend Devlopment</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi ipsa delectus consectetur sequi nobis eaque dolorem quibusdam assumenda possimus deserunt?</p>
          <button>Go</button>
        </div>
        <div className="box">
          <h2>Frontend Devlopment</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi ipsa delectus consectetur sequi nobis eaque dolorem quibusdam assumenda possimus deserunt?</p>
          <button>Go</button>
        </div>
        <div className="box">
          <h2>Frontend Devlopment</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi ipsa delectus consectetur sequi nobis eaque dolorem quibusdam assumenda possimus deserunt?</p>
          <button>Go</button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
