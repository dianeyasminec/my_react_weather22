import React,{useState, useEffect} from 'react'
import { Button, Container } from 'react-bootstrap';

export default function Home() {


    const [isDark, setIsDark] = useState(false)
    const appClass = isDark ? "App dark" : "App light"
    const [weather, setWeather] = useState()
    

useEffect(()=>{
 
  const API_key = 'b13949e909670fa4142b477738e1435a';
  const city = 'Houston'

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`)
    .then(response => response.json())
    .then(data => setWeather(data))
    .catch(err => console.error(err));
},[])    
console.log(weather)

function handleOnClick(){
  setIsDark((isDark)=> !isDark)
}

  return (
    <div className={appClass}>
      <header >
   <h1 className="lead text-start text-warning display-6 my-3 ">
    Weather Application
    </h1>
    <Button className=" btn-warning "
            onClick={handleOnClick}>
      {isDark? 'Dark Mode' : 'Light Mode'}
      </Button>
    </header>
<Container > 
  <div className="content">
  <div className="info-container">
  <h1>Today</h1>
  <div className="details">
    <div className="clouds">
      <p className="celsius">
        {Math.ceil(weather.main.temp - 273.15)} °C
         </p>
      </div>
            <div className="more-info">
            <p>Humidity : {weather.main.humidity} %</p>
            <p>Max temp: {Math.ceil(weather.main.temp_max - 273.15)} °C</p>
            <p>Min temp: {Math.ceil(weather.main.temp_min - 273.15)} °C</p>
            </div>

  </div>
  </div>
  </div>
</Container> 
    
</div>
  )
}
