import './App.css';
import React, {useState, useEffect} from 'react'
// import Day from './components/Day'

function App() {

  const [weatherInfo, setWeatherInfo] = useState({})
  const [location, setLocation] = useState('Prague')
  const [block, setBlock] = useState(4)

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

const handleBlock = () =>{
  setBlock(block => block + 4)
}


  return (
    <div>
    <div>
      {!(Object.keys(weatherInfo).length === 0 && weatherInfo.constructor === Object) ?
          <div>

            <div> {weatherInfo.city.name} </div> 
            {/* <div> {weatherInfo.list[0].wind.deg} </div> */}
            <div> {weatherInfo.list.slice(0, block).map((i, dt) =>{
              return(
              <div key={dt}>
                <div> {i.wind.deg} </div>
              </div>
              )
            })} 
            </div>
          </div>
          : <></>
      }
    </div>

    <button onClick={handleBlock}>Display Later Times</button>

    <input onChange={selectDeparture}></input>

    <div>
    <label className="label" htmlFor="location"><strong>Location </strong></label>
    <select className="form-control form-control-sm w-100" name="location" placeholder="select" onChange={selectDeparture}>
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
