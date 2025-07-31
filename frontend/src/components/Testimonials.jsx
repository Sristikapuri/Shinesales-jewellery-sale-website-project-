import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sophia Mehta",
      role: "Bride-to-Be",
      rating: 5,
      text: "ShineSales crafted a necklace that made me feel like royalty on my big day. The sparkle, the detailing — absolutely breathtaking!",
      avatar: "https://images.unsplash.com/photo-1614285368513-0c89e0a5b3b9?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Naina Kapoor",
      role: "Jewellery Designer",
      rating: 5,
      text: "As a designer, I admire ShineSales' craftsmanship. Their gold and diamond sets reflect pure elegance and precision.",
      avatar: "https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Riya Sharma",
      role: "Event Stylist",
      rating: 5,
      text: "I recommend ShineSales to all my brides. Their silver bridal sets and diamond earrings are always show-stoppers.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "Tanvi Joshi",
      role: "Jewellery Enthusiast",
      rating: 5,
      text: "I’ve purchased from ShineSales multiple times. Their unique pieces and lifetime shine guarantee keep me coming back!",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "Devika Nair",
      role: "Fashion Blogger",
      rating: 5,
      text: "The intricate gold bangles and statement silver chokers from ShineSales complete every look I curate!",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 6,
      name: "Anjali Verma",
      role: "Luxury Buyer",
      rating: 5,
      text: "Exquisite. That’s the only word for ShineSales. Perfect for gifting and personal indulgence.",
      avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#FFF8F1] to-[#FAF3E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#A67C52] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from those who sparkle with ShineSales — your trusted source for elegant gold and silver jewellery.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-6">
                <div className="bg-[#D6C7B0] rounded-full p-3">
                  <Quote className="h-6 w-6 text-[#7B5E3B]" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4 pt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-[#A67C52]">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-[#EDE1D1]">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#A67C52] mb-2">12K+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#A67C52] mb-2">100K+</div>
            <div className="text-gray-600">Jewels Sold</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#A67C52] mb-2">4.9</div>
            <div className="text-gray-600">Avg. Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#A67C52] mb-2">500+</div>
            <div className="text-gray-600">Bridal Sets Delivered</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
