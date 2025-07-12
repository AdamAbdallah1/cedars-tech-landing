import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiNetflix } from "react-icons/si";
import { motion } from "motion/react"


const Contact = () => {
  return (
    <section className="flex flex-col items-center text-center gap-6 py-50">
        <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        >
          <SiNetflix className='text-red-600' size={80}/>
        </motion.div>
        <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="lg:text-6xl text-3xl  font-bold">Contact us</motion.h1>
        <motion.p 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="lg:text-3xl text-gray-400 max-w-xl">
            Ready to start? Chat with us now!
        </motion.p>
        <div>
            <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
            className='flex lg:flex-row flex-col gap-8'>
                <button className='bg-[#9754DE] text-neutral-900 font-bold lg:p-6 p-4 lg:text-2xl rounded-2xl hover:bg-red-300 cursor-pointer'>
                  <a className='flex justify-center items-center gap-2' href="">
                    Contact Us on <FaWhatsapp size={30}/>
                  </a>
                </button>

                <button className='bg-[#9754DE] text-neutral-900 font-bold lg:p-6 p-4 lg:text-2xl rounded-2xl hover:bg-red-300cursor-pointer'>
                  <a className='flex justify-center items-center gap-2' href="">
                    Contact Us on <FaInstagram size={30}/>
                  </a>
                </button>
            </motion.div>
        </div>
    </section>
  )
}

export default Contact