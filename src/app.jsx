import React, { Component } from 'react';
import axios from 'axios';
import TopSpot from './TopSpot';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topspots: null,
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
        <div className='jumbotron'>
        <h1><img src="./img/words.png" alt="San Diego Top Spots" style={{ width: '30%', height: 'auto' }} /></h1>
          <p>A list of the top 30 places to see in San Diego, California.</p>
          <div className="background-images">
            <div style={{ backgroundImage: "url('./img/bet.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', height: '200px', width: '33.333%' }}></div>
            <div style={{ backgroundImage: "url('./img/arch.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', height: '200px', width: '33.333%' }}></div>
            <div style={{ backgroundImage: "url('./img/row.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', height: '200px', width: '33.333%' }}></div>
          </div>
          <div className="seal"></div>
        </div>
        {this.state.topspots ? this.state.topspots.map((topspot) => (
          <TopSpot
            key={topspot.id}
            name={topspot.name}
            description={topspot.description}
            location={topspot.location}
          />
        )) : <div>No top spots found.</div>}
      </div>
    );
  }
}
