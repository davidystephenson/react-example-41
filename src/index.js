import React from 'react';
import ReactDOM from 'react-dom';
// const ReactDOM = require('react-dom')
import App from './App';
// const App = require('./App.js')

// Build the jsx returned from the App.js function
const app = <React.StrictMode>
  <App />
</React.StrictMode>

// find the first element on the page
// with the id 'root'
const root = document.getElementById('root')

// Inserts the App jsx into the root element
ReactDOM.render(
  app,
  root  
);