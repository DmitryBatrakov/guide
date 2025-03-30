import React from "react";
import tripIcon from '../../assets/img/trapdivisor.svg';
import { larnacaData } from '../../data/larnacaData';
import DayPage from '../../component/DayPage/DayPage';



const Larnaca = () => {
    return (
        <DayPage
            title={larnacaData.title}
            description={larnacaData.description}
            images={larnacaData.images}
            restaurants={larnacaData.restaurants}
            cafes={larnacaData.cafes}
            places={larnacaData.places}
            tripIcon={tripIcon}
        />
    )
}
export default Larnaca;