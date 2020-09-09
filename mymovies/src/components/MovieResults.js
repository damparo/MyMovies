import React from "react";
import "../styles/MovieResults.css";

function MovieResults (props) {
    return (
    <div className="text-center">
      <img alt={props.title} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} />
      {/* <h3>Released: {props.released}</h3> */}
    </div>

    );
}

export default MovieResults;