import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Styles from "./Cards.module.css";
import FeelsLike from "./FeelsLike";
import Pressure from "./Pressure";
import Wind from "./Wind";
import Humidity from "./Humidity";
import Sunrise from "./Sunrise";
import Sunset from "./Sunset";

import cloud_icon from "./img/cloud.png";
import clear_icon from "./img/clear.png";
import drizzle_icon from "./img/drizzle.png";
import rain_icon from "./Icons/rain.png";
import snow_icon from "./Icons/snow.png";

export default function Details({ data }) {
  const navigate = useNavigate();
  const [icon, setIcon] = useState();
  const [city, setCity] = useState("");
  useEffect(() => {
    if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
      setIcon(clear_icon);
    } else if (
      data.weather[0].icon === "02d" ||
      data.weather[0].icon === "02n"
    ) {
      setIcon(cloud_icon);
    } else if (
      data.weather[0].icon === "03d" ||
      data.weather[0].icon === "03n"
    ) {
      setIcon(drizzle_icon);
    } else if (
      data.weather[0].icon === "04d" ||
      data.weather[0].icon === "04n"
    ) {
      setIcon(drizzle_icon);
    } else if (
      data.weather[0].icon === "09d" ||
      data.weather[0].icon === "09n"
    ) {
      setIcon(rain_icon);
    } else if (
      data.weather[0].icon === "10d" ||
      data.weather[0].icon === "10n"
    ) {
      setIcon(rain_icon);
    } else if (
      data.weather[0].icon === "13d" ||
      data.weather[0].icon === "13n"
    ) {
      setIcon(snow_icon);
    } else {
      setIcon(clear_icon);
    }
    // console.log(icon)
  }, [icon]);

  return (
    <div className={Styles.container}>
      <div className={Styles.leftContainer}>
        {/* <div id='map'></div> */}

        <div className={Styles.icon}>
          <img src={icon} />
        </div>
        {/* <div className={Styles.icon}><img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}/></div> */}
        <div className={Styles.temp}>
          {Math.floor(data.main.temp - 273.15) + "°C"}
        </div>
        <div className={Styles.details}>
          <div className={Styles.summary}>{data.weather[0].description}</div>
          <div className={Styles.location}>
            {data.name + "," + data.sys.country}
          </div>
        </div>
      </div>

      <div className={Styles.rightContainer}>
        <div className={Styles.fullCard}>
          <FeelsLike data={data} />
          <Pressure data={data} />
          <Wind data={data} />
          <Humidity data={data} />
          <Sunrise data={data} />
          <Sunset data={data} />
        </div>
      </div>
      {/* <submit onClick={()=>navigate('foreCast')}>Forecast</submit> */}
    </div>
  );
}
