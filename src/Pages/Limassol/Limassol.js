import React from 'react';
import DayPage from '../../component/DayPage/DayPage';
import { limassolData } from '../../data/limassolData';
import tripIcon from '../../assets/img/trapdivisor.svg';

const Limassol = () => {
    return(
        <DayPage
        title={limassolData.title}
        description={limassolData.description}
        images={limassolData.images}
        restaurants={limassolData.restaurants}
        cafes={limassolData.cafes}
        places={limassolData.places}
        tripIcon={tripIcon}
    />
    )
}

export default Limassol;