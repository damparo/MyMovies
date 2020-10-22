import React from "react";
import "../styles/SearchPage.css";

function CollectionBtn(props) {
  return (
    
        <button type="button" className="btn btn-secondary collectionBtn"
        onClick={() => {
          props.collectionClick();
          props.hideResultsMovies()
          props.seenClickHide();
        }}
        >
          Collection
        </button>
    
  );
}

export default CollectionBtn;
