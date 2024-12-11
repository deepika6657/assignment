import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home';
import Navigator from './components/Navigator';
import Game from './pages/Game';

function App(){

  return (
      <div>
        <BrowserRouter>
        <Navigator />
        <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/aboutUs' element={<About />}/>
        <Route path='/contactUs' element={<Contact />}/>
        <Route path='/game' element={<Game/>}/>
        </Routes>
        </BrowserRouter>
      
    
    </div>
  );
}

export default App;
