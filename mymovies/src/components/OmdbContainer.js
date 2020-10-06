import React, { Component } from "react";
import MovieResults from "./MovieResults";
import SearchForm from "./SearchForm";
import API from "../utils/API";
// import CollectionBtn from "./CollectionBtn";
// import SeenBtn from "./SeenBtn";
import SaveMovie from "./SaveMovie";
import Collection from "./Collection";
import "../styles/SearchPage.css";

class OmdbContainer extends Component {
  state = {
    result: {},
    search: "",
    displayCollectionOnly: false,
    hideMainPage: true,
  };

  // constructor(props) {
  //   this.collectionClick = this.collectionClick.bind(this);
  //   this.state = {displayCollection: false};
  // }
  // collectionClick = () => {
  //   this.setState({displayCollectionOnly: true});
  // }
  // hideResultsMovies = () => {
  //   this.setState({hideResults: false});
  // }

  // onClick(event){
  //   collectionClick();
  //   hideResultsMovies();
  //   }

  collectionClick = () => {
    this.setState({ displayCollectionOnly: true });
  };
  hideResultsMovies = () => {
    this.setState({ hideMainPage: false });
  };

  componentDidMount() {
    this.searchMovies("John Wick");
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
  // ---------------------------------------------------
  render() {
    return (
      <div className="container d-flex flex-column align-content-center">
        <h1 className="display-4 title text-white">myList: Movies </h1>

        <SearchForm
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />

        <button
          type="button"
          className="btn btn-secondary collectionBtn"
          onClick={() => {
           this.collectionClick();
            this.hideResultsMovies();
          }}
        >
          Collection
        </button>

        {/* <CollectionBtn onClick={this.collectionClick}/>
        <SeenBtn/> */}

        {this.state.displayCollectionOnly ? <Collection /> : null}

        {this.state.hideMainPage ? (
          <MovieResults
            title={this.state.result.Title}
            src={this.state.result.Poster}
            released={this.state.result.Released}
          />
        ) : null}


{this.state.hideMainPage ? (
        <SaveMovie /> ) : null}
      </div>
    );
  }
}

export default OmdbContainer;
