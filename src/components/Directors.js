import React from 'react';
import { directors } from '../data';

const Director = ({props}) => {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>Movies:</p>
      <ul>
        {props.movies.map(movie => <li>{movie}</li>)}
      </ul>
    </div>
  )
}

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director => <Director props={director}/>)}
    </div>
  );
}

export default Directors
