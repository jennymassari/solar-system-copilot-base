import React, { useState } from 'react';
import { planets } from '../data/planets';
import Planet from './Planet';

const PlanetsList = () => {
  const [planetList, setPlanetList] = useState([]);

  const addRandomPlanet = () => {
    const randomPlanet = planets[Math.floor(Math.random() * planets.length)];
    setPlanetList([...planetList, randomPlanet]);
  };

  return (
    <div className="planets-list">
      <button onClick={addRandomPlanet}>Add Random Planet</button>
      {planetList.map((planet, index) => (
        <Planet
          key={index}
          name={planet.name}
          distanceFromSun={planet.distanceFromSun}
          diameter={planet.diameter}
          moons={planet.moons}
        />
      ))}
    </div>
  );
};

export default PlanetsList;

