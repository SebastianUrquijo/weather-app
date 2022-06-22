import React from "react";
import "../styles/About.css"

export default function About(){
    const array = [
        {link:"https://res.cloudinary.com/drcvcbmwq/image/upload/v1655585043/Javascript_l9eucn.png" , name: "JavaScript" },
        {link:"https://res.cloudinary.com/drcvcbmwq/image/upload/v1655585095/react_x2s9pc_xwjwjr.png", name: "React"},
        {link:"https://res.cloudinary.com/drcvcbmwq/image/upload/v1655584678/CSS_n1lpba.png", name: "CSS 3"},
        {link:"https://res.cloudinary.com/drcvcbmwq/image/upload/v1655584805/HTML_pcfn1x.png", name: "HTML 5"},
    ]
    return(
        <div className="infoPage">
        <div className="titleText">
            <h2>Basic weather app using external API</h2>
            <h4>Developed by Sebastian Urquijo</h4>
        </div>
        <div className="infoZone">
        <div className="infoBox">
            <ul>
                <li>It works with OpenWeather App API services</li>
                <li>Max 6 cities</li>
                <li><b>City</b> and <b>Country</b> validations</li>
                <li>Cities are not repeated</li>
                <li>Not responsive desing (For Yet)</li>
            </ul>
        </div>
        <div className="imgArea">
            <h3>Technologies</h3>
            <div className="miniPictures">
                {array && array.map((elm)=> (
                    <div key={elm.name} className="sector">
                    <div className="logotipe" >
                        <img id={elm.name === "GitHub" ? "back" : null} src={elm.link} alt="Logo"/>
                    </div>
                        <p>{elm.name}</p>
                    </div>
                ))}
        </div>
        </div>
        </div>
        </div>
    )
}