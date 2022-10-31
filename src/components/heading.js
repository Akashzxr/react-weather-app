import React, { useState } from "react"
import "../styles/App.css"

export default function Heading(){
    const [searchclick,setsearchclick] = useState(false);

    const search=()=>{
        if(searchclick){
            setsearchclick(false);
        }
        else{
            setsearchclick(true);
        }
    }

    return(
        <div className="heading">
           <p style={{display: searchclick?'none':'block'}} className="place">kodungallur</p>
           <input placeholder="Type the cityname" style={{display: searchclick?'block':'none'}} type={"text"} className="search-box"/>
           <button onClick={search} style={{display: searchclick?'block':'none'}} className="close-btn">x</button>
           <div className="btn-sec">
              <button onClick={search} style={{display: searchclick?'none':'block'}} className="searchbtn fa fa-search"></button>
              <button className="degreebtn">&#8451;</button>
           </div>
          
        </div>
    )
}