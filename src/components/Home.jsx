import React,{useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container';

export default function Home() {

    const [weather, setWeather] = useState([])

    

    useEffect( ()=>{
    const apiKey =  '1dc17c4f6cb7425a7f108ce2e2652ee4'
    const city = 'Paris'  
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
     .then(response =>{
      if(!response.ok){
        throw Error('Could not fetch')
      }
      console.log(response)
      return response.json()
     })
     .then(data =>{
      setWeather(data)
     })
},[])

   console.log(weather)

       

  return (
    <div>
   <h1 className="lead text-center text-primary display-5 my-3">
    Weather Application
    </h1>
<Container> 

</Container>
    </div>
  )
}
