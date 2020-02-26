import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import Header from './header.js';
import SummonerSearch from './SummonerSearch.js';

class App extends Component {
  render() {
    return (
      <div className='tc'>
        <Header />
        <i>feed.gg</i>
        <SummonerSearch />
      </div>
    );
  }
}

export default App;
