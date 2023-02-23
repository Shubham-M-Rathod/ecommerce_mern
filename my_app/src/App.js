import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Shared/Navbar";
import ProductDetails from "./Product/ProductDetails";
import ProductInput from './Product/ProductInput'

import 'bootstrap/dist/css/bootstrap.min.css';
import Intro from "./Shared/Intro";
function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Intro/>} />
        <Route path="/products/new" element={<ProductInput/>} />
        <Route path="/products/:pname" element={<ProductDetails/>} />
      </Routes>
    </Router>
  );
}

export default App;
