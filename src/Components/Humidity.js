import React, { useState, useEffect } from "react";
import Styles from "./Cards.module.css";
import humidityicon from "./Icons/humidity.png";

export default function Humidity({ data }) {
  return (
    <div className={Styles.card}>
      Humidity
      <div>
        <span>{data.main.humidity}</span>
        <img src={humidityicon} />
      </div>
    </div>
  );
}
