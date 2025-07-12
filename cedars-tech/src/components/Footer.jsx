import React from 'react'
import { CiInstagram } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white text-center p-4 pt-20">
      © {new Date().getFullYear()} Cedars Tech. All rights reserved.
      <div className='flex justify-evenly pt-5'>
        <CiInstagram size={30} />
        <FaWhatsapp size={30}/>
        <FaFacebook size={30}/>
        <FaTiktok size={30}/>
      </div>
    </footer>
  )
}

export default Footer