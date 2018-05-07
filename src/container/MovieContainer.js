import React, {Component} from 'react';
import MovieList from '../components/MovieList.js'

class MovieContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {id:1, title: "Sherlock Gnomes"},
        {id:2, title: "Life Of The Party"},
        {id:3, title: "Breaking In"},
        {id:4, title: "Entebbe"},
        {id:5, title: "Deadpool 2"},
        {id:6, title: "How To Talk To Girls At Parties"},
        {id:7, title: "Revenge"},
        {id:8, title: "Anon"},
        {id:9, title: "The Cured"},
        {id:10, title: "Godard Mon Amour"},
      ]
    }
  }

  render() {
      return (
        <div className="movie-container">
          <h1>UK Movies Out This Week</h1>
          <MovieList data={this.state.data}/>
          <img src="movies-1.png" className="movies-1" />
          <img src="movies-2.png" className="movies-2" />
        </div>
      )
    }
}

export default MovieContainer;
