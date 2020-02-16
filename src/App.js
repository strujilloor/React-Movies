import React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import MoviesContainer from './containers/MoviesContainer/MoviesContainer';
import MovieFormContainer from './containers/MovieFormContainer/MovieFormContainer';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />  
        <Route exact path='/' component={ MoviesContainer } />
        <Route exact path='/addMovie' component={ MovieFormContainer } />
      </BrowserRouter>
    </div>
  );
}

export default App;
