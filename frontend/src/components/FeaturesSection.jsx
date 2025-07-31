import React from "react";

const jewelleryIcons = [
  "https://images.unsplash.com/photo-1600180758890-d8f36fca5f65?auto=format&fit=crop&w=64&q=80",
  "https://images.unsplash.com/photo-1520975690793-51f5f6d5472a?auto=format&fit=crop&w=64&q=80",
  "https://images.unsplash.com/photo-1556228724-9d8e243ee3e8?auto=format&fit=crop&w=64&q=80",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=64&q=80",
  "https://images.unsplash.com/photo-1500336624523-d727130c3328?auto=format&fit=crop&w=64&q=80",
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=64&q=80"
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
                  />
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
