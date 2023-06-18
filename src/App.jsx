import React from 'react'
import './App.css'
import Home from './pages/Home'
import Blog from './pages/Blog'


import { BrowserRouter, Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <div className='container'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":id" element={<Blog />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
  
}

export default App

