import React, { useState, useContext } from 'react';
import './Homepage.css';
import { Link } from 'react-router-dom';
import { CartContext } from './App.jsx';

const cartIcon = 'https://cdn-icons-png.flaticon.com/512/1170/1170678.png';

const Home = () => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);

  const products = [
    {
      name: "Gold Necklace Set",
      discountedPrice: "Rs.350000",
      actualPrice: "Rs.400000",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgGAX_PfBf0NTZU0gbglUR5Jflgph7H2Ie5g&s"
    },
    {
      name: "Diamond Ring",
      discountedPrice: "Rs.200000",
      actualPrice: "Rs.250000",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwR4FzYnAsLawQAjHXbGvq8ZKVVuamQL-EaQ&s"
    },
    {
      name: "Gold Jewellery",
      discountedPrice: "Rs.500000",
      actualPrice: "Rs.550000",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMvdlwwERZiQZgwlzPGLpwCUlonLiM-R_8dQ&s"
    },
    {
      name: "Pearl Jewellery",
      discountedPrice: "Rs.120000",
      actualPrice: "Rs.200000",
      image: "https://www.hugetomato.com/cdn/shop/products/pearl_jewelry_set.jpg?v=1727693826"
    },
    {
      name: "Ruby Set",
      discountedPrice: "Rs.350000",
      actualPrice: "Rs.400000",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsi-XANXzam0TcoYiOSJV8-uBOCTqGHoQAJQ&s"
    },
    {
      name: "Diamond Pendant Set",
      discountedPrice: "Rs.900000",
      actualPrice: "Rs.1000000",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7HmGm4mnzSb1-YpEpAaNKYPXTMfCd9mV4eg&ss"
    },
    {
      name: "Gold Ranihaar Set",
      discountedPrice: "Rs.300000",
      actualPrice: "Rs.250000",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeFd1WeX1wFA8moLHgTnB0ON-Da5pKEpIm7A&s"
    },
    {
      name: "Diamond Jewellery",
      discountedPrice: "Rs.500000",
      actualPrice: "Rs.600000",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdoF4B7Xw37w8MP8GDdeTPfGOcKk1D_ixn7g&s"
    }
  ];

  return (
    <div className="home-page">
      <header className="header">
        <div className="logo">
          <img src="https://www.pngitem.com/pimgs/m/26-265862_emoji-png-download-transparent-sparkle-emoji-crown-png.png" alt="Shine Sales " className="logo-img" />
          <span className="logo-text">SHINE SALES</span>
        </div>
        <nav style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <span className="cart-icon" onClick={() => setShowCart((s) => !s)}>
            <img src={cartIcon} alt="Cart" style={{ width: 28, verticalAlign: 'middle' }} />
            {cart.length > 0 && (
              <span className="cart-badge">{cart.length}</span>
            )}
          </span>
        </nav>
      </header>

      {showCart && (
        <div className="cart-dropdown" style={{ position: 'absolute', right: 30, top: 60, background: '#fff', border: '1px solid #d4af37', borderRadius: 8, boxShadow: '0 2px 8px #0002', zIndex: 100, minWidth: 260 }}>
          <div style={{ padding: 12, borderBottom: '1px solid #eee', fontWeight: 'bold', color: '#b38b00' }}>Cart</div>
          {cart.length === 0 ? (
            <div style={{ padding: 16, color: '#888' }}>Your cart is empty.</div>
          ) : (
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {cart.map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', padding: '8px 12px', borderBottom: '1px solid #f3f3f3' }}>
                  <img src={item.image} alt={item.name} style={{ width: 40, height: 40, objectFit: 'cover', borderRadius: 6, marginRight: 10 }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 500 }}>{item.name}</div>
                    <div style={{ color: '#b38b00', fontSize: 13 }}>{item.discountedPrice}</div>
                  </div>
                  <button style={{ background: 'none', border: 'none', color: '#b38b00', fontWeight: 'bold', cursor: 'pointer', fontSize: 18 }} onClick={() => removeFromCart(idx)}>&times;</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      <section className="hero">
        <h1>Discover Exquisite Jewellery</h1>
        <p>Explore our stunning collection of gold, diamond, ruby, and pearl jewellery.</p>
        <div className="hero-logo">
          <img src="shine-sale-logo.png" alt="Shine Sale Logo" />
        </div>
      </section>

      <section className="categories">
        {products.map((product, index) => (
          <div className="item" key={index}>
            <img src={product.image} alt={product.name} />
            <p className="name">{product.name}</p>
            <p className="discounted-price">Discounted Price: {product.discountedPrice}</p>
            <p className="actual-price">Actual Price: <span className="strikethrough">{product.actualPrice}</span></p>
            <button className="buy-button" onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </section>
      <footer className="homepage-footer-minimal">
        <div className="footer-minimal-content" style={{flexWrap: 'wrap', justifyContent: 'center', alignItems: 'flex-start', gap: '40px', textAlign: 'left', maxWidth: '1200px', margin: '0 auto', padding: '20px 0'}}>
          <div className="footer-minimal-brand" style={{minWidth: '200px'}}>
            Shine Sales<br/>
            <span style={{fontSize: '0.98em', color: '#b38b00b0'}}>Luxury Jewellery</span>
          </div>
          <div className="footer-minimal-section">
            <div className="footer-minimal-title" style={{fontWeight: 'bold', marginBottom: '8px', color: '#b38b00'}}>CONTACT INFORMATION</div>
            <div className="footer-minimal-contact">
              <div>• Kathmandu, Dillibazar, Nepal</div>
              <div>Email: <a href="mailto:shinesales@gmail.com" style={{color: '#b38b00'}}>shinesales@gmail.com</a></div>
            </div>
          </div>
          <div className="footer-minimal-section">
            <div className="footer-minimal-title" style={{fontWeight: 'bold', marginBottom: '8px', color: '#b38b00'}}>ABOUT</div>
            <div className="footer-minimal-links" style={{flexDirection: 'column', alignItems: 'flex-start', gap: '4px'}}>
              <Link to="/about-us">About-Us</Link>
              <Link to="/quality">Quality</Link>
              <Link to="/why-us">Why Us?</Link>
              <Link to="/testimonials">Testimonials</Link>
              <Link to="/blogs">Blogs</Link>
            </div>
          </div>
        </div>
        <div className="footer-minimal-copy">
          &copy; {new Date().getFullYear()} Shine Sales. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
