import React, { useState } from "react";
import Slider from "react-slick";
import CardFooter from "../CardFooter/CardFooter";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { FaArrowLeftLong } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DayPage = ({
    title,
    description,
    images,
    restaurants = [],
    cafes = [],
    places = [],
    tripIcon
}) => {
    const [showRestaurants, setShowRestaurants] = useState(false);
    const [showCafes, setShowCafes] = useState(false);
    const [showPlaces, setShowPlaces] = useState(false);

    const navigate = useNavigate();

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    console.log(restaurants);
    console.log(restaurants.links);
    
    

    return (
        <div className="p-2 flex flex-col  bg-[#fffaf3]">
            <div className="">
                <Link
                    to="/"
                    className="text-xl m-2 pl-2 flex flex-row justify-start items-center gap-3 text-gray-700">
                    <FaArrowLeftLong />
                    <span className="text-lg text-center text-gray-700"> На главную</span>
                </Link>
            </div>
            <div className="p-2 ">
                {/* Слайдер */}
                <Slider {...sliderSettings}>
                    {images.map((src, index) => (
                        <div key={index}>
                            <img
                                src={src}
                                alt={`slide-${index}`}
                                className="w-full h-96 object-cover rounded-xl"
                            />
                        </div>
                    ))}
                </Slider>
                <div className=" pt-8 pb-4">
                    <p className="text-lg p-2">
                        <b>{title} </b>
                        <span>{description}</span>
                    </p>
                </div>
                <div className="p-2 pt-4 pb-4">

                    {/* Рестораны */}
                    <div className="mb-6 border-b-2 border-gray-400">
                        <button
                            onClick={() => setShowRestaurants(!showRestaurants)}
                            className="text-xl text-left w-full text-gray-600 font-medium mb-2  flex justify-between m-2 pr-2 "
                        >
                            Рестораны
                            {showRestaurants ? <HiChevronUp size={24} /> : <HiChevronDown size={24} />}
                        </button>

                        {showRestaurants &&
                            restaurants.map((r, i) => (
                                <div key={i} className="bg-white rounded-xl shadow-md p-4 mb-4">
                                    <img src={r.image} alt="#" className="rounded-xl w-full h-96 object-cover" />
                                    <p className="text-gray-700 font-medium pt-2 pb-2 text-2xl text-center">{r.name}</p>
                                    <CardFooter links={r.links} tripIcon={tripIcon} />
                                </div>
                            ))}
                    </div>

                    {/* Кофейни */}
                    <div className="mb-6 border-b-2 border-gray-400">
                        <button
                            onClick={() => setShowCafes(!showCafes)}
                            className="text-xl text-left w-full text-gray-600 font-medium mb-2 flex justify-between m-2 pr-2 "
                        >
                            Кафе
                            {showCafes ? <HiChevronUp size={24} /> : <HiChevronDown size={24} />}
                        </button>

                        {showCafes &&
                            cafes.map((c, i) => (
                                <div key={i} className="bg-white rounded-xl shadow-md p-4 mb-4">
                                    <img src={c.image} alt="#" className="rounded-xl w-full h-96 object-cover" />
                                    <p className="text-gray-700 font-medium pt-2 pb-2 text-2xl text-center">{c.name}</p>
                                    <CardFooter links={c.links} tripIcon={tripIcon} />
                                </div>
                            ))}
                    </div>

                    {/* Места */}
                    {places.length > 0 && (
                        <div className="mb-6 border-b-2 border-gray-400">
                            <button
                                onClick={() => setShowPlaces(!showPlaces)}
                                className="text-xl text-left w-full text-gray-600 font-medium mb-2 flex justify-between m-2 pr-2 "
                            >
                                Места для прогулок
                                {showPlaces ? <HiChevronUp size={24} /> : <HiChevronDown size={24} />}
                            </button>

                            {showPlaces &&
                                places.map((p, i) => (
                                    <div key={i} className="bg-white rounded-xl shadow-md p-4 mb-4">
                                        <img src={p.image} alt="#" className="rounded-xl w-full h-96 object-cover" />
                                        <p className="text-gray-700 font-medium pt-2 pb-2 text-2xl text-center">{p.name}</p>
                                        <CardFooter links={p.links} tripIcon={tripIcon} />
                                    </div>
                                ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DayPage;
