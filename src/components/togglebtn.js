import React from 'react';
import "../styles/toggle.css";
import { useDispatch } from 'react-redux';
import { click } from '../redux/reduxslice';


export default function Togglebtn(){

    const dispatch=useDispatch();

    const nowclick=()=>{
      dispatch(click(true));
    }
    const hourlyclick=()=>{
        dispatch(click(false));
    }

    return(
        <div className="togglebtn">

            <div className="btn-container">
                <button onClick={nowclick} id="now-btn">Now</button>
                <button onClick={hourlyclick} id="forecast-btn">7 Day Forecast</button>
                <span className="slider"/>
            </div>

        </div>
    )
}