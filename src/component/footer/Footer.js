import React from 'react';
import { FaMapLocationDot } from "react-icons/fa6";
import { FaArrowCircleRight } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="h-32 flex justify-around items-center text-white bg-blue-600 p-2">
           <div className="flex text-xl justify-between gap-2 items-center">
                <span className='mb-1'>Наш адрес </span>
                <FaArrowCircleRight size={20}/>
           </div>
           <div className="text-white flex flex-col items-center justify-center">
                <FaMapLocationDot size={44}/>
                <span>Нажми</span>
           </div>
        </footer>
    )
}

export default Footer;