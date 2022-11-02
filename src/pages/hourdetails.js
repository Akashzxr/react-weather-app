import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../styles/hourly.css";

export default function Hourlydetails() {

    const input = useSelector((state) => state.redux.input);
    const unitval = useSelector((state)=>state.redux.unitval);
    const unit = useSelector((state)=>state.redux.units);
   
    const [data,setdata]=useState([]);
    

    async function getdata() {
        const response = await fetch('https://api.openweathermap.org/data/2.5/forecast?q='+input+'&cnt=5&units='+unit+'&appid=55b2f4b739998d82795ba5cabb50890f&exclude=minutely,hourly', { mode: 'cors' });
        const result = await response.json();
        setdata(result.list);
        console.log(data);
    }

    const d=(date)=>{
        const dat = new Date(date);
        let time = dat.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
        return(time);
    }

    useEffect(() => {
        getdata();
    }, [input,unit])

    return (
        <div className="hourlydeails">
            {data.map((list,index)=>{
                return(
                    <div className="hour-weather-details">
                       <div>{d(list.dt_txt)}</div>
                       <div className="hourly-weather">{Math.round(list.main.temp)}&#8451;</div>
                       <img src={require("../assets/"+list.weather[0].icon+".png")}/>
                    </div>
                )
            })}
        </div>
    )
}