import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './components/site/Header';
import Footer from './components/site/Footer';
import Sidebar from './components/site/Sidebar';
import FunctionalComponentDemo from './components/concepts/FunctionalComponentDemo';
import {
  BrowserRouter as Router,
}from 'react-router-dom';

function App(){
  return (
    <div>
      <Header />
      <Router>
        <Sidebar />
        <FunctionalComponentDemo />
        </Router>
        <Footer /> 
    </div>
  )
}
export default App;
