import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Clock, Truck, Star, TrendingUp, User, Heart, Gift, Percent, Zap } from 'lucide-react';

const BuyerHome = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#C6A27E] via-white to-[#C6A27E]/20">
      {/* Vibrant Welcome Hero Section */}
      <section className="bg-gradient-to-r from-[#FAF8F6] via-[#FDFCF9] to-[#FAF8F6] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[#C6A27E] opacity-5" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, #C6A27E 1px, transparent 0)', backgroundSize: '20px 20px'}}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-[#3E2C28] mb-6">
                Welcome to{' '}
                <span className="text-[#C6A27E]">ShineSales</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Discover timeless elegance in every piece. From exquisite rings to stunning necklaces, 
                find the perfect jewellery that tells your story.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link
                  to="/products"
                  className="bg-gradient-to-r from-[#C6A27E] to-[#B89D79] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
                >
                  <ShoppingCart className="h-6 w-6" />
                  <span>Start Shopping</span>
                </Link>
                <Link
                  to="/orders"  
                  className="bg-white border-2 border-[#C6A27E] text-[#3E2C28] px-8 py-4 rounded-xl text-lg font-semibold hover:bg-[#F9F3EF] hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
                >
                  <Clock className="h-6 w-6" />
                  <span>My Orders</span>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=600&fit=crop&crop=center"
                  alt="Luxury jewellery collection"
                  className="rounded-3xl shadow-2xl w-full h-96 object-cover border-4 border-white"
                />
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#C6A27E] to-[#B89D79] text-white p-4 rounded-2xl shadow-xl animate-bounce">
                  <Percent className="h-6 w-6" />
                  <p className="text-xs font-bold mt-1">25% OFF</p>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-[#C6A27E]">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-[#C6A27E] to-[#F9F3EF] p-3 rounded-full">
                      <Truck className="h-6 w-6 text-[#3E2C28]" />
                    </div>
                    <div>
                      <p className="font-bold text-[#3E2C28]">Free Delivery</p>
                      <p className="text-gray-600 text-sm">Orders over $200</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Background decoration */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#C6A27E]/30 to-[#F9F3EF]/30 rounded-3xl -z-10 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#3E2C28] mb-4">Quick Actions ✨</h2>
            <p className="text-gray-600">Everything you need, just a click away!</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              to="/cart"
              className="group bg-gradient-to-br from-[#C6A27E] to-[#B89D79] p-6 rounded-2xl text-white hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <ShoppingCart className="h-10 w-10 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold mb-2">My Cart 💎</h3>
              <p className="text-[#F9F3EF]">View items in cart</p>
            </Link>

            <Link
              to="/orders"
              className="group bg-gradient-to-br from-[#D8C3A5] to-[#C6A27E] p-6 rounded-2xl text-white hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <Clock className="h-10 w-10 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold mb-2">Order History 📦</h3>
              <p className="text-[#F9F3EF]">Track your orders</p>
            </Link>

            <Link
              to="/profile"
              className="group bg-gradient-to-br from-[#EAE1D9] to-[#D8C3A5] p-6 rounded-2xl text-[#3E2C28] hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <User className="h-10 w-10 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold mb-2">My Profile 👤</h3>
              <p className="text-gray-600">Update your info</p>
            </Link>

            <Link
              to="/wishlist"
              className="group bg-gradient-to-br from-[#F9F3EF] to-[#EAE1D9] p-6 rounded-2xl text-[#3E2C28] hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <Heart className="h-10 w-10 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold mb-2">Wishlist ❤️</h3>
              <p className="text-gray-600">Saved favorites</p>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default BuyerHome;
