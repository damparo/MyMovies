import React from "react";


function MovieResults (props) {
    return (
    <div className="text-center">
      <img alt={props.title} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} />
      <h3 className="text-white">{props.title}</h3>
      {/* <h7 className="text-white">{props.released}</h7> */}
    </div>

    );
}

export default MovieResults;