import './App.css';
import React, {useState, useEffect} from 'react'
// import Day from './components/Day'

function App() {

  const [weatherInfo, setWeatherInfo] = useState({})

  const showWeather = async (e) =>{

    const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=f795afb3d4db7993e671d6dc9352d53d"
    try{    const response = await fetch(url)
      const data = await response.json()
      console.log(data)
      if (response.status === 200) {
        setWeatherInfo(data)
      } else {
        throw new Error("Something went wrong!");
      }
    }
      catch(err){
        console.error(err)
      }
}

useEffect(() => {
  showWeather()
},[]);


  return (
    <div>
      {!(Object.keys(weatherInfo).length === 0 && weatherInfo.constructor === Object) ?
          <div>
            <div> {weatherInfo.base} </div>
            <div> {weatherInfo.wind.speed} </div>
            <div> {weatherInfo.main.temp} </div>
            <div> {weatherInfo.weather[0].description} </div>
          </div>
          : <></>
      }
    </div>

  );
}

export default App;
