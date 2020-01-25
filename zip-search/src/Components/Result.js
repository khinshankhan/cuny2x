import React from 'react';
import './Result.css';

function Result(props) {
  return (
    <div className="result">
      <div className="top">
        {props.LocationText}
      </div>
      <div className="bottom">
        <ul>
          <li>State: {props.State}</li>
          <li>Location: ({props.Lat}, {props.Long})</li>
          <li>Population: {props.EstimatedPopulation}</li>
          <li>Total Wages: {props.TotalWages}</li>
        </ul>
      </div>
    </div>
  );
}

export default Result;
