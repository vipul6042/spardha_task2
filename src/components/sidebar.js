// Sidebar.js

import React from 'react';

const Sidebar = ({ selectedSport, onSportSelect }) => {
  const sports = ['Football', 'Basketball', 'Tennis','Badminton','Cricket','Table Tennis','Hurdle Race']; // Add more sports as needed

  return (
    <div className="sidebar">
      <p><b>Sports</b></p>
      {sports.map((sport) => (
        <div
          key={sport}
          className={`icon ${sport}${selectedSport === sport ? ' active' : ''}`}
          onClick={() => onSportSelect(sport)}
        ></div>
      ))}
    </div>
  );
};

export default Sidebar;
