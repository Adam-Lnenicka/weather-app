import React, {useState, useEffect} from 'react'
import WeatherBlock from '../components/WeatherBlock'

function Home() {

  const [weatherInfo, setWeatherInfo] = useState({})
  const [location, setLocation] = useState('London')
  const [block, setBlock] = useState(3)
  const [prevBlock, setPrevBlock] = useState(0)


  const showWeather = async () =>{

    const apiKey = 'f795afb3d4db7993e671d6dc9352d53d'
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${apiKey}`
 
    try{    
      const response = await fetch(url)
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
},[location]);

const selectDeparture = (e) => {
  setLocation(
    e.target.value
  )
} 

const handleBlock = () =>{
  setBlock(block => block + 2)
  setPrevBlock(prevBlock => prevBlock + 2)
}

const handlePrevBlock = () =>{

    if (block > 4) {
    setBlock(block => block -2)
    setPrevBlock(prevBlock => prevBlock -2)

    }
}

  return (
    <div>
        <div className="banner">
            <h1>Weather App</h1>
            <input type="text" aria-label="searchbar" placeholder="&#xF002;  Search Location" name="searchbar" onChange={selectDeparture} style={{fontFamily:'Arial, FontAwesome'}} />
        </div>
    <div>
    <div className="dropdown">
        <label className="label" htmlFor="location">Select from popular locations</label>
        <select name="location" value="location" onChange={selectDeparture}>
            <option value="London">London</option>
            <option value="Berlin">Berlin</option>
            <option value="Warsaw">Warsaw</option>
            <option value="London">London</option>
            <option value="Prague">Prague</option>
        </select>
    </div>

    
      {!(Object.keys(weatherInfo).length === 0 && weatherInfo.constructor === Object) ?
          <div>
            <h2> {weatherInfo.city.name} </h2> 
            <div className="weather-block-section"> {weatherInfo.list.slice(prevBlock, block).map((i, dt) =>{
              return(
                <WeatherBlock 
                  key={dt} 
                  icon={i.weather[0].icon}  
                  humidity={i.main.humidity}
                  temp_max={i.main.temp_max} 
                  temp_min={i.main.temp_min} 
                  description={i.weather[0].description}  
                  deg={i.wind.deg} 
                  gust={i.wind.gust} 
                  speed={i.wind.speed}
                  dt_txt={i.dt_txt}
                />
              )
            })} 
            </div>
          </div>
        : <></>
      }
    </div>
    <div className="button-section">
        <button onClick={handlePrevBlock}><i className="fas fa-chevron-left"></i>Previous</button>
        <button onClick={handleBlock}>Next<i className="fas fa-chevron-right"></i></button>
    </div>

    </div>

  );
}

export default Home;
