import React, { useState, useEffect } from "react";
import Styles from "./Cards.module.css";

export default function Sunset({ data }) {
  return (
    <div className={Styles.card}>
      Sunset (UTC)
      <div>
        <span>
          {new Date(data.sys.sunset * 1000).toLocaleString("default", "UTC")}
        </span>
      </div>
    </div>
  );
}
