import React, { useState } from 'react';
import { PiSmileyWinkBold } from "react-icons/pi";


const Header = () => {


    return (
        <header className="h-20 flex justify-around items-center text-white bg-blue-600 p-4">
            <div>
                <h1 className="text-2xl font-semibold text-center">
                    Dima & Co. Guide CYtrip
                </h1>
                <p className="text-[13px]">От создателей "Мы в Лондоне"</p>
            </div>

            <div className="text-4xl">
                <PiSmileyWinkBold />
            </div>
            
        </header>
    )
}

export default Header;