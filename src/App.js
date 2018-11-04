import React, { Component } from 'react';
//import Calculator from './Calculator';
//import MyApp from './MyApp';
//import Link from './Link.react';
import CheckBox from './CheckBox';
import Clock from './Clock';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit 
{' '}
<code>src/App.js</code>
{' '}
and save to reload.
</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {/* <Calculator /> */}
          {/* <MyApp /> */}
          {/* <Link page="http://www.ibm.ca"> Link Test </Link> */}
          <CheckBox labelOn="On" labelOff="Off" />
          <Clock />
        </header>
      </div>
    );
  }
}

export default App;

