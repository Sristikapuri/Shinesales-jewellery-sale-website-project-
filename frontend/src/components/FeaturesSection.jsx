import React from "react";

const jewelleryIcons = [
  "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=64&h=64&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=64&h=64&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=64&h=64&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=64&h=64&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1593720213428-28ab5c90e3cc?w=64&h=64&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1593722348332-d5c2c486ee3a?w=64&h=64&fit=crop&crop=center"
];

const features = [
  {
    title: "Genuine Gemstones",
    description:
      "Each piece is made with certified, ethically sourced diamonds, gold, and precious stones.",
  },
  {
    title: "Trusted Craftsmanship",
    description:
      "Our master artisans craft every design with precision, passion, and timeless expertise.",
  },
  {
    title: "Radiant Elegance",
    description:
      "Luxurious styles that glow with refined beauty — perfect for any special moment.",
  },
  {
    title: "Handmade With Care",
    description:
      "Our jewellery is handcrafted in small batches to ensure every piece feels personal.",
  },
  {
    title: "Loved Worldwide",
    description:
      "Thousands of happy customers trust ShineSales for life’s most meaningful gifts.",
  },
  {
    title: "Lifetime Promise",
    description:
      "We stand behind our quality — enjoy peace of mind with our lifetime warranty.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="about" className="py-20 bg-[#FDFCF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#3E2C28] mb-4">
            Why Choose ShineSales?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're not just about jewellery — we’re about helping you shine through every milestone.
            Here's why customers love and trust ShineSales.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border border-[#f0e9e0]"
            >
              <div className="mb-6">
                                                   <div className="bg-gradient-to-br from-[#D8C3A5] to-[#EAE1D9] rounded-full p-4 w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                    <img
                      src={jewelleryIcons[index]}
                      alt={`${feature.title} icon`}
                      className="w-10 h-10 object-contain"
                      loading="lazy"
                      draggable={false}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-10 h-10 flex items-center justify-center text-[#8B7355] font-bold text-lg" style={{display: 'none'}}>
                      {index === 0 && "💎"}
                      {index === 1 && "⚒️"}
                      {index === 2 && "✨"}
                      {index === 3 && "🛠️"}
                      {index === 4 && "🌍"}
                      {index === 5 && "🛡️"}
                    </div>
                  </div>
              </div>
              <h3 className="text-xl font-semibold text-[#3E2C28] mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-br from-[#D6BA8C] to-[#B89D79] text-white hover:from-[#B89D79] hover:to-[#A08361] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl">
            Explore Our Collection
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
