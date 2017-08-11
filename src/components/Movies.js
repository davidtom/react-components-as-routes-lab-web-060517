import React from 'react';
import { movies } from '../data';

const Movie = ({props}) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>Time: {props.time}</p>
      <p>Genres:</p>
      <ul>
        {props.genres.map(genre => <li>{genre}</li>)}
      </ul>
    </div>
  )
}

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
        {movies.map(movie => <Movie props={movie}/>)}
    </div>
  );
};

export default Movies;
