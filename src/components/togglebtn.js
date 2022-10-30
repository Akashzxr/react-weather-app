import React from 'react';
import "../styles/toggle.css";


export default function Togglebtn(){

    return(
        <div className="togglebtn">

            <div className="btn-container">
                <button id="now-btn">Now</button>
                <button  id="forecast-btn">7 Day Forecast</button>
                <span className="slider"/>
            </div>

        </div>
    )
}