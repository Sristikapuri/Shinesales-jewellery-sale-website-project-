import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { categoriesAPI, productsAPI } from '../services/api';
import { ShoppingCart, Star, Truck, Shield, Clock, ArrowRight, Leaf } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import toast from 'react-hot-toast';
import CategoriesGrid from '../components/CategoriesGrid';
import FeaturesSection from '../components/FeaturesSection';

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
      <div className="min-h-screen flex justify-center items-center bg-[#FAF8F6]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#C6A27E]" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF8F6] to-[#FDFCF9]">

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1740&q=80')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(198,162,126,0.85)] to-[rgba(184,157,121,0.85)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-5xl font-extrabold text-white drop-shadow-lg mb-6">
              Discover the<br />
              <span className="text-[#F9F3EF]">Radiance of Elegance</span>
            </h1>
            <div className="flex gap-4">
              <Link to="/products" className="bg-[#C6A27E] px-8 py-3 rounded-lg text-white font-semibold hover:bg-[#B89D79] transition-colors inline-flex items-center">
                Shop Jewelry
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/products?category=featured" className="border-2 border-[#C6A27E] px-8 py-3 rounded-lg text-white font-semibold hover:bg-[#C6A27E] hover:text-white transition inline-flex items-center">
                Featured Collection
              </Link>
            </div>
          </div>
          <div className="hidden lg:block text-right">
            <img
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80"
              alt="Jewelry display"
              className="w-full max-w-lg rounded-xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <CategoriesGrid />

      {/* Featured Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#3E2C28] text-center mb-6">Featured Jewelry</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition">
                <Link to={`/products/${product.id}`}>
                  <img src={product.image || '/'} alt={product.name} className="h-48 w-full object-cover rounded-t-xl" />
                </Link>
                <div className="p-4">
                  <Link to={`/products/${product.id}`} className="text-[#3E2C28] hover:text-[#C6A27E] font-semibold">
                    {product.name}
                  </Link>
                  <div className="mt-2 flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < Math.floor(product.rating || 0) ? 'text-[#C6A27E]' : 'text-[#c0c0c0]'}`}
                      />
                    ))}
                    <span className="text-[#a9a9a9] text-sm ml-2">({product.reviewCount || 0})</span>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-lg font-bold text-[#3E2C28]">${product.price?.toFixed(2)}</span>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="bg-[#C6A27E] text-white p-2 rounded-lg hover:bg-[#B89D79]"
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
            <Link to="/products" className="bg-[#C6A27E] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#B89D79] inline-flex items-center">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FeaturesSection />

      {/* Call to Action Section */}
      <section className="bg-[#C6A27E] text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Discover Your Shine?</h2>
          <p className="text-xl text-[#F9F3EF] mb-6">Find your perfect jewel today.</p>
          <Link
            to="/register"
            className="bg-white text-[#C6A27E] px-8 py-3 rounded-lg font-semibold hover:bg-[#F9F3EF] transition inline-flex items-center"
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
