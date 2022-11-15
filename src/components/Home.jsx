import React from 'react'

export default function Home() {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c91384c642mshaa6c8ff4bb3387cp1b6b4fjsnd6fee11c99cc',
            'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
        }
    };
    
    fetch('https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=38.5&lat=-78.5', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));


  return (
    <div>

   <h1 className="lead text-center text-primary display-5 my-3">
    Weather Application
    </h1>

    </div>
  )
}
