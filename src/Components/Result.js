import React from 'react';
import './Result.css';

function Result(props) {
  return (
    <div className="result">
      <div className="ZipCode">
        {props.ZipCode}
      </div>
    </div>
  );
}

export default Result;
