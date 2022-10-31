import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Hourlydetails(){
    const lat = useSelector((state)=>state.redux.lat);
    async function getdata(){
        const response = await fetch('https://pro.openweathermap.org/data/2.5/forecast/hourly?lat={lat}&lon={lon}&appid={API key}',{mode:'cors'});
        const result = await response.json();
        console.log(lat);
    }
 useEffect(()=>{
   getdata();
 },[])
    return(
        <div className="hourlydeails">
             
        </div>
    )
}