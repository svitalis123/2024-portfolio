import React from 'react';
import { motion } from 'framer-motion';

const Meteor = () => {
  return (
    <motion.div
      className="fixed top-0 left-0 w-1 h-1 bg-blue-500 rounded-full shadow-lg z-20"
      animate={{
        x: ["0vw", "100vw"],
        y: ["0vh", "100vh"],
      }}
      transition={{
        duration: 10,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      }}
    />
  );
};

export default Meteor;