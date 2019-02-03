import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <p>
            Welcome to my website! This is an obvious work in progress. Meanwhile checkout my LinkedIn below:
          </p>
          <a
            className="App-link"
            href="https://www.linkedin.com/in/alejandrolimonnaranjo/"
            target="_blank"
            rel="noopener noreferrer"
          >
          Alex's LinkedIn
          </a>
        </header>
      </div>
    );
  }
}

export default App;
