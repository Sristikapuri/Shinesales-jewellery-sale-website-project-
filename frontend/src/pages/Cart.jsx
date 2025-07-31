import React from 'react';
import { useCart } from '../hooks/useCart';
import { Link } from 'react-router-dom';
import { ShoppingCart, Minus, Plus, Trash2 } from 'lucide-react';

const Cart = () => {
  const { items, updateQuantity, removeFromCart, getCartTotal, getCartCount } = useCart();

  const totalPrice = getCartTotal();
  const itemCount = getCartCount();

  if (items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <ShoppingCart className="h-24 w-24 text-[#b8860b] mx-auto mb-6" />
        <h2 className="text-3xl font-bold text-[#b8860b] mb-4">Your cart is empty</h2>
        <p className="text-gray-600 mb-6">Browse our store and add some fresh picks!</p>
        <Link
          to="/products"
          className="inline-block bg-gradient-to-r from-[#b8860b] to-[#b8860b] text-white px-8 py-3 rounded-xl text-lg font-semibold hover:scale-105 transition-transform"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-[#0A400C] mb-8">🛒 Your Shopping Cart</h1>

      <div className="bg-white rounded-3xl shadow-xl p-6 space-y-6 border-2 border-[#B0DB9C]">
        {items.map((item) => (
          <div key={item.id} className="flex flex-col sm:flex-row items-center justify-between border-b border-gray-200 pb-6 gap-6">
            <div className="flex items-center gap-4 w-full sm:w-1/2">
              <div className="w-20 h-20 rounded-xl bg-[#ECFAE5] overflow-hidden border border-[#B0DB9C]">
                <img
                  src={item.image_urls?.[0] || '/placeholder-product.jpg'}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#0A400C]">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.unit}</p>
                <p className="text-green-700 font-bold mt-1">${parseFloat(item.price || 0).toFixed(2)}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="p-2 border rounded-full text-[#0A400C] border-[#B0DB9C] hover:bg-[#ECFAE5] transition"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-10 text-center font-bold text-[#0A400C]">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="p-2 border rounded-full text-[#0A400C] border-[#B0DB9C] hover:bg-[#ECFAE5] transition"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>

            <div className="text-right">
              <p className="text-lg font-semibold text-[#0A400C]">
                ${(parseFloat(item.price || 0) * item.quantity).toFixed(2)}
              </p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="mt-2 text-red-500 hover:text-red-700"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}

        {/* Cart Summary */}
        <div className="pt-6 border-t border-gray-200">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-[#0A400C]">
              Total ({itemCount} items)
            </h2>
            <span className="text-3xl font-extrabold text-[#0A400C]">
              ${totalPrice.toFixed(2)}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/products"
              className="flex-1 bg-white border-2 border-[#B0DB9C] text-[#0A400C] px-6 py-3 rounded-xl font-semibold text-center hover:bg-[#ECFAE5] transition-all"
            >
              ⬅️ Continue Shopping
            </Link>
            <Link
              to="/checkout"
              className="flex-1 bg-gradient-to-r from-[#0A400C] to-[#2D5A2F] text-white px-6 py-3 rounded-xl font-semibold text-center hover:scale-105 transition-transform"
            >
              🚚 Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
