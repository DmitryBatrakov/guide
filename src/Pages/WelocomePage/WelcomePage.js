// src/pages/Welcome.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const days = [
    {
        title: "День 1 — Ларнака",
        image: "/images/larnaca.jpg",
        route: "/day1",
        description: "Ну шо, ехала?",
        btnOne: "😐",
        btnTwo: "А когда не ехала? 🔥",
    },
    {
        title: "День 2 — Никосия",
        image: "/images/nicosia.png",
        route: "/day2",
        description: "Шо вы столица, ждете?",
        // btnOne: "Обратно в село 🏡",
        btnOne: "Ма кашур?",
        btnTwo: "Я люблю газ давать 🤩",
    },
    {
        title: "День 3 — Лимассол",
        image: "/images/limasol.jpg",
        route: "/day3",
        description: "Немного музыки?😏",
        btnOne: "Не, завтра в малину",
        btnTwo: "Точно",
    },
];

const WelcomePage = () => {

    const [selectedDay, setSelectedDay] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (selectedDay) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [selectedDay]);

    return (
        <div className="min-h-screen bg-stone-100 p-4">
            <div className="p-4 bg-[#fffaf3] rounded-2xl shadow-md">
                <div>
                    <h1 className="text-4xl font-bold mb-2 text-yellow-500">Ну штош, пришло время немного отдохнуть) 🔥</h1>

                    <p className="text-lg mb-2 mt-3 text-stone-600 font-medium">
                        Я сделал небольшой гайд —
                    </p>

                    <ul className="list-disc text-lg text-stone-600 mb-3 space-y-1 ml-7 font-medium">
                        <li className="italic"> Кофейни ☕</li>
                        <li className="italic"> Рестораны с вкусной едой 🍽️</li>
                        <li className="italic"> Места для прогулок 🌅</li>
                    </ul>

                    <p className="text-lg text-stone-600 font-medium">
                        Ниже — наш маршрут.
                    </p>
                </div>
            </div>

            <p className="text-left text-stone-600 text-2xl mb-6 ml-4 mt-6">Выбери день:</p>
            <div className="flex flex-col gap-4">
                {days.map((day, index) => (
                    <Link
                        key={index}
                        className="rounded-xl overflow-hidden shadow-md bg-white"
                        onClick={(e) => {
                            e.preventDefault();
                            setSelectedDay(day);
                        }
                        }
                    >
                        <img
                            src={day.image}
                            alt={day.title}
                            className="w-full h-72 object-cover"
                        />
                        <div className="p-4 text-center text-lg font-medium text-gray-800">
                            {day.title}
                        </div>
                    </Link>
                ))}
            </div>
            {selectedDay && (
                <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
                    <div className="bg-white rounded-xl p-6 w-11/12 max-w-sm text-center shadow-xl">
                        {/* <h2 className="text-xl font-semibold mb-2">{selectedDay.title}</h2> */}
                        <p className="text-stone-600 mb-4 text-xl font-semibold">{selectedDay.description}</p>
                        <div className="flex flex-col gap-2 mt-4">
                            <button
                                className="px-4 py-2 bg-green-500 text-white rounded-md"
                                // onClick={() => setSelectedDay(navigate(selectedDay.route))}
                                onClick={() => {
                                    window.scrollTo(0, 0); // Скролл вверх при нажатии на кнопку
                                    navigate(selectedDay.route);
                                }}
                            >
                                {selectedDay.btnTwo}
                            </button>
                            <button
                                className="px-4 py-2 bg-red-500 text-white rounded-md"
                                onClick={() => setSelectedDay(null)}
                            >
                                {selectedDay.btnOne}

                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WelcomePage;
