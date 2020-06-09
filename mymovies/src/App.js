import React from 'react';
import MovieTitle from "./components/MovieTitle";
import MovieBank from './components/MovieBank';
import AddMovie from './components/AddMovie';


function App() {
  return (
    <div className="container">
            <MovieTitle />
            <MovieBank />
            <AddMovie />
    </div>
  );
}

export default App;
