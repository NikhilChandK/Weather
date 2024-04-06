import React, { useState, useEffect } from "react";
import Styles from "./Cards.module.css";
import Loader from "./Loader";
import air from "./Icons/air.png";
import humidityicon from "./Icons/humidity.png";
import sunrise from "./Icons/sunrise.png";
import sunset from "./Icons/sunset.png";
import thermometer from "./Icons/thermometer.png";
import wind from "./Icons/wind.png";
import axios from "axios";

export default function Weather() {
  const [data, setData] = useState(null);
  const [city, setCity] = useState("");
  const [err, setErr] = useState(false);
  const kelvin = 273.15;

  function handleChange(e) {
    setCity(e.target.value);
  }
  function handleKeydown(e) {
    console.log(city);
    if (e.key === "Enter") {
      fetchData();
    }
  }

  function fetchData() {
    // let base=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6d055e39ee237af35ca066f35474e9df`
    setErr(false);
    console.log("join");
    let base = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4ebb9418ca605fa1931880e565ec065c`;

    //using fetch
    // fetch(base)
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((dat) => {
    //     if (dat.cod != "404") {
    //       setErr(false);
    //       setData(dat);
    //     } else {
    //       setErr(true);
    //     }
    //   });

    //using Axios

    axios
      .get(base)
      .then((response) => {
        setData(data);
      })
      .catch((error) => setErr(true));

    // axios({
    //   url: base,
    //   method: "GET",
    //   headers: {},
    //   data: {},
    // })
    //   .then((response) => {
    //     setData(data);
    //   })
    //   .catch((error) => setErr(true));
  }
  console.log(data);

  return (
    <div className="App">
      <nav className={Styles.navBar}>
        <div className={Styles.navcontainer}>
          <h2>Weather ForeCast</h2>
          <div className={Styles.inputfield}>
            <input
              type="text"
              onChange={handleChange}
              onKeyDown={handleKeydown}
            />
            <span onClick={fetchData}>🔍</span>
          </div>
        </div>
      </nav>
      <div className={Styles.container}>
        <div className={Styles.leftContainer}>
          {data && !err ? (
            <>
              <div className={Styles.temp}>
                {Math.floor(data.main.temp - kelvin) + "°C"}
              </div>
            </>
          ) : (
            <>
              <span>pleawgrgd</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
