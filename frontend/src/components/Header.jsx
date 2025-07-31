import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, User, LogOut, Settings, Users, Package, BarChart3, ChevronDown } from 'lucide-react';
import { AuthContext } from '../contexts/AuthContext.jsx';
import { CartContext } from '../contexts/CartContext.jsx';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  
  const { user, isAuthenticated, isAdmin, logout } = useContext(AuthContext);
  const { getCartCount } = useContext(CartContext);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleUserDropdown = () => setIsUserDropdownOpen(!isUserDropdownOpen);

  const handleLogout = () => {
    logout();
    setIsUserDropdownOpen(false);
    setIsMenuOpen(false);
    window.location.href = '/';
  };

  const cartCount = getCartCount();

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to={isAuthenticated ? (isAdmin ? "/admin/dashboard" : "/buyer/home") : "/"}
              className="text-2xl font-extrabold tracking-tight text-gradient bg-clip-text text-transparent bg-yellow-400"
              style={{backgroundImage: 'linear-gradient(90deg, #FFD700, #B59410)'}}
            >
              Shine<span className="font-light text-yellow-600">Sales</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-10 font-semibold text-[#0A400C]">
            {isAuthenticated ? (
              isAdmin ? (
                <>
                  <Link to="/admin/dashboard" className="hover:text-yellow-400 transition duration-200">Dashboard</Link>
                  <Link to="/admin/users" className="hover:text-yellow-400 transition duration-200">Users</Link>
                  <Link to="/admin/products" className="hover:text-yellow-400 transition duration-200">Products</Link>
                  <Link to="/admin/orders" className="hover:text-yellow-400 transition duration-200">Orders</Link>
                  <Link to="/admin/reports" className="hover:text-yellow-400 transition duration-200">Reports</Link>
                </>
              ) : (
                <>
                  <Link to="/buyer/home" className="hover:text-yellow-400 transition duration-200">Home</Link>
                  <Link to="/products" className="hover:text-yellow-400 transition duration-200">Products</Link>
                  <Link to="/categories" className="hover:text-yellow-400 transition duration-200">Categories</Link>
                  <Link to="/orders" className="hover:text-yellow-400 transition duration-200">My Orders</Link>
                </>
              )
            ) : (
              <>
                <Link to="/" className="hover:text-yellow-400 transition duration-200">Home</Link>
                <a href="/#products" className="hover:text-yellow-400 transition duration-200">Products</a>
                <a href="/#categories" className="hover:text-yellow-400 transition duration-200">Categories</a>
                <a href="/#about" className="hover:text-yellow-400 transition duration-200">About</a>
                <a href="/#contact" className="hover:text-yellow-400 transition duration-200">Contact</a>
              </>
            )}
          </nav>

          {/* Right Buttons */}
          <div className="hidden md:flex items-center space-x-6">
            {isAuthenticated && !isAdmin && (
              <Link
                to="/cart"
                className="relative p-2 text-[#0A400C] hover:text-yellow-400 transition duration-200"
                aria-label="View Cart"
              >
                <ShoppingCart className="h-6 w-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-yellow-400 text-[#0A400C] text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold shadow">
                    {cartCount}
                  </span>
                )}
              </Link>
            )}

            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={toggleUserDropdown}
                  className="flex items-center space-x-1 text-[#0A400C] hover:text-yellow-400 font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                  <User className="h-5 w-5" />
                  <span className="select-none">{user?.name || 'User'}</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${isUserDropdownOpen ? 'rotate-180' : 'rotate-0'}`} />
                </button>

                {isUserDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 ring-1 ring-black ring-opacity-5">
                    {isAdmin ? (
                      <>
                        <Link to="/admin/profile" className="flex items-center px-4 py-2 text-sm text-[#0A400C] hover:bg-yellow-50">
                          <Settings className="h-4 w-4 mr-2" />
                          Admin Settings
                        </Link>
                        <Link to="/admin/users" className="flex items-center px-4 py-2 text-sm text-[#0A400C] hover:bg-yellow-50">
                          <Users className="h-4 w-4 mr-2" />
                          Manage Users
                        </Link>
                        <Link to="/admin/products" className="flex items-center px-4 py-2 text-sm text-[#0A400C] hover:bg-yellow-50">
                          <Package className="h-4 w-4 mr-2" />
                          Manage Products
                        </Link>
                        <Link to="/admin/reports" className="flex items-center px-4 py-2 text-sm text-[#0A400C] hover:bg-yellow-50">
                          <BarChart3 className="h-4 w-4 mr-2" />
                          Analytics
                        </Link>
                      </>
                    ) : (
                      <>
                        <Link to="/profile" className="flex items-center px-4 py-2 text-sm text-[#0A400C] hover:bg-yellow-50">
                          <User className="h-4 w-4 mr-2" />
                          My Profile
                        </Link>
                        <Link to="/orders" className="flex items-center px-4 py-2 text-sm text-[#0A400C] hover:bg-yellow-50">
                          <Package className="h-4 w-4 mr-2" />
                          My Orders
                        </Link>
                        <Link to="/cart" className="flex items-center px-4 py-2 text-sm text-[#0A400C] hover:bg-yellow-50">
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Cart ({cartCount})
                        </Link>
                      </>
                    )}
                    <hr className="my-1 border-yellow-200" />
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 font-semibold rounded-b-md"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="flex items-center space-x-1 text-[#0A400C] hover:text-yellow-400 font-semibold transition duration-200"
                >
                  <User className="h-5 w-5" />
                  <span>Login</span>
                </Link>
                <Link
                  to="/register"
                  className="bg-yellow-400 text-[#0A400C] hover:bg-yellow-500 hover:text-white px-6 py-2 rounded-md font-semibold transition duration-300"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-[#0A400C] hover:text-yellow-400 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded-md"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-yellow-300 shadow-md">
            <div className="px-4 pt-3 pb-5 space-y-2 font-semibold text-[#0A400C]">
              {isAuthenticated ? (
                isAdmin ? (
                  <>
                    <Link to="/admin/dashboard" className="block hover:text-yellow-400 py-2 rounded-md">
                      Dashboard
                    </Link>
                    <Link to="/admin/users" className="block hover:text-yellow-400 py-2 rounded-md">
                      Users
                    </Link>
                    <Link to="/admin/products" className="block hover:text-yellow-400 py-2 rounded-md">
                      Products
                    </Link>
                    <Link to="/admin/orders" className="block hover:text-yellow-400 py-2 rounded-md">
                      Orders
                    </Link>
                    <Link to="/admin/reports" className="block hover:text-yellow-400 py-2 rounded-md">
                      Reports
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="/buyer/home" className="block hover:text-yellow-400 py-2 rounded-md">
                      Home
                    </Link>
                    <Link to="/products" className="block hover:text-yellow-400 py-2 rounded-md">
                      Products
                    </Link>
                    <Link to="/categories" className="block hover:text-yellow-400 py-2 rounded-md">
                      Categories
                    </Link>
                    <Link to="/orders" className="block hover:text-yellow-400 py-2 rounded-md">
                      My Orders
                    </Link>
                    <Link to="/cart" className="block hover:text-yellow-400 py-2 rounded-md">
                      Cart ({cartCount})
                    </Link>
                  </>
                )
              ) : (
                <>
                  <Link to="/" className="block hover:text-yellow-400 py-2 rounded-md">Home</Link>
                  <a href="/#products" className="block hover:text-yellow-400 py-2 rounded-md">Products</a>
                  <a href="/#categories" className="block hover:text-yellow-400 py-2 rounded-md">Categories</a>
                  <a href="/#about" className="block hover:text-yellow-400 py-2 rounded-md">About</a>
                  <a href="/#contact" className="block hover:text-yellow-400 py-2 rounded-md">Contact</a>
                  <div className="flex flex-col space-y-3 mt-4">
                    <Link to="/login" className="block text-center hover:text-yellow-400 py-2 font-semibold">
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="bg-yellow-400 text-[#0A400C] hover:bg-yellow-500 hover:text-white py-2 rounded-md font-semibold text-center"
                    >
                      Register
                    </Link>
                  </div>
                </>
              )}

              {isAuthenticated && (
                <div className="border-t border-yellow-300 pt-4 mt-4">
                  <p className="text-sm font-semibold text-[#0A400C]">
                    {user?.name} {isAdmin && <span className="text-yellow-400">(Admin)</span>}
                  </p>
                  <p className="text-xs text-gray-500 mb-3">{user?.email}</p>
                  <Link to="/profile" className="block hover:text-yellow-400 py-2 rounded-md">
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left text-red-600 hover:text-red-800 py-2 rounded-md font-semibold"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
