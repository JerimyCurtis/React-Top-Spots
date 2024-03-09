import React, { Component } from 'react';
import axios from 'axios';
import TopSpot from './TopSpot'; // Ensure this component is correctly imported

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topspots: []
    };
  }

  componentDidMount() {
    // Adjust this URL to match your proxy setup
    axios.get('/api/items/top_spots')
      .then(response => {
        // Assuming the response data is the array of top spots
        this.setState({ topspots: response.data });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  render() {
    console.log('TopSpots rendering:', this.state.topspots);
    return (
      <div className="App">
        <div className="container">
          <h1>San Diego Top Spots</h1>
          <h2>A list of the top 30 places to see in San Diego, California.</h2>
          {this.state.topspots.length > 0 ? (
            this.state.topspots.map((topspot, index) => (
              <TopSpot
                key={index}
                name={topspot.name}
                description={topspot.description}
                location={topspot.location}
              />
            ))
          ) : (
            <p>Loading top spots...</p>
          )}
        </div>
      </div>
    );
  }
}

export default App;
