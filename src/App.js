import "./App.css";
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/NavBar";
import WeatherData from "./Components/WeatherData";
import Weather from "./Components/Weather";
import ForeCast from "./Components/ForeCast";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<WeatherData />} />
        {/* <Route path='/' element={<Weather/>}/> */}
        <Route path="forecast/:city" element={<ForeCast />} />
      </Routes>
    </>
  );
}

export default App;
