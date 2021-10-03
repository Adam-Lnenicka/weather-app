import React from 'react'

const Weatherblock = ({humidity, temp_max, temp_min, description, deg, gust, speed, dt_txt, icon}) =>{
    return(
    <div className="weather-block">
        <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="weather"/>
        <p><span className="weather-block__weekday">{new Date(dt_txt).toLocaleString('en-us', {  weekday: 'long' })}</span></p>
        <p><span className="weather-block__time">{dt_txt.slice(10, 16)}</span></p>
        <p> Humidity:{humidity} </p>
        <p> Maximum Temperature: {temp_max} </p>
        <p> Minimum Temperature: {temp_min} </p>
        <p> Weather descriptoin: {description} </p>
        <h4>Wind</h4>
        <p>Deg: {deg} </p>
        <p>Gust: {gust} </p>
        <p>Speed: {speed} </p>
    </div>

    )
}

export default Weatherblock