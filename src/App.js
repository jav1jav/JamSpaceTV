import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import JamSpace from './JamSpace'
import StreamTest from './stream-test'

class App extends Component {
  render() {
    return (
      <div className="App">
        <JamSpace />
        <StreamTest />
      </div>
    );
  }
}

export default App;
