import React, { Component } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Index from './Components/index.js';
import Grid from '@material-ui/core/Grid';
import SummonerSearch from './Components/SummonerSearch'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Grid container>
          <Grid item sm={12}>
            <SummonerSearch />
          </Grid>
        </Grid>
        
        <Footer />
      </div>
    );
  }
}

export default App;
