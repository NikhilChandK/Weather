import React, { useState, useEffect } from "react";
import Styles from "./Cards.module.css";
import wind from "./Icons/wind.png";

export default function Wind({ data }) {
  return (
    <div className={Styles.card}>
      Windspeed
      <div>
        <span>{data.wind.speed + " m/s"}</span>
        <img src={wind} />
      </div>
    </div>
  );
}
