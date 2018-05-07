import React, {Component} from 'react';

class Movie extends Component {
  render() {
    return (
          <div className="movie">
            <p>{this.props.title}</p>
            {this.props.children}
          </div>
        )
      }
    }

export default Movie;
