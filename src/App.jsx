import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  const isLoggedIn = localStorage.getItem('auth');

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/" />} />
    </Routes>
  );
}

export default App;
