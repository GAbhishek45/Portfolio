import React from 'react'
import "./Navbar.scss"
import {motion} from 'framer-motion'
import Sidebar from './../Sidebar/Sidebar';
const Navbar = () => {
  return (
    <div className="navbar">
        {/* Sidebar */}
        <Sidebar/>
        <div className="wrapper">
            <motion.span
            initial={{opacity:0,scale:0.5}}
            animate={{opacity:1,scale:1}}
            transition={{duration:0.5}}
            >Gohel Abhishek</motion.span>
            <motion.div 
            
             className="social">
                <a href="#"><img src="./facebook.png " alt="" /></a>
                <a href="#"><img src="./instagram.png " alt="" /></a>
                <a href="#"><img src="./youtube.png " alt="" /></a>
                <a href="#"><img src="./dribbble.png " alt="" /></a>
            </motion.div>
        </div>
    </div>
  )
}

export default Navbar