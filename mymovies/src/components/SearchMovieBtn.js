import React from "react";


function SearchMovieBtn(props) {
  return (

    
    


    <div>
        <button
                className="btn btn-success text-white"
                onClick={() => {
                  props.collectionClickHide();
                  props.displayResultsMovies();
                  props.seenClickHide();
                }}
              >
                Search Movie
              </button> 
    </div>

  );
}

export default SearchMovieBtn;