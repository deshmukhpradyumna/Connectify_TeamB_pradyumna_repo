import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from './components/Profile';
import Signup from './components/signup';
import Login from './components/login';
import Home from './components/home';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/profile' exact element={<Profile />} />
    <Route path='/login' exact element={<Login />} />
    <Route path='/signup' exact element={<Signup />} />
    <Route path='/' exact element={<Home />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
