import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Styles from "./Cards.module.css";
import clear from "./Icons/clear.png";
import cloudy from "./Icons/clouds.png";
import partly from "./Icons/partly-cloudy.png";
import rain from "./Icons/rain.png";
import wind from "./Icons/wind.png";
export default function ForeCast({ city }) {
  // const params=useParams()
  // const city=params.city

  const [foredata, setForedata] = useState(null);
  const [icon, setIcon] = useState();

  function fetchData() {
    let base = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&include=days&key=ZZXH59MCR8EP5CQ3HR3M4YKPB&contentType=json`;
    fetch(base)
      .then((response) => {
        return response.json();
      })
      .then((dat) => {
        setForedata(dat);
      });
  }
  useEffect(() => {
    fetchData();
  }, [city]);

  return (
    <>
      {foredata ? (
        <div className={Styles.maincontainer}>
          <section className={Styles[`scroll-reveal`]}>
            <h2 className={Styles[`section-title`]}>
              <span>Check Your Weather</span>
            </h2>
            <p>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Exercitationem, optio consectetur. Ipsum sed eligendi
                exercitationem, nihil corporis, culpa nam quos quae eveniet quod
                deserunt. Porro facilis voluptatum tempore repellendus, error
                odio ipsa hic magnam illo incidunt architecto ratione alias modi
                nam placeat debitis fugit. Voluptates voluptas inventore,
                impedit esse debitis ut saepe eum reiciendis eligendi labore
                aperiam laudantium ex, voluptatum modi incidunt a sequi
                voluptatibus recusandae error. Amet non voluptatem vero, error
                aliquam rerum inventore obcaecati porro necessitatibus
                reprehenderit facilis cumque unde exercitationem minus dolorem
                quas hic? Magni fuga vero blanditiis laboriosam possimus impedit
                quisquam repellendus ea deserunt consequatur quidem, eius quas
                tempora consequuntur inventore quis qui, incidunt minus nemo
                iusto sed! Aut numquam corrupti, placeat explicabo delectus,
                aspernatur itaque quis voluptatem fuga obcaecati autem a enim
                quos cupiditate nam praesentium rerum repudiandae ipsam esse?
                Ducimus dignissimos, eligendi et consequuntur facere molestiae
                incidunt quasi vel sunt nostrum nisi veniam veritatis tempore ut
                iusto quisquam beatae! Assumenda, molestias eligendi! Ducimus,
                natus incidunt dolore quas fuga quisquam ipsa, beatae eum iste,
                exercitationem voluptatibus officiis esse modi rem! Hic, nam aut
                laboriosam quis atque adipisci ullam quasi sed explicabo iste
                illo cum cumque! Deleniti dolor obcaecati numquam cumque,
                corrupti blanditiis dolorem architecto. Magni?
              </span>
            </p>
          </section>
          {foredata.days.map((e) => (
            <div className={Styles.forecastContainer} key={e.datetime}>
              <div className={Styles.forecastCard}>
                <p>{e.datetime}</p>
                {e.icon === "clear-day" ? (
                  <img src={clear} />
                ) : (
                  <img src={cloudy} />
                )}
                <p className={Styles.conditions}>{e.conditions}</p>
                <div>
                  {Math.floor(e.tempmin) + "°C"}
                  <span>Low</span>
                </div>
                <div>
                  {Math.floor(e.tempmax) + "°C"}
                  <span>High</span>
                </div>
                <div>
                  {e.humidity}
                  <span>Humidity</span>
                </div>
                <div>
                  {e.windspeed + "kmph"}
                  <span>Windspeed</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading..</p>
      )}
    </>
  );
}
