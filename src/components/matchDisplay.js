// MatchDisplay.js

import React from "react";

const MatchDisplay = ({ selectedSport }) => {
  const matches = [
    // Define your match details here for each sport
    {
      sport: "Football",
      teamA: "IIT Madras",
      teamB: "IIT Varanasi (BHU)",
      location: "Gymkhana",
      time: "04:00 PM",
    },
    {
      sport: "Football",
      teamA: "IIT KGP",
      teamB: "IIT GWT",
      location: "Gymkhana",
      time: "04:00 PM",
    },
    {
      sport: "Football",
      teamA: "IIT Delhi",
      teamB: "IIT Bombay",
      location: "Gymkhana",
      time: "04:00 PM",
    },
    {
      sport: "Tennis",
      teamA: "IIT Varanasi (BHU)",
      teamB: "IIT Bombay",
      location: "Rajputana Ground",
      time: "10:00 AM",
    },
    {
      sport: "Tennis",
      teamA: "IIT Varanasi (BHU)",
      teamB: "IIT Bombay",
      location: "Rajputana Ground",
      time: "10:00 AM",
    },
    {
      sport: "Tennis",
      teamA: "IIT Varanasi (BHU)",
      teamB: "IIT Bombay",
      location: "Rajputana Ground",
      time: "10:00 AM",
    },
    {
      sport: "Basketball",
      teamA: "IIT BHU",
      teamB: "IIT B",
      location: "Basketball Court",
      time: "12:00 PM",
    },
    {
      sport: "Basketball",
      teamA: "IIT M",
      teamB: "IIT KGP",
      location: "Basketball Court",
      time: "12:00 PM",
    },
    {
      sport: "Basketball",
      teamA: "IIT GWT",
      teamB: "IIT D",
      location: "Basketball Court",
      time: "12:00 PM",
    },
    {
      sport: "Badminton",
      teamA: "IIT BHU",
      teamB: "IIT GWT",
      location: "SAC",
      time: "12:00 PM",
    },
    {
      sport: "Badminton",
      teamA: "IIT B",
      teamB: "IIT M",
      location: "SAC",
      time: "12:00 PM",
    },
    {
      sport: "Badminton",
      teamA: "IIT KGP",
      teamB: "IIT D",
      location: "SAC",
      time: "12:00 PM",
    },
    {
      sport: "Cricket",
      teamA: "IIT B",
      teamB: "IIT M",
      location: "Gymkahna",
      time: "03:00 PM",
    },
    {
      sport: "Cricket",
      teamA: "IIT BHU",
      teamB: "IIT D",
      location: "Gymkahna",
      time: "03:00 PM",
    },
    {
      sport: "Cricket",
      teamA: "IIT GWT",
      teamB: "IIT KGP",
      location: "Gymkahna",
      time: "03:00 PM",
    },
    {
      sport: "Table Tennis",
      teamA: "IIT GWT",
      teamB: "IIT KGP",
      location: "Gymkahna",
      time: "03:00 PM",
    },
    {
      sport: "Table Tennis",
      teamA: "IIT GWT",
      teamB: "IIT KGP",
      location: "Gymkahna",
      time: "03:00 PM",
    },
    {
      sport: "Table Tennis",
      teamA: "IIT GWT",
      teamB: "IIT KGP",
      location: "Gymkahna",
      time: "03:00 PM",
    },
    {
      sport: "Hurdle Race",
      teamA: "IIT GWT",
      teamB: "IIT KGP",
      location: "Gymkahna",
      time: "03:00 PM",
    },
    {
      sport: "Hurdle Race",
      teamA: "IIT GWT",
      teamB: "IIT KGP",
      location: "Gymkahna",
      time: "03:00 PM",
    },
    {
      sport: "Hurdle Race",
      teamA: "IIT GWT",
      teamB: "IIT KGP",
      location: "Gymkahna",
      time: "03:00 PM",
    },
  ];

  const filteredMatches = matches.filter(
    (match) => match.sport === selectedSport
  );

  return (
    <div className="match-display">
      <h2 className="header">{selectedSport}</h2>
      <table className="table">
        <thead>
          <tr>
            <th >#</th>
            <th >Match</th>
            <th>Venue</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          
            {filteredMatches.map((match, index) => (
              <tr key={index}>
              
                <td >{index + 1}</td>
                <td>{`${match.teamA} vs. ${match.teamB}`}</td>
                <td>{`Location: ${match.location}`}</td>
                <td>{`Time: ${match.time}`}</td>
              
              </tr>
            ))}
          
        </tbody>
      </table>
    </div>
  );
};

export default MatchDisplay;