import React from "react";
import "../styles/SearchPage.css";

function SeenBtn(props) {
  return (
        <button type="button" className="btn btn-info seenBtn"
        onClick={() => {
          props.seenClick();
          props.hideResultsMovies();
          props.collectionClickHide();
        }}>
          Seen
        </button>
  );
}

export default SeenBtn;
