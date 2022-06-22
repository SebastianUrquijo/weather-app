import React from "react";
import '../styles/Cards.css'
import Card from './Card.jsx'
import CityLogo from "./CityLogo"

export default function Cards ({cities,onClose}){ //importa el array y la función para ser usadas
    return(
        <>
            {cities && cities.length === 0 ? 
            <div className="logoCity">
            <CityLogo/>
            <h2>Wow, such empty!</h2>
            <h4>Try search for a city!</h4>
            </div>
            :
    <div className='cards'>
                {cities.map(c=> <Card  //mapea el array pasando todos los parametros necesarios al componente
                temp={c.temp}
                sky={c.sky}
                name={c.name}
                country={c.country}
                humidity={c.humidity}
                wind={c.wind}
                id={c.id}
                key={c.id}
                img={c.img}
                onClose={()=>onClose(c.id)}  
                />)}
    </div>   
            }

</>
    )
}