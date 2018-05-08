import React, { Component} from 'react';
import Movie from './Movie.js';

class MovieList extends Component {
  render() {
    const movieNodes = this.props.data.map((movie) => {
      return(
        <li>
          <Movie title={movie.title} key={movie.id}/>
        </li>
      );
    });

    return (
      <div className="movie-list">
        <h3>Title</h3>
        <ul>
          {movieNodes}
        </ul>
      </div>
    );
  }
}

export default MovieList;
