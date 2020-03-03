import React, { Component } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Grid from '@material-ui/core/Grid';
import SummonerSearch from './Components/SummonerSearch';
// import SummonerResult from './Components/SummonerResult';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Grid container>
          <Grid item sm={12}>
            <SummonerSearch />
          </Grid>
          <Grid item sm={12} style={{height: "400px"}}>
            {/* <SummonerResult /> */}
          </Grid>
          <Grid item sm={12}>

          </Grid>
        </Grid>

        <Footer />

      </div>
    );
  }
}

export default App;
