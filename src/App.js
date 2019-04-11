import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import About from './components/pages/About'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <h1>Home Page</h1>
            </React.Fragment>
          )} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
