import React from "react";
import { Star, ShoppingCart, Heart, Gem, Award } from "lucide-react";

const featuredProducts = [
  {
    id: 1,
    name: "Elegant Gold Necklace",
    price: 249.99,
    originalPrice: 299.99,
    rating: 4.9,
    reviews: 254,
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop&crop=center",
    badge: "Gold",
    discount: "17% OFF",
    icon: <Gem className="h-5 w-5 text-yellow-500" />,
  },
  {
    id: 2,
    name: "Diamond Stud Earrings",
    price: 399.99,
    originalPrice: 449.99,
    rating: 5.0,
    reviews: 189,
    image:
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=300&h=300&fit=crop&crop=center",
    badge: "Diamond",
    discount: "11% OFF",
    icon: <Gem className="h-5 w-5 text-blue-400" />,
  },
  {
    id: 3,
    name: "Gold Wedding Ring",
    price: 129.99,
    originalPrice: null,
    rating: 4.8,
    reviews: 320,
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=300&h=300&fit=crop&crop=center",
    badge: "Wedding",
    discount: null,
    icon: <Award className="h-5 w-5 text-yellow-600" />,
  },
  
];

const ProductsShowcase = () => {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#3E2C28] mb-4">
            Featured Jewelry
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our top-rated jewelry pieces loved by thousands of
            customers. Elegant, timeless, and crafted with care.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Product Image & Badge */}
              <div className="relative bg-[#F9F5F1] h-48 overflow-hidden flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Badge */}
                <div className="absolute top-4 left-4 bg-[#C6A27E] text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                  {product.icon}
                  <span>{product.badge}</span>
                </div>

                {/* Discount Badge */}
                {product.discount && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {product.discount}
                  </div>
                )}

                {/* Wishlist Button */}
                <button className="absolute bottom-4 right-4 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100">
                  <Heart className="h-5 w-5 text-gray-400 hover:text-red-500 transition-colors" />
                </button>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#3E2C28] mb-2">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-[#3E2C28]">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-400 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button className="w-full bg-[#C6A27E] text-white hover:bg-[#3E2C28] py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 group">
                  <ShoppingCart className="h-5 w-5" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products */}
        <div className="text-center mt-12">
          <button className="border-2 border-[#C6A27E] text-[#3E2C28] hover:bg-[#C6A27E] hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;
