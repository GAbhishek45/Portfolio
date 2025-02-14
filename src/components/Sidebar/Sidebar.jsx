import React, { useState } from 'react';
import "./Sidebar.scss";
import Togglebutton from './Togglebutton/Togglebutton';
import Links from './Links/Links';
import { motion } from 'framer-motion';

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition:{
        type:"spring",
        stiffness:20,
      }
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness:400,
        damping:40,

      }
    }
  };

  return (
    <motion.div className='sidebar' animate={open ? "open" : "closed"} initial={false} variants={variants}>
      <motion.div className="bg" variants={variants}>
        <Links setOpen={setOpen}/>
      </motion.div>
      <Togglebutton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
