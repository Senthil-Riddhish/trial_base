import './App.css';
import React from 'react'
import{BrowserRouter as Router,Routes,Route, BrowserRouter}from "react-router-dom";
import Home from './pages/Home';
import Movies from './pages/Movies';
import Author from './pages/Author';
function App() {
  return (
    <Router>
      <h6>NAVBAR OF RIDDHISHWAR S</h6>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Movie" element={<Movies/>}></Route>
        <Route path="/Author" element={<Author/>}></Route>
      </Routes>
    </Router>
  )
}

export default App

