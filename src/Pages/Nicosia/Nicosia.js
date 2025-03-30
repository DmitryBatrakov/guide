import React from 'react';
import DayPage from '../../component/DayPage/DayPage';
import { nicosiaData } from '../../data/nicosiaData';
import tripIcon from '../../assets/img/trapdivisor.svg';

const Nicosia = () => {
    return (
        <DayPage
            title={nicosiaData.title}
            description={nicosiaData.description}
            images={nicosiaData.images}
            restaurants={nicosiaData.restaurants}
            cafes={nicosiaData.cafes}
            places={nicosiaData.places}
            tripIcon={tripIcon}
        />
    )
}

export default Nicosia;