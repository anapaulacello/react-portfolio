import React from 'react'
import { motion } from 'framer-motion'

const svgVariants = {
  hidden: { x: "-100px" },
  show: {
    x: "10px",
    transition: {
      delay: 1,
      duration: 3,
      ease: "easeInOut",
    },
  },
};

const pathVariants = {
    hidden: {
      opacity:0,
      pathLength: 0,
    },
    show: {
      opacity:1,
      pathLength: 1,
      transition: {
        delay: 1,
        duration: 6,
        ease: "easeInOut",
      },
    },
  };
  
const Code = () => {

    return (
        <motion.svg    
        variants={svgVariants}
        initial="hidden"
        animate="show"
        xmlns="http://www.w3.org/2000/svg" version="1.1" data-icon="code" data-container-transform="translate(0 25)" width="512px" height="146px" viewBox="0 0 512 146">
            <motion.path
            variants={pathVariants}
            transform="translate(-1 -1)"
             d="M74.313 0l-28.094 78h8.469l28.094-78h-8.469zm-36.313 11.25l-2.188 1.406-34 22-1.813 1.156v4.25l1.688 1.219 34 24 2.313 1.594v-9.781l-26.844-18.969 26.844-17.375v-9.5zm52 0v9.5l26.844 17.375-26.844 18.969v9.781l2.313-1.594 34-24 1.688-1.219v-4.25l-1.813-1.156-34-22-2.188-1.406z" fill="#605095" />
        </motion.svg>
    )
}

export default Code
