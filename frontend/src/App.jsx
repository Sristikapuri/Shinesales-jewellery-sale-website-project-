import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import Dashboard from './Dashboard.jsx';
import AboutUs from './AboutUs.jsx';
import Quality from './Quality.jsx';
import WhyUs from './WhyUs.jsx';
import Testimonials from './Testimonials.jsx';
import Blogs from './Blogs.jsx';

// Create Cart Context
export const CartContext = createContext();

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => setCart((prev) => [...prev, product]);
  const removeFromCart = (idx) => setCart((prev) => prev.filter((_, i) => i !== idx));

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} /> {/* Homepage route */}
          <Route path="/login" element={<Login />} /> {/* Login route */}
          <Route path="/register" element={<Register />} /> {/* Register route */}
          <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard route */}
          <Route path="/about-us" element={<AboutUs />} /> {/* About Us route */}
          <Route path="/quality" element={<Quality />} /> {/* Quality route */}
          <Route path="/why-us" element={<WhyUs />} /> {/* Why Us route */}
          <Route path="/testimonials" element={<Testimonials />} /> {/* Testimonials route */}
          <Route path="/blogs" element={<Blogs />} /> {/* Blogs route */}
        </Routes>
      </Router>
    </CartContext.Provider>
  );
};

export default App;
