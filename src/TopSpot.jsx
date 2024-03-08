import React from 'react';

const TopSpot = (props) => {
  const { name, description, location } = props;
  const mapsUrl = `https://maps.google.com/?q=${location[0]},${location[1]}`;

  return (
    <div className='well'>
      <h4>{name}</h4>
      <p>{description}</p>
      <a href={mapsUrl} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
    </div>
  );
}

export default TopSpot;
