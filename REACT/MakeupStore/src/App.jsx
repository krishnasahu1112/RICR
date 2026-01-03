import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Product from './pages/Product';
import Contact from './pages/Contact';
import About from './pages/About';
import Login from './pages/Login';

const App = () => {
  return (
    <>
      <BrowserRouter>   
        <Toaster position="top-center" reverseOrder={false}/>
        <Header />
        <Routes>
          <Route path='/'        element={<Home />}    />
          <Route path='/product' element={<Product />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about'   element={<About />}   />
          <Route path='/login'   element={<Login />}   />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;


