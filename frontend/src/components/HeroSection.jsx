import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles, Gem } from 'lucide-react';

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative py-20 bg-gradient-to-br from-[#E6D8B7] to-[#F9F7F2] overflow-hidden"
    >
      {/* Background subtle golden silver gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-tr from-[#C6A27E] via-[#D8CFC4] to-[#B0A597] opacity-20"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gradient bg-gradient-to-r from-[#C6A27E] via-[#D7C9B9] to-[#A59F8A] bg-clip-text text-transparent leading-tight">
                Timeless Elegance,
                <span className="text-[#B7A68B]"> Handcrafted</span>
                <br />
                Just for You
              </h1>
              <p className="text-lg md:text-xl text-[#7E7661] leading-relaxed">
                Discover exclusive collections of fine jewelry designed to shine through generations.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-[#C6A27E] to-[#E0D4A4] text-[#3E2C28] hover:from-[#A88E5A] hover:to-[#C3B678] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center group shadow-md">
                Browse Collection
                <ArrowRight className="ml-2 h-5 w-5 text-[#5C4A22] group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-[#C6A27E] text-[#5C4A22] hover:bg-gradient-to-r hover:from-[#C6A27E] hover:to-[#E0D4A4] hover:text-[#3E2C28] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-md">
                Learn More
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="bg-white rounded-full p-3 w-16 h-16 mx-auto mb-3 flex items-center justify-center shadow-lg">
                  <ShieldCheck className="h-8 w-8 text-[#B7A77A]" />
                </div>
                <p className="text-sm text-[#7E7661]">Certified Quality</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full p-3 w-16 h-16 mx-auto mb-3 flex items-center justify-center shadow-lg">
                  <Sparkles className="h-8 w-8 text-[#B7A77A]" />
                </div>
                <p className="text-sm text-[#7E7661]">Brilliant Designs</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full p-3 w-16 h-16 mx-auto mb-3 flex items-center justify-center shadow-lg">
                  <Gem className="h-8 w-8 text-[#B7A77A]" />
                </div>
                <p className="text-sm text-[#7E7661]">Premium Materials</p>
              </div>
            </div>
          </div>
{/* Right Content - Hero Image */}
<div className="relative">
  <div className="bg-gradient-to-br from-[#F7EBDD] to-white rounded-3xl p-8 shadow-2xl">
    <div className="bg-white rounded-2xl p-6 shadow-lg overflow-hidden">
      <div className="aspect-square rounded-xl overflow-hidden">
        <img 
          src="https://plus.unsplash.com/premium_photo-1681276170281-cf50a487a1b7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Diamond jewelry" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-center mt-4 space-y-2">
        <h3 className="text-2xl font-bold text-[#3E2C28]">Elegant Jewelry</h3>
        <p className="text-gray-600">Crafted for every special moment</p>
      </div>
    </div>

    {/* Floating accents */}
    <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
      <div className="w-8 h-8 bg-[#C6A27E] rounded-full"></div>
    </div>
    <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 shadow-lg">
      <div className="w-8 h-8 bg-[#C6A27E] rounded-full"></div>
    </div>
  </div>
</div>




        </div>
      </div>
    </section>
  );
};

export default HeroSection;
