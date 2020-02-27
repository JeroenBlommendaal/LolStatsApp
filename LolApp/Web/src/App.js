import React, { Component } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Index from './Components/index.js'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Index />
        <Footer />
      </div>
    );
  }
}

export default App;
