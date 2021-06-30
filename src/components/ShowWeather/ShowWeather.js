import React from "react";
import "./ShowWeather.css"

function ShowWeather(props) {
  // console.log(props);
  
  return (
    <div className="current-city-weather">
      {props.haveInfo === false ? (
        <div><h3>Search City Weather</h3></div>
      ) : (
        <>
          <div className="info-container">
            <div>
              <h4>The Current Weather for: {props.targetName}, {props.targetCountry}{" "}</h4>
            </div>
            <div>
              Temperature: {props.info.temp}° Fahrenheit 
            <br />
              Feels like: {props.info.feels_like}° Fahrenheit
            <br />
              Lowest: {props.info.temp_min}° Fahrenheit
            <br />
              Highest: {props.info.temp_max}° Fahrenheit
            <br />
              humidity: {props.info.humidity}
            </div>
          </div>
          
        </>
      )}
    </div>
  );
};

export default ShowWeather;