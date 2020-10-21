import React from "react";
import "../styles/Collection.css";
import { Card } from "react-bootstrap";


function Collection(props) {
  return (
    <div className="collectionhere text-white">
      <h2>Your Collection</h2>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          alt={props.title}
          className="img-fluid"
          src={props.src}
          style={{ margin: "0 auto" }}
        />
      </Card>
        <h3 className="text-white">{props.title}</h3>
     
    </div>
  );
}

export default Collection;
