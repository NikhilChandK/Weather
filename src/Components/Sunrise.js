import React, { useState, useEffect } from "react";
import Styles from "./Cards.module.css";

export default function Sunrise({ data }) {
  return (
    <div className={Styles.card}>
      Sunrise (UTC)
      <div>
        <span>
          {new Date(data.sys.sunrise * 1000).toLocaleString("default", "UTC")}
        </span>
      </div>
    </div>
  );
}
