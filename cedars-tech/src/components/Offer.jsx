import React from "react";
import Anghami from "../assets/anghami-icon.svg";
import Shahid from "../assets/shahid-icon.svg";
import Osn from "../assets/osn-icon.svg";
import Netflix from "../assets/netflix-icon.svg";
import Item from "./Item";
import { TbBrandDisney } from "react-icons/tb";
import { motion } from "motion/react"


const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

const Offer = () => {
  return (
    <motion.section 
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: -100}}
    transition={{ duration: 1.5 }}
    className="flex flex-col items-center text-center gap-6 py-25">
      <h1
       className="text-4xl font-bold">What We Offer</h1>
      <p className="text-gray-400 max-w-xl">
        Get all your favorite channels, movies, and live sports — for less.
      </p>

      <div className="flex lg:flex-row flex-col">
        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate">
          <Item imgUrl={Netflix} imgWidth="50"/>
        </motion.div>

        <motion.div
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        >
          <Item imgUrl={Anghami} imgWidth="50"/>
        </motion.div>

        <motion.div
        variants={iconVariants(5)}
        initial="initial"
        animate="animate"
        >
          <Item imgUrl={Shahid} imgWidth="120"/>
        </motion.div>

        <motion.div
        variants={iconVariants(2)}
        initial="initial"
        animate="animate"
        >
          <Item imgUrl={Osn} imgWidth="70"/>
        </motion.div>
        
      </div>
      
    </motion.section>
  );
};

export default Offer;
