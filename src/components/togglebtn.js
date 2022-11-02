import React from 'react';
import "../styles/toggle.css";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { click } from '../redux/reduxslice';


export default function Togglebtn(){
    
    const clickdata =useSelector((state)=>state.redux.click);
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

                <button style={{color: clickdata?'white':'black'}} onClick={nowclick} id="now-btn">Now</button>
                <button style={{color: clickdata?'black':'white'}} onClick={hourlyclick} id="forecast-btn">Hourly Forecast</button>
                
                <span style={{transform: clickdata?'translateX(0%)':'translateX(95%)'}} className="slider"/>
            </div>

        </div>
    )
}