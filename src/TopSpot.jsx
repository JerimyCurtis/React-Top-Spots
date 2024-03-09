import React from 'react';

const TopSpot = ({ name, description, location }) => {
    console.log('TopSpot props:', { name, description, location });
  const mapsUrl = `https://maps.google.com/?q=${location[0]},${location[1]}`;

  return (
    <div className='well'>
      <h4>{name}</h4>
      <p>{description}</p>
      <a className="btn btn-primary" href={mapsUrl} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
    </div>
  );
}

export default TopSpot;
