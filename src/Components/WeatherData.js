import React, { useState, useEffect, useRef } from "react";
import Styles from "./Cards.module.css";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";
import Details from "./Details";
import ForeCast from "./ForeCast";
import down from "./Icons/down-arrow.png";

export default function WeatherData() {
  const [data, setData] = useState(null);

  const [load, setLoad] = useState(false);
  const [err, setErr] = useState(false);

  const [city, setCity] = useState("");

  const navigate = useNavigate();

  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  //  useEffect(()=>{
  //     // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
  //     let base=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6d055e39ee237af35ca066f35474e9df`
  //     fetch(base).then((response) => {
  //       return response.json();
  //     }).then((data) => {
  //         console.log(data);
  //         setTemperature(Math.floor(data.main.temp - kelvin) + "°C")
  //         setFeelslike(Math.floor(data.main.feels_like - kelvin) + "°C")
  //         setSummary(data.weather[0].description)
  //         setPressure(Math.floor(data.main.pressure/1000) + 'bar')
  //         setWindSpeed(data.wind.speed +'m/s')
  //         setSunrise(new Date(data.sys.sunrise * 1000).toLocaleString('default', 'UTC' ))
  //         setSunset(new Date(data.sys.sunset * 1000).toLocaleString('default', 'UTC' ))
  //         setLoc(data.name + "," + data.sys.country)
  //         setIcon(`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`)
  //         console.log(icon)
  //         setLon(data.coord.lon);
  //         setLat(data.coord.lat)
  //     })},[city])

  function handleChange(e) {
    setCity(e.target.value);
  }
  function handleKeydown(e) {
    // console.log(city)
    if (e.key === "Enter") {
      fetchData();
    }
  }
  function fetchData() {
    let base = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4ebb9418ca605fa1931880e565ec065c`;
    setLoad(true);
    fetch(base)
      .then((response) => {
        return response.json();
      })
      .then((dat) => {
        if (dat.cod != "404") {
          setLoad(false);
          setErr(false);
          setData(dat);
        } else {
          setErr(true);
        }
      });
  }

  // console.log(data)

  return (
    <div className="App">
      <nav className={Styles.navBar}>
        <div className={Styles.navcontainer}>
          <h2>Weather ForeCast</h2>
          <div className={Styles.inputfield}>
            {/* dir='rtl' */}
            <input
              type="text"
              onChange={handleChange}
              onKeyDown={handleKeydown}
            />
            <span onClick={fetchData}>🔍</span>
          </div>
        </div>
      </nav>
      {data && !err ? (
        <>
          {load ? (
            <Loader />
          ) : (
            <>
              <Details data={data} />
              <div className={Styles.arrow}>
                <img
                  onClick={handleClick}
                  src={down}
                  className={Styles.arrow}
                />
              </div>
              <div ref={ref}>
                <ForeCast city={city} />
              </div>
              {/* <submit onClick={()=>navigate(`forecast/${city}`)}>Forecast</submit> */}
            </>
          )}
        </>
      ) : (
        <span className={Styles.loader}>Enter City Name</span>
      )}
    </div>
  );
}
