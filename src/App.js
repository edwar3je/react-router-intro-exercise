import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import VendingMachine from './VendingMachine';
import Chips from './Chips';
import Soda from './Soda';
import CandyBar from './CandyBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VendingMachine />}/>
          <Route path="/chips" element={<Chips />}/>
          <Route path="/soda" element={<Soda />}/>
          <Route path="/candybar" element={<CandyBar />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
