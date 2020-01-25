import React from "react";

function GifCard(props) {
  return (
    <div className="result">
      <img alt="" src={props.url}></img>
    </div>
  );
}

export default GifCard;
