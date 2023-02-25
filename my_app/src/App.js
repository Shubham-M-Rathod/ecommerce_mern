import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Shared/Navbar";
import ProductDetails from "./Product/ProductDetails";
import Admin from "./Product/Admin";
import {UserContextProvider} from "./Users/UserContextProvider";

import 'bootstrap/dist/css/bootstrap.min.css';
import Intro from "./Shared/Intro";
function App() {
  return (
    <UserContextProvider>
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Intro/>} />
        <Route path="/products/:pname" element={<ProductDetails/>} />
        <Route path="/admin" element={<Admin/>} />
      </Routes>
    </Router>
    </UserContextProvider>
  );
}

export default App;
