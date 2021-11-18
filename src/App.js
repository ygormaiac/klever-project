import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Wallet from './pages/Wallet';
import Login from './pages/Login';
import './css/main.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Homepage /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/carteira" element={ <Wallet /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
