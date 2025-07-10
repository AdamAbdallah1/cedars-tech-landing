import React from 'react'
import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className='w-full p-10 flex justify-between text-3xl items-center'>
        <h1 className=''>Cedars Tech</h1>
        <div className='flex gap-5 text-4xl'>
            <CiInstagram />
            <CiFacebook />
            <FaWhatsapp />
        </div>
    </nav>
  )
}

export default Navbar