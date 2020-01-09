import React from 'react';
import './Result.css';

function Result(props) {
  return (
    <div class="result">
      <div class="top">
        Here is a result component<br/>
        data[0].LocationText
      </div>
      <div class="bottom">
        <ul>
          <li>State: data[0].State</li>
          <li>Location: (data[0].Lat, data[0].Long)</li>
          <li>Population: data[0].EstimatedPopulation</li>
          <li>Total Wages: data[0].TotalWages</li>
        </ul>
      </div>
    </div>
  );
}

export default Result;
