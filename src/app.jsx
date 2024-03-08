import React, { Component } from 'react';
import axios from 'axios';
import TopSpot from './TopSpot'; // Make sure to create this component

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topspots: []
    };
  }

  componentWillMount() {
    axios.get('https://ccc.helloworldbox.com/items/top_spots')
      .then(response => this.setState({ topspots: response.data }))
      .catch(error => console.error('Error fetching data:', error));
  }

  render() {
    return (
      <div className='App'>
        <div className="container">
          <h1>San Diego Top Spots</h1>
          <h2>A list of the top 30 places to see in San Diego, California.</h2>
          {this.state.topspots.map(topspot => (
            <TopSpot
              key={topspot.id}
              name={topspot.name}
              description={topspot.description}
              location={topspot.location}
            />
          ))}
        </div>
      </div>
    );
  }
}
