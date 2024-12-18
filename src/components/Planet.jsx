import React from 'react';

import PropTypes from 'prop-types';

const Planet = ({ name, distanceFromSun, diameter, moons }) => {
    return (
        <div className="planet">
            <h2>{name}</h2>
            <p>Distance from Sun: {distanceFromSun} million km</p>
            <p>Diameter: {diameter} km</p>
            <p>Number of Moons: {moons}</p>
        </div>
    );
};

Planet.propTypes = {
    name: PropTypes.string.isRequired,
    distanceFromSun: PropTypes.number.isRequired,
    diameter: PropTypes.number.isRequired,
    moons: PropTypes.number.isRequired,
};

export default Planet;