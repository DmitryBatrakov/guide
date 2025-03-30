import React from 'react';
import { FaMapLocationDot } from "react-icons/fa6";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {

    const linkHouse = 'https://www.google.com/maps/place/Roubens,+Larnaca+6028,+%D0%9A%D0%B8%D0%BF%D1%80/@34.8929427,33.6338952,17z/data=!3m1!4b1!4m6!3m5!1s0x14e082c313a714e9:0x9eef45321033016e!8m2!3d34.8929383!4d33.6364701!16s%2Fg%2F1tcz05bg?entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoASAFQAw%3D%3D'

    return (
        <footer className="h-32 flex justify-around items-center text-white bg-blue-600 p-2">
            <div className="flex text-xl justify-between gap-2 items-center">
                <span className='mb-1'>Наш адрес </span>
                <FaArrowCircleRight size={20} />
            </div>
            <div className="text-white flex flex-col items-center justify-center">
                <Link to={linkHouse}>
                    <FaMapLocationDot size={44} />
                    <span>Нажми</span>
                </Link>
            </div>
        </footer>
    )
}

export default Footer;