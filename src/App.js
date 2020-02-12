import React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import MoviesContainer from './containers/MoviesContainer/MoviesContainer';
import './App.css';

function App() {
  return (
    <div className="">
      <Navbar />
      <MoviesContainer />
    </div>
  );
}

export default App;
