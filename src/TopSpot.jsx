import React from 'react';

const TopSpot = (props) => (
  <div className='well'>
    <h4>{props.name}</h4>
    <p>{props.description}</p>
    <a href={`https://maps.google.com/?q=${props.location[0]},${props.location[1]}`} 
       className="btn btn-primary" 
       target="_blank" 
       rel="noopener noreferrer">
      View on Google Maps
    </a>
  </div>
);

export default TopSpot;
