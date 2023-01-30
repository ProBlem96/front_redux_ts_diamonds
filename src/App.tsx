import React from 'react';
import './App.css';
import Daimond from './models/Daimond';
import ConDaimonds from './features/csv_daimond/GetDaimonds';
import { CalcDaimonds } from './features/csv_daimond/CalcDaimonds';
import AddDaimonds from './features/csv_daimond/AddDaimonds';

function App() {
  return (
    <div className="App">
      <header>
        
<CalcDaimonds></CalcDaimonds>
<ConDaimonds></ConDaimonds>
<AddDaimonds></AddDaimonds>
      </header>
    </div>
  );
}

export default App;