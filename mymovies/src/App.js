import React from 'react';
import MovieTitle from "./components/MovieTitle";
import MovieBank from './components/MovieBank';
import AddMovie from './components/AddMovie';


function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="row">
              <MovieTitle />
          </div>
          <div className="row">
              <MovieBank />
          </div>
          <div className="row">
            <AddMovie />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
