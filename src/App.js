// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className='app'>
//     <div className="sidebar">
//         <a href="#" class="icon football"></a>
//         <a href="#" class="icon basketball"></a>
//         <a href="#" class="icon tennis"></a>
//     </div>
//     <div className="content">
//         <div className='header'>
//           <img src='./img/spardha-img.jpg'/>
//         </div>
//     </div>
//     </div>
//   );
// }

// export default App;
// App.js

import React, { useState } from "react";
import "./App.css"; // Add your styles if needed
import Sidebar from "./components/sidebar";
import MatchDisplay from "./components/matchDisplay";

const App = () => {
  const [selectedSport, setSelectedSport] = useState("Football"); // Default selected sport

  return (
    <div className="app">
      <Sidebar selectedSport={selectedSport} onSportSelect={setSelectedSport} />
      <div className="display">        
        <h1 className="header">Spardha</h1>
        <MatchDisplay selectedSport={selectedSport} />
      </div>
    </div>
  );
};

export default App;
