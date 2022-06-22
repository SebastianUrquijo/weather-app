import React from "react";
import { useParams } from "react-router-dom";
import '../styles/City.css'

export default function City ({onFilter}){
    const{ciudadId}=useParams()  // se extrae el parámetro dentro del enlace
    const city=onFilter(ciudadId) // filtra la ciudad requerida desde el array principal

    function checkColor(temp){
        if(temp <= 13) return "Cold"
        if(temp >13 && temp <= 29) return "Warm"
        if(temp > 29) return "Hot"
    }

    return(
        <div className="cityBox">
            <div className ={checkColor(city.temp) === "Cold" ? "Cold": checkColor(city.temp) === "Warm" ? "Warm" : "Hot"}>
            <h1>{city.name},{city.country}</h1>
            <div className="infoBoxAlpha">
                <div className="sectorA">
                <div className="alphaInfo">
                <p><b>Wheater:</b> {city.sky.replace(/\b\w/g, l => l.toUpperCase())}</p>
                <p><b>Humidity:</b> {city.humidity}%</p>
                <p><b>Temperature:</b> {city.temp}°C</p>
                </div>
                 <img className='icon2' src={"http://openweathermap.org/img/wn/"+city.img+"@2x.png"}  alt="weatherIcon"/>
                 </div>
                <div className="deltaInfo"> 
                <div className="blockA">
                <p><b>Min Temperature:</b> {city.min}°C</p>
                <p><b>Max Temperature:</b> {city.max}°C</p>
                </div>
                <div className="blockB">
                <p><b>Wind:</b> {city.wind}Km/h</p>
                <p><b>Clouds:</b> {city.clouds}%</p>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}