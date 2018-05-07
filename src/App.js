import React, { Component } from 'react';
import MovieContainer from './container/MovieContainer.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <img src="IMDB_Logo_2016.svg.ico" className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to IWDP</h1>
        </header>
        <MovieContainer/>
      </div>
    );
  }
}

export default App;
