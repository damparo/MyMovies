import React from "react";
import "../styles/SearchPage.css";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <div className="row justify-content-center">
          <div className="col-8">
            <input
              onChange={props.handleInputChange}
              value={props.value}
              name="search"
              type="text"
              className="form-control"
              placeholder="Search For a Movie"
              id="search"
            />
          </div>
          <div className="col-2">
            <button
              onClick={props.handleFormSubmit}
              className="btn btn-primary search"
            >
              O
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default SearchForm;
