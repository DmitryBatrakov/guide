import React, { useState, useEffect } from 'react';
import { FaMapLocationDot } from "react-icons/fa6";
import { FaHouseChimney } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { FaMusic } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {

    const linkHouse = 'https://www.google.com/maps/dir//Roubens,+Larnaca+6028,+%D0%9A%D0%B8%D0%BF%D1%80/@34.8929383,33.6364701,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x14e082c313a714e9:0x9eef45321033016e?entry=mfs&utm_campaign=ml-le-16203703&coh=230964&g_ep=EgoyMDI1MDMyNS4xIKXMDSoASAFQAw%3D%3D'
    const linkMusic = 'https://www.google.com/maps?ll=34.66291,33.026027&z=16&t=m&hl=ru-RU&gl=US&mapclient=embed&q=34%C2%B039%2746.5%22N+33%C2%B001%2733.7%22E+34.662910,+33.026028@34.6629098,33.0260275';
    const [selected, setSelected] = useState(false);

    console.log("Selected:", selected);

    useEffect(() => {
        if (selected) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [selected]);


    return (
        <footer className="h-auto flex flex-col justify-around items-center text-white bg-blue-600 ">
            <div className="flex justify-around w-full pt-5 pl-4 pr-4">
                <div className="text-white flex flex-col items-center justify-center">
                    <button
                        type="button"
                        className="flex flex-col gap-2 text-lg items-center justify-center"
                        onClick={() => setSelected(true)}
                    >
                        <FaHouseChimney size={40} />
                        <span>Дом</span>
                    </button>
                </div>
                <div className="flex flex-col  items-center  justify-center">
                    <Link
                        to={linkMusic}
                        className="flex flex-col text-lg gap-2 items-center justify-center"
                    >
                        <FaMusic size={40} />
                        <span>Концерт</span>
                    </Link>
                </div>
            </div>
            <div className="w-full text-left p-4 h-auto flex flex-col gap-3">
                <div className="border-t-[1px] border-white w-full"></div>
                <span className="">Разработано Dima & Co. Guide CYtrip © 2025</span>
            </div>
            {selected && (
                <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
                    <div className="fixed flex-col gap-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black rounded-xl p-6 w-11/12 h-48 max-w-sm text-center shadow-xl z-50 flex justify-around ">
                        <div className='flex gap-5 justify-around items-center'>
                            <div className="flex flex-col items-center justify-center">
                                <Link
                                    to={linkHouse}
                                >
                                    <FaMapLocationDot size={40} color="green" />
                                </Link>
                                <span className="text-center text-stone-600 text-xl font-semibold">
                                    Точка
                                </span>
                            </div>
                            <div className="text-left flex flex-col justify-center items-left">
                                <p className="text-xl">
                                    <b>Код :</b> #2601
                                </p>
                                <p className="text-xl">
                                    <b>Квартира :</b> №204
                                </p>
                                <p className="text-xl">
                                    <b>Сейф :</b> 6302
                                </p>
                            </div>
                        </div>
                        <div className='absolute top-2 right-2'>
                            <button
                                type="button"
                                className=" px-1 py-1 bg-red-600 rounded-2xl text-white"
                                onClick={() => setSelected(false)}
                            >
                                <IoMdClose size={20}/>
                            </button>
                        </div>
                    </div>
                </div>
            )
            }
        </footer >
    )
}

export default Footer;