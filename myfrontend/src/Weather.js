import React, { useState, useEffect } from "react";
import axios from "axios";


function Weather(){
    const [weather, setWeather] = useState("Not yet gotten!");

    useEffect(()=>{
        fetch("/weather/").then(res => {
             if(res.ok){
                 return res.json();
             }
        }).then(response => setWeather(response.weatherData))
    });
        
    
    return(
        <div>
             <button onClick = {useEffect}>Get Weather in London</button>
            <h1>The weather in London is: {weather}</h1>
        </div>
    )
}

export default  Weather;