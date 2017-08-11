import React from 'react';
import { actors } from '../data';

const Actor = ({props}) => {
  return (
    <div className="actor">
      <h3>{props.name}</h3>
      <p>Movies:</p>
      <ul>
        {props.movies.map(movie => <li>{movie}</li>)}
      </ul>
    </div>
  )
}

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor => <Actor props={actor}/>)}
    </div>
  );
};

export default Actors;
