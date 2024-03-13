import React, { Component } from 'react';
import axios from 'axios';
import TopSpot from './TopSpot';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topspots: null, // Initialize topspots as null
    };
  }

  componentDidMount() {
    axios.get('https://ccc.helloworldbox.com/items/top_spots')
      .then(response => this.setState({ topspots: response.data.data }))
      .catch(error => console.error("Fetching data error:", error));
  }

  render() {
    if (this.state.topspots === null) {
      return <div>Loading...</div>;
    }

    return (
      <div className='container'>
        <div className='header'>
          <h1><img src="./img/words.png" alt="San Diego Top Spots" style={{ width: '100%', height: 'auto' , position:'left'}} /></h1>
          <p id='p1'>A list of the top 30 places to see in San Diego, California.</p>
        </div>
        <div className='card-grid'>
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
