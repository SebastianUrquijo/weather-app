import React, {useState} from 'react';
import './App.css';
import Nav from './components/Nav.jsx'
import Cards from './components/Cards.jsx'
import About from './components/About.jsx'
import City from './components/City.jsx'
import { Route,Routes} from 'react-router-dom';
import countries from './Countries.json'

const apiKey = process.env.REACT_APP_CREDENTIAL_DATA;

export default function App() {
const [cities,setCities] = useState([])   // se usa un hook para traer el estado y la función que lo manipula

function onClose(id){  //esta función permite eliminar el componente seleccionado
  setCities(arrayCities => arrayCities.filter(c => c.id !== id))
} 

function verify(country){
  var element = country.toLowerCase().replace(/\s+/g,'')
  var normalized = element.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  if(countries.hasOwnProperty(normalized))return countries[normalized]
}

function onSearch(ciudad,pais){ //función que busca la ciudad dentro de la API
if(cities.length <6){ // se establece un limite de ciudades dentro del array
  let country = verify(pais)
  if(ciudad && country){  
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${country}&units=metric&lang=en&appid=${apiKey}`)
    .then(data => data.json())  //convierte la data de la API a JSON
    .then((city) => { // por medio de una función se extraen los datos que se necesitan
      if(city.name !== undefined){ //evita procesar objetos vacíos
        const ciudad={
          name: city.name,
          country:city.sys.country,
          sky: city.weather[0].description,
          humidity:city.main.humidity,
          temp: Math.round(city.main.temp),
          min: Math.round(city.main.temp_min),
          max: Math.round(city.main.temp_max),
          wind: city.wind.speed,
          clouds: city.clouds.all,
          latitud: city.coord.lat,
          longitud: city.coord.lon,
          img: city.weather[0].icon,
          id: city.id
        };
        if(cities.length > 0){ //se controla que no se busque dos veces una misma ciudad
          let control = "no exist"; //variable para control de estado temporal
          for(let x=0;x<cities.length;x++){ // busca la existencia de la ciudad dentro del estado cities
            if(cities[x].id === city.id){control = "exist"}} // si existe la ciudad se cambia el estado temporal
            if(control === "no exist"){setCities(arrayCities=>[...arrayCities,ciudad])} // si no existe agrega la ciudad
              else{alert("Ya buscaste esta ciudad")} // si existe devuelve una alerta al usuario
        }
        else{setCities(arrayCities=>[...arrayCities,ciudad])}//agrega primera ciudad al estar el estado vació
      } else {
        alert('No se pudo encontrar la ciudad'); 
      }
    })}else{alert("No has suministrado los datos correctamente")};
  }else{alert('Solo puedes consultar seis ciudades a la vez')}

  }

function onFilter(ciudadId){ // función para buscar la ciudad seleccionada 
  let ciudad= cities.filter(c=>c.id === parseInt(ciudadId)); //filtra el estado para encontrar la ciudad seleccionada
  if(ciudad.length > 0){
    return ciudad[0];
  } else{
    return null;
  }
}  
 
  return ( //se usa la versión 6 de router-dom
    <div className="App">
      <Nav onSearch={onSearch}/> {/* pasa la función como parámetro hacia el siguiente componente */}
      <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/" element={<Cards cities={cities} onClose={onClose}/>}/> {/* se pasa un componete como hijo con un array y una función como parámetro */}
        <Route path="/ciudad/:ciudadId" element={<City  onFilter={onFilter}/>}/> {/* se pasa un componente con una función como parámetro para los detalles de la ciudad */}
      </Routes>
    </div>
  );
}
