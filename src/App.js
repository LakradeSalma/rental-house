import React from 'react';
import './index.css';
import {Routes, Route} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import About from "./pages/About";
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
import LoginSignup from './pages/LoginSignup';

const App = () => {
  return (
  <div className='max-w-[1440px] mx-auto bg-white'>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/property/:id' element={<PropertyDetails />} />
      <Route exact path='/about' element={<About />} />
      <Route path='/loginsignup' element={<LoginSignup />} />
    </Routes>
    <Footer />
  </div>
  );
};

export default App;
