import React, { Component } from "react";
import MovieResults from "./MovieResults";
import SearchForm from "./SearchForm";
import API from "../utils/API";
// import CollectionBtn from "./CollectionBtn";
// import SeenBtn from "./SeenBtn";
import SaveMovie from "./SaveMovie";
import Collection from "./Collection";
import Seen from "./Seen";
import "../styles/SearchPage.css";
import "../styles/Collection.css";

class OmdbContainer extends Component {
  state = {
    result: {},
    search: "",
    displayCollectionOnly: false,
    displaySeenOnly: false,
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

  collectionClickHide = () => {
    this.setState({ displayCollectionOnly: false });
  };

  hideResultsMovies = () => {
    this.setState({ hideMainPage: false });
  };

  displayResultsMovies = () => {
    this.setState({ hideMainPage: true });
  };

  seenClick = () => {
    this.setState({ displaySeenOnly: true });
  };

  seenClickHide = () => {
    this.setState({ displaySeenOnly: false });
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

        {this.state.hideMainPage ? (
          <SearchForm
            value={this.state.search}
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
          />
        ) : null}

        {this.state.hideMainPage ? (
          <div className="row options">
            <div className="col">
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
            </div>
            <div className="col">
              <button type="button" className="btn btn-info seenBtn" onClick={() => {
                  this.seenClick();
                  this.hideResultsMovies();
                }}>
                Seen
              </button>
            </div>
          </div>
        ) : null}

        {/* <CollectionBtn onClick={this.collectionClick}/>
        <SeenBtn/> */}

        {this.state.hideMainPage ? (
          <MovieResults
            title={this.state.result.Title}
            src={this.state.result.Poster}
            released={this.state.result.Released}
          />
        ) : null}

        {this.state.hideMainPage ? <SaveMovie /> : null}

        {this.state.displayCollectionOnly ? (
          <div className="row options">
            <div className="col-6">
              <button
                class="btn btn-success text-white"
                onClick={() => {
                  this.collectionClickHide();
                  this.displayResultsMovies();
                }}
              >
                Search Movie
              </button>
            </div>
            <div className="col-6">
              <button class="btn btn-info text-white" onClick={() => {
                  this.seenClick();
                  this.hideResultsMovies();
                  this.collectionClickHide()
                }}>Seen</button>
            </div>
          </div>
        ) : null}

        {this.state.displayCollectionOnly ? <Collection /> : null}

        {this.state.displaySeenOnly ? (
          <div className="row options">
            <div className="col-6">
              <button
                class="btn btn-success text-white"
                onClick={() => {
                  this.seenClickHide();
                  this.displayResultsMovies();
                }}
              >
                Search Movie
              </button>
            </div>
            <div className="col-6">
              <button class="btn btn-secondary text-white" onClick={() => {
                  this.collectionClick();
                  this.hideResultsMovies();
                  this.seenClickHide();
                }}>Collection</button>
            </div>
          </div>
        ) : null}
        {this.state.displaySeenOnly ? <Seen /> : null}
      </div>
    );
  }
}

export default OmdbContainer;
