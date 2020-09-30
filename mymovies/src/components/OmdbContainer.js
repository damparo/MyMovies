import React, { Component } from "react";
import MovieResults from "./MovieResults";
import SearchForm from "./SearchForm";
import API from "../utils/API";
import "../styles/SearchPage.css";

class OmdbContainer extends Component {
  state = {
    result: {},
    search: "",
  };

  componentDidMount() {
    this.searchMovies("The Matrix");
  }

  searchMovies = (query) => {
    API.search(query)
      .then((res) => this.setState({ result: res.data }))
      .catch((err) => console.log(err));
  };
  

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchMovies(this.state.search);
  };

  render() {
    return (

      
      <div className="container d-flex flex-column align-content-center">

    <h1 className="display-4 title">myList: Movies </h1>
       
        <SearchForm
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <hr></hr>
        <MovieResults
          title={this.state.result.Title}
          src={this.state.result.Poster}
          released={this.state.result.Released}
        />
      </div>
    );
  }
}

export default OmdbContainer;
