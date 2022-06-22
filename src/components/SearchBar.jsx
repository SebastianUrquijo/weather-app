import React, { useState } from "react";
import '../styles/SearchBar.css'

export default function SearchBar({onSearch}) {
  const[city,setCity] = useState(""); //Hook para extraer el estado y manipularlo 
  const[country,setCountry] = useState("");

  function onSubmit(e){/* activa el listener para evitar el autorefresh, enviar la acción de la api 
  y vaciar la barra de busqueda */
    e.preventDefault();
    onSearch(city,country);  //al hacer submit ordena la ejecucíon de la función usando el value del input como parametro
    setCity("");
    setCountry("")
  }

  return (
    <div className="searchZone">
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="City..."
        value = {city}
        onChange={e => setCity(e.target.value)}  //transfiere el valor de value hacia el estado
      />
      <input
      type="text"
      placeholder="Country..."
      value={country}
      onChange={e=>setCountry(e.target.value)}
      />
      <input id="searchBtn" type="submit" value="Search" />
    </form>
    </div>
  );
}