import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const salesIcon = 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png';
const ordersIcon = 'https://cdn-icons-png.flaticon.com/512/3500/3500833.png';
const customersIcon = 'https://cdn-icons-png.flaticon.com/512/1077/1077114.png';
const bgImage = 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1500&q=80';
const userAvatars = {
  'Sita Shrestha': 'https://randomuser.me/api/portraits/women/68.jpg',
  'Maya Gurung': 'https://randomuser.me/api/portraits/women/65.jpg',
  'Anju Lama': 'https://randomuser.me/api/portraits/women/43.jpg',
};
const featuredProducts = [
  {
    name: 'Diamond Necklace',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfX7_SdUC4zQ7k4nRaGKS3qyL2xSklB7FG3g&s',
    price: '₹755,000',
    type: 'Diamond',
  },
  {
    name: 'Gold Bangles',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzFjjRMcKtFPhVzmeXjkM9deK1x42-T3UWWQ&s',
    price: '₹332,000',
    type: 'Gold',
  },
  {
    name: 'Pearl Earrings',
    img: 'https://rukminim2.flixcart.com/image/850/1000/kza68i80/shopsy-earring/i/i/t/cn-0007-creeknest-original-imag6muscz29rngu.jpeg?q=90&crop=false',
    price: '₹42,000',
    type: 'Pearl',
  },
  {
    name: 'Ruby Set',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzXQTPWgJbAyjFg3ePlJ_S2wUlxeI4r9_d6w&s',
    price: '₹555,000',
    type: 'Ruby',
  },
  {
    name: 'Diamond Bracelet',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtNN2rOh4h53eS-jPXKYAznQpTvLcTsfQOag&s',
    price: '₹240,000',
    type: 'Diamond',
  },
  {
    name: 'Gold Necklace',
    img: 'https://static.wixstatic.com/media/b69f5d_b9f6e8c2bac64eb49856f2b4f1cf7c79~mv2.jpg/v1/fill/w_980,h_980,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/b69f5d_b9f6e8c2bac64eb49856f2b4f1cf7c79~mv2.jpg',
    price: '₹422,000',
    type: 'Gold',
  },
  {
    name: 'Pearl Necklace',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO1IQD8jmGiCaiWQdFG8Y-4RsRNZwBNDm1Gg&s',
    price: '₹119,000',
    type: 'Pearl',
  },
  {
    name: 'Ruby Pendant',
    img: 'https://www.orra.co.in/media/catalog/product/cache/8706a87b250cd4797f5bf599698c5c7a/o/p/ops23e11.jpg',
    price: '₹228,000',
    type: 'Ruby',
  },
];

const Dashboard = () => {
  return (
    <div className="tq-dashboard-page">
      <header className="tq-header">
        <div className="tq-navbar-container">
          <div className="tq-logo">
            <img 
              src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/jewellery-template-design-4fa9d02353a9ec2ea3160b8a7d7428e4_screen.jpg?ts=1685212283" 
              alt="Shine Sales Logo" 
              className="tq-logo-img" 
            />
            <span className="tq-logo-text">Shine Sales</span>
          </div>
          <nav className="tq-navbar">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </nav>
        </div>
      </header>

      <section className="tq-hero-section tq-dashboard-hero">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
          alt="Nepali girl wearing gold and diamond jewellery"
          className="tq-hero-img"
        />
        <div className="tq-hero-overlay tq-dashboard-hero-overlay">
          <h1 className="tq-hero-title">Welcome to Shine Sales</h1>
          <p className="tq-hero-subtitle">Luxury Jewellery for Every Occasion</p>
          <div className="tq-hero-actions">
            <Link to="/products" className="tq-btn tq-btn-primary">Shop Now</Link>
            <Link to="/offers" className="tq-btn tq-btn-outline">View Offers</Link>
          </div>
          <div className="tq-hero-jewellery-row">
            <img src="https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=400&q=80" alt="Diamond" className="tq-hero-jewellery-img" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoIScxbfwhBfsAk1sAyf5JAGacjNO586kgAA&s" alt="Gold Necklace" className="tq-hero-jewellery-img" />
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Nepali girl wearing jewellery and sari" className="tq-hero-jewellery-img" />
            <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" alt="Ruby" className="tq-hero-jewellery-img" />
          </div>
        </div>
      </section>

      <section className="tq-featured-section tq-dashboard-featured">
        <h2 className="tq-section-title">Featured Jewellery</h2>
        <div className="tq-featured-grid">
          {featuredProducts.map((item, idx) => (
            <div className="tq-product-card" key={item.name+idx}>
              <img src={item.img} alt={item.name} className="tq-product-img" />
              <div className="tq-product-info">
                <h4>{item.name}</h4>
                <p className="tq-product-price">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="tq-dashboard-content">
        <div className="tq-cards">
          <div className="tq-card">
            <img src={salesIcon} alt="Sales" className="tq-card-icon" />
            <h3>Total Sales</h3>
            <p>₹111,20,000</p>
          </div>
          <div className="tq-card">
            <img src={ordersIcon} alt="Orders" className="tq-card-icon" />
            <h3>Total Orders</h3>
            <p>150</p>
          </div>
          <div className="tq-card">
            <img src={customersIcon} alt="Customers" className="tq-card-icon" />
            <h3>Total Customers</h3>
            <p>89</p>
          </div>
        </div>

        <h2 className="tq-section-title">Latest Orders</h2>
        <table className="tq-orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#1001</td>
              <td>
                <img src={userAvatars['Sita Shrestha']} alt="Sita Shrestha" className="tq-user-avatar" /> Sita Shrestha
              </td>
              <td>₹155,000</td>
              <td>Delivered</td>
            </tr>
            <tr>
              <td>#1002</td>
              <td>
                <img src={userAvatars['Maya Gurung']} alt="Maya Gurung" className="tq-user-avatar" /> Maya Gurung
              </td>
              <td>₹320,500</td>
              <td>Processing</td>
            </tr>
            <tr>
              <td>#1003</td>
              <td>
                <img src={userAvatars['Anju Lama']} alt="Anju Lama" className="tq-user-avatar" /> Anju Lama
              </td>
              <td>₹327,800</td>
              <td>Cancelled</td>
            </tr>
          </tbody>
        </table>

        <div className="tq-dashboard-actions-row">
          <Link to="/users">
            <button className="tq-dashboard-button">Manage Users</button>
          </Link>
          <Link to="/">
            <button className="tq-dashboard-button">Home</button>
          </Link>
          <Link to="/login">
            <button className="tq-dashboard-button">Login</button>
          </Link>
          <Link to="/register">
            <button className="tq-dashboard-button">Register</button>
          </Link>
        </div>
      </section>

      <footer className="tq-footer">
        <div className="tq-footer-content">
          <span>© {new Date().getFullYear()} Shine Sales. All rights reserved.</span>
          <span>Contact: info@shinesales.com | +91-9876543210</span>
          <span className="tq-footer-socials">
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Instagram" className="tq-footer-icon" /></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Facebook" className="tq-footer-icon" /></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="Twitter" className="tq-footer-icon" /></a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
