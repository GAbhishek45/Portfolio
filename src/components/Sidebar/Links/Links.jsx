import React from 'react'
import { motion } from 'framer-motion';



const variants = {
  open:{
    staggerChildren:0.5,
  },
  closed:{
    staggerChildren:0.09,
    staggerDirection:-1,
  },
}
const itemvariants = {
  open:{
    y:0,
    opacity:1,
  },
  closed:{
   y:50,
   opacity:0,
  },
}
const Links = ({setOpen}) => {
  const items = [
    "Homepage",
    "Services",
    "Portfolio",
    "Contact",
    "About",
  ]
  return (
    <motion.div className="links" variants={variants}>
      {items.map((item,i)=>{
        return <motion.a  href={`#${item}`} key={i} variants={itemvariants} whileHover={{scale:1.1}} whileTap={{scale:0.95}}>{item}</motion.a>
      })}
    </motion.div>
  )
}

export default Links