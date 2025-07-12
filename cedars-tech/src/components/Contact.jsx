import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="flex flex-col items-center text-center gap-6 py-20">
        <h1 className="text-4xl font-bold">Contact us</h1>
        <p className="text-gray-400 max-w-xl">
            Ready to start? Chat with us now!
        </p>
        <div>
            <div className='flex lg:flex-row flex-col gap-8'>
                <button className='bg-[#9754DE] text-neutral-900 font-bold p-4 rounded-2xl hover:bg-[#F5A2D1] cursor-pointer'><a className='flex justify-center items-center gap-2' href="">Contact Us on <FaWhatsapp size={30}/></a></button>
                <button className='bg-[#9754DE] text-neutral-900 font-bold p-4 rounded-2xl hover:bg-[#F5A2D1] cursor-pointer'><a className='flex justify-center items-center gap-2' href="">Contact Us on <FaInstagram size={30}/></a></button>
            </div>
        </div>
    </section>
  )
}

export default Contact