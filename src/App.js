import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Screen from './Screens/index.js'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
      <Screen className="overalContainer"/>
  );
}

export default App;
