import React, { Component } from 'react';
import './App.css';
import Gallery from './Gallery';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Details from './Details';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className='Title'>
            <h1>Welcome to Kodflix.</h1>
          </div>
          <Route exact path='/' component={Gallery} />
          <Route exact path='/:details' component={Details} />
        </div>
      </Router>
    );

  }
}




export default App;
