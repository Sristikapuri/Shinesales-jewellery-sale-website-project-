import React, { useState } from 'react';
import { Mail, Gift, Percent, Bell } from 'lucide-react';

/**
 * Newsletter Component
 * Updated: 2025-07-29
 * Theme: Golden & Silver Jewelry - fresh, elegant, and inviting
 */
const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
    // Add your newsletter API call here
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#D4AF37] to-[#F7F1E1] rounded-3xl p-8 md:p-16 relative overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=800&fit=crop&crop=center')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>

          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full"></div>
            <div className="absolute top-20 right-20 w-32 h-32 bg-white rounded-full"></div>
            <div className="absolute bottom-10 left-20 w-16 h-16 bg-white rounded-full"></div>
            <div className="absolute bottom-20 right-10 w-24 h-24 bg-white rounded-full"></div>
          </div>

          <div className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-5xl font-bold text-[#4B3B00]">
                    Stay Elegant with Our Newsletter
                  </h2>
                  <p className="text-lg text-[#5B4A00] leading-relaxed">
                    Get the latest updates on new collections, exclusive offers, and seasonal highlights. 
                    Plus, enjoy 10% off your first order when you subscribe!
                  </p>
                </div>

                {/* Benefits */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Percent className="h-6 w-6 text-[#4B3B00]" />
                    <span className="text-[#5B4A00]">Exclusive discounts and early access to sales</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Bell className="h-6 w-6 text-[#4B3B00]" />
                    <span className="text-[#5B4A00]">New collection announcements and styling tips</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Gift className="h-6 w-6 text-[#4B3B00]" />
                    <span className="text-[#5B4A00]">Special birthday gifts and loyalty rewards</span>
                  </div>
                </div>
              </div>

              {/* Right Content - Newsletter Form */}
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <div className="text-center mb-6">
                  <div className="bg-[#F7E8B5] rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                    <Mail className="h-10 w-10 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#4B3B00] mb-2">
                    Subscribe Now
                  </h3>
                  <p className="text-gray-600">
                    Join 10,000+ jewelry lovers and get 10% off your first order!
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#D4AF37] text-[#4B3B00] hover:bg-[#4B3B00] hover:text-[#D4AF37] py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    Subscribe & Save 10%
                  </button>
                </form>

                <p className="text-xs text-gray-500 text-center mt-4">
                  By subscribing, you agree to our Privacy Policy and Terms of Service. 
                  Unsubscribe anytime.
                </p>

                {/* Special Offer Badge */}
                <div className="text-center mt-6">
                  <span className="inline-flex items-center bg-[#D4AF37] text-[#4B3B00] px-4 py-2 rounded-full text-sm font-medium">
                    <Gift className="h-4 w-4 mr-2" />
                    Limited Time: 10% OFF First Order
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
