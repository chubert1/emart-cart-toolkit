import React from 'react';
import './App.css';
import CartContainer from './components/CartContainer';
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
     <NavBar />
     <CartContainer />
    </div>
  );
}

export default App;
