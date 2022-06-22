import React from "react";
import '../styles/Card.css'
import {Link} from "react-router-dom"

export default function Card({temp,sky,name,country,humidity,wind,img,id,onClose}){

function checkColor(temp){
    if(temp <= 13) return "Cold"
    if(temp >13 && temp <= 29) return "Warm"
    if(temp > 29) return "Hot"
}

return(
    <div className ={checkColor(temp) === "Cold" ? "Cold": checkColor(temp) === "Warm" ? "Warm" : "Hot"}> {/* Se renderizan los datos de cada Card */}
            <button className='btn' onClick={onClose}>X</button> {/* se crea un botón para eliminar la card desde App */}
            <div className="cardTitle">
            <div className="titleInfo">
            <h2>{temp}°C</h2>
            <span>{sky.replace(/\b\w/g, l => l.toUpperCase())}</span> {/* Hace mayúscula la primera letra de cada palabra */}
            </div>
            <div className="weatherImg">
            <img className='icon' src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="weatherIcon"/>
            </div>
            </div>
            <Link className='cardCity' to={`/ciudad/${id}`}> {/* Enviá la id para abrir una nueva pagina con los detalles de la ciudad */}
            <h2>{name},{country}</h2>
            </Link>
            <div className="firstInfo">
            <div>
             <h4>Humidity:</h4>
             <span>{humidity}%</span>
             </div>
             <div>
             <h4>Wind:</h4>  
             <span>{wind} Km/h</span> 
             </div>
             </div>
            </div>
     
)
}

