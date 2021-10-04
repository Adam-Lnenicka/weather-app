import React from 'react'

const Weatherblock = ({humidity, temp_max, temp_min, description, deg, gust, speed, dt_txt, icon}) =>{
    return(
    <div className="weather-block">
        <div className="weather-block__main">
            <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="weather"/>
            <p><span className="weather-block__weekday">{new Date(dt_txt).toLocaleString('en-us', {  weekday: 'long' })}</span></p>
            <p><span className="weather-block__time">{dt_txt.slice(10, 16)}</span></p>
            <p> <span className="weather-block__description">{description}</span></p>
            <p> <span className="weather-block__temperature">{temp_max} - {temp_min} °C </span></p>
            <p>Humidity: {humidity} </p>
        </div>
        <div className="weather-block__wind-section">
            <p><strong>Wind information</strong></p>
            <p>Wind speed: {speed} meter/sec</p>
            <p>Wind direction: {deg} degrees</p>
            <p>Gust: {gust} meter/sec</p>
        </div>
    </div>

    )
}

export default Weatherblock