import React, { Component} from 'react';
import Movie from './Movie.js';

class MovieList extends Component {
  render() {
    const commentNodes = this.props.data.map((movie) => {
      return(
        <Movie title={movie.title} key={movie.id}/>
      );
    });

    return (
      <div className="movie-list">
        <h3>Title</h3>
        {commentNodes}
      </div>
    );
  }
}

export default MovieList;
