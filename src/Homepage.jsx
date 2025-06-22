import React from 'react';
import './Homepage.css';
import { Link } from 'react-router-dom';


const Home = () => {
  
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
  <nav>
    <Link to="/">Home</Link>
    <Link to="/dashboard">Dashboard</Link>
    <Link to="/login">Login</Link>
    <Link to="/register">Register</Link>
  </nav>
</header>



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
            <button className="buy-button">Buy Now</button>
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
        <a href="#about-us">About-Us</a>
        <a href="#quality">Quality</a>
        <a href="#why-us">Why Us?</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#blogs">Blogs</a>
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
