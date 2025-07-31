import React from 'react';
import { ArrowRight } from 'lucide-react';

const CategoriesGrid = () => {
  const categories = [
    {
      name: "Rings",
      description: "Diamond, gold & engagement rings",
      items: "120+ styles",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=300&fit=crop&crop=center",
      color: "from-[#FDEDE4] to-[#FFF7F0]"
    },
    {
      name: "Necklaces",
      description: "Elegant chains & pendants",
      items: "90+ styles",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=300&fit=crop&crop=center",
      color: "from-[#FDF6F0] to-[#FCEDE6]"
    },
    {
      name: "Earrings",
      description: "Studs, hoops & drops",
      items: "150+ styles",
      image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&h=300&fit=crop&crop=center",
      color: "from-[#FFF5EC] to-[#FCEFE4]"
    },
    {
      name: "Bracelets",
      description: "Gold, silver & beaded styles",
      items: "60+ styles",
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=300&fit=crop&crop=center",
      color: "from-[#FBF2EE] to-[#FFF8F3]"
    },
    {
      name: "Bridal Sets",
      description: "Complete wedding collections",
      items: "25+ sets",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=300&fit=crop&crop=center",
      color: "from-[#F3E8E2] to-[#FFF5F1]"
    },
    {
      name: "Anklets",
      description: "Delicate gold & silver anklets",
      items: "35+ styles",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=300&fit=crop&crop=center",
      color: "from-[#FAF2EB] to-[#FFF9F5]"
    }
  ];

  return (
    <section id="categories" className="py-20 bg-[#FAF8F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#3E2C28] mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover timeless elegance in every category. From rings to bridal sets, explore exquisite craftsmanship made just for you.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
            >
              {/* Image Banner */}
              <div className={`bg-gradient-to-br ${category.color} h-32 relative overflow-hidden`}>
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-[#3E2C28] group-hover:text-[#C6A27E] transition-colors">
                    {category.name}
                  </h3>
                  <span className="text-sm text-gray-500 bg-[#F9F3EF] px-2 py-1 rounded-full">
                    {category.items}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <button className="flex items-center text-[#C6A27E] hover:text-[#3E2C28] font-medium transition-colors group-hover:translate-x-2 transition-transform duration-300">
                  Shop Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="border-2 border-[#C6A27E] text-[#3E2C28] hover:bg-[#C6A27E] hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200">
            View All Categories
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategoriesGrid;
