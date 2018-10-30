import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './screens/home';
import Listings from './screens/listings';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/listings" component={Listings} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
