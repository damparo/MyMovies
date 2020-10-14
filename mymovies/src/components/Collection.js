import React from "react";
import "../styles/Collection.css";

function Collection(props) {
  return (
    <div className="collectionhere text-white">
      <h2>Your Collection</h2>
      <div className="pinmovie">
        Movies go here - create loop to add connect saved movie with new card
      </div>
      <img
        alt={props.title}
        className="img-fluid"
        src={props.src}
        style={{ margin: "0 auto" }}
      />
      <h3 className="text-white">{props.title}</h3>
      {/* <h7 className="text-white">{props.released}</h7> */}
    </div>
  );
}

export default Collection;
