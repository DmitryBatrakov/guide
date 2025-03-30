import React from 'react';
import { FaMapLocationDot } from "react-icons/fa6";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaMusic } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {

    const linkHouse = 'https://www.google.com/maps/place/Roubens,+Larnaca+6028,+%D0%9A%D0%B8%D0%BF%D1%80/@34.8929427,33.6338952,17z/data=!3m1!4b1!4m6!3m5!1s0x14e082c313a714e9:0x9eef45321033016e!8m2!3d34.8929383!4d33.6364701!16s%2Fg%2F1tcz05bg?entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoASAFQAw%3D%3D'
    const linkMusic = 'https://www.google.com/maps?ll=34.66291,33.026027&z=16&t=m&hl=ru-RU&gl=US&mapclient=embed&q=34%C2%B039%2746.5%22N+33%C2%B001%2733.7%22E+34.662910,+33.026028@34.6629098,33.0260275';

    return (
        <footer className="h-auto flex flex-col justify-around items-center text-white bg-blue-600 ">
            <div className="flex justify-around w-full p-4">
                <div className="text-white flex flex-col items-center justify-center">
                    <Link
                        to={linkHouse}
                        className="flex flex-col gap-2 text-xl items-center justify-center"
                    >
                        <FaMapLocationDot size={44} />
                        <span>Дом</span>
                    </Link>
                </div>
                <div className="flex flex-col text-xl items-center  justify-center">
                    <Link
                        to={linkMusic}
                        className="flex flex-col text-xl gap-2 items-center justify-center"
                    >
                        <FaMusic size={40} />
                        <span>Концерт</span>
                    </Link>
                </div>
            </div>
            {/* <div className="border-t-[1px] border-white w-full"></div> */}
            <div className="w-full text-left p-4 h-auto flex flex-col gap-3">
                {/* <div className="">
                    <span>Жалобы, предложение и благодарсности принимаются на почту: </span>
                    <span><b>dmitrybatrakov24@outlook.com</b></span>
                </div> */}
                <span className="text-center"><b>dmitrybatrakov24@outlook.com</b></span>
                <div className="border-t-[1px] border-white w-full"></div>
                <span className="">Разработано Dima & Co. Guide CYtrip © 2025</span>
                
            </div>
        </footer>
    )
}

export default Footer;