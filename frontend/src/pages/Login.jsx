import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, ArrowRight } from 'lucide-react';
import { AuthContext } from '../contexts/AuthContext.jsx';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  if (!authContext) {
    console.error('AuthContext is undefined in Login component');
    return <div>Error: AuthContext not available</div>;
  }

  const { login } = authContext;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await login(formData.email, formData.password);

      if (result.success) {
        if (result.user?.role === 'admin') {
          navigate('/admin/dashboard');
        } else {
          navigate('/buyer/home');
        }
      } else {
        alert(result.error || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Side - Image */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=1200&fit=crop&crop=center')`
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[rgba(212,175,55,0.85)] to-[rgba(192,192,192,0.7)]"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-center items-start p-12 text-white h-full">
            <div className="max-w-md">
              <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
                Welcome Back to
                <span className="block text-[#d4af37]">ShineSales</span>
              </h1>
              <p className="text-xl text-gray-100 mb-8 drop-shadow-md">
                Where Elegance Meets Eternity.
              </p>
{/* Features */}
<div className="space-y-4">
  <div className="flex items-center space-x-3">
    <div className="w-3 h-3 bg-[#d4af37] rounded-full shadow-md"></div>
    <span className="text-gray-200 font-semibold">Exquisite craftsmanship in every piece</span>
  </div>
  <div className="flex items-center space-x-3">
    <div className="w-3 h-3 bg-[#d4af37] rounded-full shadow-md"></div>
    <span className="text-gray-200 font-semibold">Certified genuine gemstones</span>
  </div>
  <div className="flex items-center space-x-3">
    <div className="w-3 h-3 bg-[#d4af37] rounded-full shadow-md"></div>
    <span className="text-gray-200 font-semibold">Lifetime warranty on all jewelry</span>
  </div>
</div>

            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-12 bg-gradient-to-br from-[#c0c0c0] to-[#f9f9f9] min-h-[calc(100vh-64px-100px)]">
        <div className="max-w-md w-full">
          {/* Login Form */}
          <div className="bg-white rounded-3xl shadow-lg p-10 border border-[#d4af37]">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold text-[#b8860b] mb-3 tracking-wide">Sign In</h2>
              <p className="text-gray-700 text-lg">Welcome back! Please sign in to your account</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#b8860b] mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#a9a9a9] h-6 w-6" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-14 pr-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition duration-300 shadow-sm"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-[#b8860b] mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#a9a9a9] h-6 w-6" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full pl-14 pr-14 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent transition duration-300 shadow-sm"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#a9a9a9] hover:text-[#d4af37] transition-colors duration-300"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="h-6 w-6" /> : <Eye className="h-6 w-6" />}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center text-gray-700 font-medium">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-[#d4af37] focus:ring-[#d4af37]"
                  />
                  <span className="ml-3 text-sm">Remember me</span>
                </label>
                <Link
                  to="/forgot-password"
                  className="text-sm text-[#b8860b] hover:text-[#d4af37] font-semibold transition-colors"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-white py-4 rounded-xl font-bold transition duration-300 shadow-lg hover:from-[#b8860b] hover:to-[#d4af37] disabled:opacity-60 disabled:cursor-not-allowed flex justify-center items-center space-x-3"
              >
                <span>{loading ? 'Signing In...' : 'Sign In'}</span>
                {!loading && <ArrowRight className="h-6 w-6" />}
              </button>
            </form>

            {/* Sign Up Link */}
            <div className="text-center mt-10">
              <p className="text-gray-700">
                Don&apos;t have an account?{' '}
                <Link to="/register" className="text-[#d4af37] hover:text-[#b8860b] font-semibold transition-colors">
                  Sign up here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
