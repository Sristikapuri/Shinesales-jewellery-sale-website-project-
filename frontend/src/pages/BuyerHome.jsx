import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Clock, Truck, Star, TrendingUp, User, Heart, Gift, Percent, Zap } from 'lucide-react';

const BuyerHome = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#b8860b] via-white to-[#b8860b]/20">
      {/* Vibrant Welcome Hero Section */}
      <section className="bg-gradient-to-r from-[#eeeeee] via-[#eeeeee] to-[#eeeeee] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[#b8860b] opacity-5" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, #b8860b 1px, transparent 0)', backgroundSize: '20px 20px'}}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
             

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link
                  to="/products"
                  className="bg-gradient-to-r from-[#b8860b] to-[#b8860b] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
                >
                  <ShoppingCart className="h-6 w-6" />
                  <span>Start Shopping</span>
                </Link>
                <Link
                  to="/orders"  
                  className="bg-white border-2 border-[#b8860b] text-[#b8860b] px-8 py-4 rounded-xl text-lg font-semibold hover:bg-[#f4dda3] hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
                >
                  <Clock className="h-6 w-6" />
                  <span>My Orders</span>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1659095141570-be8b9aff59ce?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Fresh groceries"
                  className="rounded-3xl shadow-2xl w-full h-96 object-cover border-4 border-white"
                />
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-400 to-orange-500 text-white p-4 rounded-2xl shadow-xl animate-bounce">
                  <Percent className="h-6 w-6" />
                  <p className="text-xs font-bold mt-1">50% OFF</p>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-[#B0DB9C]">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-[#B0DB9C] to-[#ECFAE5] p-3 rounded-full">
                      <Truck className="h-6 w-6 text-[#0A400C]" />
                    </div>
                    <div>
                      <p className="font-bold text-[#0A400C]">Free Delivery</p>
                      <p className="text-gray-600 text-sm">Orders over $50</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Background decoration */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#B0DB9C]/30 to-[#ECFAE5]/30 rounded-3xl -z-10 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

   
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A400C] mb-4">Quick Actions 🚀</h2>
            <p className="text-gray-600">Everything you need, just a click away!</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              to="/cart"
              className="group bg-gradient-to-br from-orange-400 to-orange-500 p-6 rounded-2xl text-white hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <ShoppingCart className="h-10 w-10 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold mb-2">My Cart 🛒</h3>
              <p className="text-orange-100">View items in cart</p>
            </Link>

            <Link
              to="/orders"
              className="group bg-gradient-to-br from-blue-400 to-blue-500 p-6 rounded-2xl text-white hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <Clock className="h-10 w-10 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold mb-2">Order History 📦</h3>
              <p className="text-blue-100">Track your orders</p>
            </Link>

            <Link
              to="/profile"
              className="group bg-gradient-to-br from-purple-400 to-purple-500 p-6 rounded-2xl text-white hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <User className="h-10 w-10 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold mb-2">My Profile 👤</h3>
              <p className="text-purple-100">Update your info</p>
            </Link>

            <Link
              to="/wishlist"
              className="group bg-gradient-to-br from-pink-400 to-pink-500 p-6 rounded-2xl text-white hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <Heart className="h-10 w-10 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold mb-2">Wishlist ❤️</h3>
              <p className="text-pink-100">Saved favorites</p>
            </Link>
          </div>
        </div>
      </section>

    

    </div>
  );
};

export default BuyerHome;
