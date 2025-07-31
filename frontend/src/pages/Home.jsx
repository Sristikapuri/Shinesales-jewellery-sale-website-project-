import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { categoriesAPI, productsAPI } from '../services/api';
import { ShoppingCart, Star, Truck, Shield, Clock, ArrowRight, Leaf } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import toast from 'react-hot-toast';

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      const [catRes, prodRes] = await Promise.all([
        categoriesAPI.getAll(),
        productsAPI.getAll({ limit: 8, featured: true }),
      ]);
      setCategories(catRes.data.categories || []);
      setFeaturedProducts(prodRes.data.products || []);
    } catch {
      toast.error('Failed to load data');
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = async (product) => {
    try {
      await addToCart(product, 1);
      toast.success(`${product.name} added to cart!`);
    } catch {
      toast.error('Failed to add item to cart');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-[#f5f5f5]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#d4af37]" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f0f0] to-[#fafafa]">

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581291519195-ef11498d1cf9?auto=format&fit=crop&w=1740&q=80')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(212,175,55,0.85)] to-[rgba(192,192,192,0.85)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-5xl font-extrabold text-white drop-shadow-lg mb-6">
              Discover the<br />
              <span className="text-[#d4af37]">Radiance of Elegance</span>
            </h1>
            <div className="flex gap-4">
              <Link to="/products" className="bg-[#d4af37] px-8 py-3 rounded-lg text-white font-semibold hover:bg-[#b8860b] transition-colors inline-flex items-center">
                Shop Jewelry
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/products?category=featured" className="border-2 border-[#d4af37] px-8 py-3 rounded-lg text-[#d4af37] font-semibold hover:bg-[#d4af37] hover:text-white transition inline-flex items-center">
                Featured Collection
              </Link>
            </div>
          </div>
          <div className="hidden lg:block text-right">
            <img
              src="https://images.unsplash.com/photo-1600185360501-14a9c7a8dafe?auto=format&fit=crop&w=600&q=80"
              alt="Jewelry display"
              className="w-full max-w-lg rounded-xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#6e6e6e] text-center mb-6">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.slice(0, 6).map((category) => (
              <Link key={category.id} to={`/products?category=${category.id}`} className="group text-center">
                <div className="bg-[#fafafa] rounded-full w-20 h-20 mx-auto mb-2 flex items-center justify-center group-hover:bg-[#e0e0e0] transition">
                  <img src={category.image || '/'} alt={category.name} className="w-12 h-12 object-contain" />
                </div>
                <span className="text-[#6e6e6e] group-hover:text-[#d4af37] transition">{category.name}</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link to="/products" className="text-[#6e6e6e] hover:text-[#d4af37] font-semibold transition inline-flex items-center">
              View All Categories
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#6e6e6e] text-center mb-6">Featured Jewelry</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition">
                <Link to={`/products/${product.id}`}>
                  <img src={product.image || '/'} alt={product.name} className="h-48 w-full object-cover rounded-t-xl" />
                </Link>
                <div className="p-4">
                  <Link to={`/products/${product.id}`} className="text-[#6e6e6e] hover:text-[#d4af37] font-semibold">
                    {product.name}
                  </Link>
                  <div className="mt-2 flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < Math.floor(product.rating || 0) ? 'text-[#d4af37]' : 'text-[#c0c0c0]'}`}
                      />
                    ))}
                    <span className="text-[#a9a9a9] text-sm ml-2">({product.reviewCount || 0})</span>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-lg font-bold text-[#6e6e6e]">${product.price?.toFixed(2)}</span>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="bg-[#d4af37] text-white p-2 rounded-lg hover:bg-[#b8860b]"
                      aria-label={`Add ${product.name} to cart`}
                    >
                      <ShoppingCart className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/products" className="bg-[#d4af37] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#b8860b] inline-flex items-center">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Highlights Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#6e6e6e] mb-4">Why Choose ShineSales?</h2>
          <p className="text-[#8c8c8c] mb-8">Excellence in every detail — timeless, trusted, and tailored to shine.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Truck, title: 'Fast Delivery', desc: 'Secure shipping of your precious pieces.' },
              { icon: Leaf, title: 'Sustainably Sourced', desc: 'Ethically-certified gemstones & metals.' },
              { icon: Shield, title: 'Quality Guarantee', desc: 'Lifetime support on every piece.' },
              { icon: Clock, title: '24/7 Support', desc: 'We’re always here when you need help.' },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#f5f5f5] w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-3">
                  <feature.icon className="h-8 w-8 text-[#6e6e6e]" />
                </div>
                <h3 className="text-lg font-semibold text-[#6e6e6e] mb-2">{feature.title}</h3>
                <p className="text-[#8c8c8c]">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-[#d4af37] text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Discover Your Shine?</h2>
          <p className="text-xl text-[#f0e9de] mb-6">Find your perfect jewel today.</p>
          <Link
            to="/register"
            className="bg-white text-[#d4af37] px-8 py-3 rounded-lg font-semibold hover:bg-[#f0e9de] transition inline-flex items-center"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
