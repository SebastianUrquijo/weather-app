import React from "react";
import SearchBar from './SearchBar.jsx'
import '../styles/Nav.css'
import { Link } from "react-router-dom";

export default function Nav ({onSearch}){
    return(
    <nav className='navBar'>
        <div className="linkZone">
        <Link to='/' id="homeLink"><span>Home</span></Link>   {/* Conecta con la ruta del mismo nombre */}
        <Link to='/about' id="homeLink" ><span >About</span></Link>
        <span id="creator">Weather-App by Jsur</span>
        </div>   
        <SearchBar id="searchBtn" onSearch={onSearch}/> {/* Translada la acción del input hasta la App */}
    </nav>
    )
}