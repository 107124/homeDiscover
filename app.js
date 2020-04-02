import React, { Component } from 'react';

import Home from "./home";
import Navbar from "./navbar";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Navbar />
        <Home />
      </div>
    );
  }
}
