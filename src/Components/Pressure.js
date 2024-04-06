import React, { useState, useEffect } from "react";
import Styles from "./Cards.module.css";
import air from "./Icons/air.png";

export default function Pressure({ data }) {
  return (
    <div className={Styles.card}>
      Pressure
      <div>
        <span>{Math.floor(data.main.pressure / 1000) + "bar"}</span>
        <img src={air} />
      </div>
    </div>
  );
}
