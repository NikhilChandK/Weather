import React, { useState, useEffect } from "react";
import Styles from "./Cards.module.css";
import thermometer from "./Icons/thermometer.png";
export default function FeelsLike({ data }) {
  return (
    <div className={Styles.card}>
      Feels like
      <div>
        <span>{Math.floor(data.main.feels_like - 273.15) + "°C"}</span>
        <img src={thermometer} />
      </div>
    </div>
  );
}
