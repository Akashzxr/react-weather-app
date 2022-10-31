import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import down from "../../assets/pressure-low.svg";
import up from "../../assets/pressure-high.svg";
import clouds from "../../assets/04d.svg";
import "../../styles/now.css"

export default function Nowdetails(){


  const [fetchdata,setfetchdata]=useState();
  const [day,setday] = useState();
  const [month,setmonth]=useState();
  const [time,settime]=useState();

  const [weather,setweather]=useState();
  const [description,setdescription]=useState();
  const [feelslike,setfeelslike]=useState();
  const [humidity,sethumidity]=useState();
  const [windspeed,setwindspeed]=useState();
  const [icon,seticon]=useState();
  
 

  async function getdata(){
    //fetching details
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=kodungallur&units=metric&appid=55b2f4b739998d82795ba5cabb50890f',{mode:'cors'});
    const result = await response.json();
    setfetchdata(result);
    //getting date from the timezone
    let d= new Date().toLocaleString("en-US",{ timeZone: result.timeZone });
    //setting day,month and time
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul",
    "Aug","Sept","Oct","Nov","Dec"];

    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  
    let curren_date = new Date(d);
    let month = months[curren_date.getMonth()];
    setmonth(month);

    let day = days[curren_date.getDay()];
    setday(day);

    let time = curren_date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    settime(time);
    //setting weather data
    setweather(Math.round(result.main.temp));
    setdescription(result.weather[0].description)
    setfeelslike(result.main.feels_like);
    sethumidity(result.main.humidity);
    setwindspeed(result.wind.speed);
    seticon(result.weather[0].icon);

    console.log(result);
    console.log(result.weather[0].icon);
  }

  useEffect(()=>{
    getdata();
  },[])

  return(
    <div className="nowdetails">

       <div className="dateandtime">
          <span>{day}</span>
          <span>{month},</span>
          <span>{time}</span>
       </div>

       <div className="weather-details1" >

           <div className="weather">
                <div className="bigweather">{weather}&#8451;</div>

                <div className="small-weather-container">
                   <div className="smallweather1" >
                       <img src={down} />
                       <span>{weather}&#8451;</span>
                   </div>
                   
                   <div className="smallweather2">
                          <span>{weather}&#8451;</span>
                          <img src={up} />
                   </div>
                </div>
           </div>

           <div className="description-container">
                <img src={clouds}/>
                <div>{description}</div>
           </div>

       </div>

    </div>
  )
}