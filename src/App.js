import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

import NavBar from "./Pages/Header";
import HomePage from "./Pages/HomePage.jsx";
import Bears from "./Pages/AllBears";
import BearDetails from "./Pages/BearDetails";
import NewBeer from "./Pages/NewBeer";
import RandomBeer from "./Pages/RandomBeer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/beers" element={<Bears />} />
          <Route path="/beers/:beerId" element={<BearDetails />}></Route>
          <Route path="/new-beer" element={<NewBeer />}></Route>
          <Route path="/random-beer" element={<RandomBeer />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
