import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import down from "../assets/pressure-low.svg";
import up from "../assets/pressure-high.svg";
import feels from "../assets/feelslike.svg";
import humid from "../assets/humidity.svg";
import rainsvg from "../assets/rain.svg";
import wind from "../assets/wind.svg";
import "../styles/nowdetails.css";
import "../styles/App.css"

export default function Nowdetails() {

   const ins = useSelector((state) => state.redux.input);
   const unitval = useSelector((state)=>state.redux.unitval);
   const unit = useSelector((state)=>state.redux.units);

   //const [ins,setins]=useState("kodungallur"); 
   const [day, setday] = useState();
   const [month, setmonth] = useState();
   const [time, settime] = useState();

   const [weather, setweather] = useState();
   const [description, setdescription] = useState();
   const [feelslike, setfeelslike] = useState();
   const [humidity, sethumidity] = useState();
   const [windspeed, setwindspeed] = useState();
   const [rain, setrain] = useState();
   const [icon, seticon] = useState("04d");



   async function getdata() {
      //fetching details
      const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + ins + '&units='+unit+'&exclude=hourly,minutely&appid=55b2f4b739998d82795ba5cabb50890f', { mode: 'cors' });
      const result = await response.json();
      if (!response.ok) {
         alert("location not found.try entering without special character or real city name");
     }

      

      //getting date from the timezone
      let d = new Date().toLocaleString("en-US", { timeZone: result.timeZone });
      

      //setting day,month and time
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
         "Aug", "Sept", "Oct", "Nov", "Dec"];

      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

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
      if ('rain' in result) {
         setrain(result.rain["1h"]);
      }
      else {
         setrain(0.0);
      }
   }

   useEffect(() => {
      getdata();
   },[ins,unit])

   return (
      <div className="nowdetails">
         <div className="dateandtime">
            <span>{day}</span>
            <span>{month},</span>
            <span>{time}</span>
         </div>

         <div className="weather-details1" >

            <div className="weather">
               <div className="bigweather">{weather}{unitval}</div>

               <div className="small-weather-container">
                  <div className="smallweather1" >
                     <img src={down} />
                     <span>{weather}{unitval}</span>
                  </div>

                  <div className="smallweather2">
                     <span>{weather}{unitval}</span>
                     <img src={up} />
                  </div>
               </div>
            </div>

            <div className="description-container">
               <img src={require("../assets/"+icon+".png")} className="clouds" />
               <div className="value" >{description}</div>
            </div>
         </div>

         <div className="weather-details2">
            <div className="feelslike">
               <img src={feels} className="details2-icons" />
               <div className="text">
                  <div>Feels Like</div>
                  <div className="value">{feelslike}{unitval}</div>
               </div>
            </div>
            <div className="humidity">
               <img src={humid} className="details2-icons" />
               <div className="text">
                  <div>Humidity</div>
                  <div className="value">{humidity}%</div>
               </div>
            </div>
            <div className="rain">
               <img src={rainsvg} className="details2-icons" />
               <div className="text">
                  <div>Cahnce of rain</div>
                  <div className="value">{rain}%</div>
               </div>
            </div>
            <div className="wind-speed">
               <img src={wind} className="details2-icons" />
               <div className="text">
                  <div>Wind speed</div>
                  <div className="value">{windspeed}Km/h</div>
               </div>
            </div>

         </div>
      </div>
   )
}