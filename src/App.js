import './App.css';
import React, {useState, useEffect} from 'react'
// import Day from './components/Day'

function App() {

  const [weatherInfo, setWeatherInfo] = useState({})
  const [location, setLocation] = useState('Prague')



  const showWeather = async (e) =>{

    const apiKey = 'f795afb3d4db7993e671d6dc9352d53d'

    // const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`

    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}`
    // const url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=f795afb3d4db7993e671d6dc9352d53d`

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


  return (
    <div>
    <div>
      {!(Object.keys(weatherInfo).length === 0 && weatherInfo.constructor === Object) ?
          <div>
            {/* <div> {weatherInfo.name} </div>
            <div> {weatherInfo.base} </div>
            <div> {weatherInfo.wind.speed} </div> */}
            <div> {weatherInfo.city.name} </div> 
            <div> {weatherInfo.list[0].wind.deg} </div>
            <div> {weatherInfo.map((i, dt) =>{
              <div key={dt}>
                <div> {i.list.wind.deg} </div>
              </div>
            })} 
            </div>
          </div>
          : <></>
      }
    </div>

    <input onChange={selectDeparture}></input>

    <div>
    <label className="label" htmlFor="location"><strong>Location </strong></label>
    <select className="form-control form-control-sm w-100" name="location" onChange={selectDeparture}>
      <option>Popular locations</option>
      <option value="Berlin">Berlin</option>
      <option value="Warsaw">Warsaw</option>
      <option value="London">London</option>
      <option value="Prague">Prague</option>
    </select>
    </div>
</div>

  );
}

export default App;
