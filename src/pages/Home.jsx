import React, {useState, useEffect} from 'react'
import WeatherBlock from '../components/WeatherBlock'

function Home() {

  const [weatherInfo, setWeatherInfo] = useState({})
  const [location, setLocation] = useState('Prague')
  const [block, setBlock] = useState(4)
  const [prevBlock, setPrevBlock] = useState(0)


  const showWeather = async () =>{

    const apiKey = 'f795afb3d4db7993e671d6dc9352d53d'
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}`
 
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
  setBlock(block => block + 3)
  setPrevBlock(prevBlock => prevBlock + 3)
}

const handlePrevBlock = () =>{

    if (block > 5) {
    setBlock(block => block -3)
    setPrevBlock(prevBlock => prevBlock -3)

    }
}

  return (
    <div>
    <div>
      {!(Object.keys(weatherInfo).length === 0 && weatherInfo.constructor === Object) ?
          <div>
            <div> {weatherInfo.city.name} </div> 
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

    <button onClick={handleBlock}>Display Later Times</button>
    <button onClick={handlePrevBlock}>Display Prev Times</button>


    <input onChange={selectDeparture}></input>

    <div>
        <label className="label" htmlFor="location"><strong>Location </strong></label>
        <select name="location"  onChange={selectDeparture}>
        <option value="" disabled selected>Select your location</option>
            <option value="Berlin">Berlin</option>
            <option value="Warsaw">Warsaw</option>
            <option value="London">London</option>
            <option value="Prague">Prague</option>
        </select>
        </div>
    </div>

  );
}

export default Home;
