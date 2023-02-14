import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './Component/Header';
import { Footer } from './Component/Footer';
import { Category } from './Component/Category';
import './App.css';
import { Home } from './Component/Home';
import { ProductShow } from './Component/ProductShow';
import { Contact } from './Component/Contact';
import { Career } from './Component/Career';



function App() {



  return (

    <Router>
      <Header />
      <Routes> 
      <Route exact path="/socus" element={<Home />} />
        <Route exact path="/socus/category" element={<Category />} />
        <Route exact path="/socus/product/:modalN" element={<ProductShow />} />
        <Route exact  path="/socus/:globalId/:id" element={<Category />} ></Route>     
        <Route exact  path="/socus/contact-us" element={<Contact />} ></Route>
        <Route exact  path="/socus/career" element={<Career />} ></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
