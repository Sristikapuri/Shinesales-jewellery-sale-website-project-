import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, Check, Phone, MapPin, Calendar } from 'lucide-react';
import { AuthContext } from '../contexts/AuthContext.jsx';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    date_of_birth: ''
  });

  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

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
      console.log('Sending registration data:', formData);
      const result = await register(formData);
      if (result.success) {
        alert('Registration successful!');
        const token = localStorage.getItem('token');
        if (token) {
          const response = await fetch('http://localhost:8080/api/auth/profile', {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
          });
          if (response.ok) {
            const data = await response.json();
            const userRole = data.user.role;
            if (userRole === 'admin') {
              navigate('/admin/dashboard');
            } else {
              navigate('/buyer/home');
            }
          } else {
            navigate('/home');
          }
        }
      } else {
        alert(result.error || 'Registration failed');
      }
    } catch (error) {
      console.log("test");
      // console.error('Registration error:', error);
      // alert('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Side - Jewelry-themed Image */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=1200&fit=crop&crop=center')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[rgba(212,175,55,0.85)] to-[rgba(192,192,192,0.7)]"></div>
          <div className="relative z-10 flex flex-col justify-center items-start p-12 text-white h-full">
            <div className="max-w-md">
              <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
                Join <span className="block text-[#d4af37]">ShineSales</span>
              </h1>
              <p className="text-xl text-gray-100 mb-8 drop-shadow-md">
                Discover brilliance in every piece. Luxury redefined.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-[#d4af37] rounded-full shadow-md"></div>
                  <span className="text-gray-200 font-semibold">Artisan-crafted elegance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-[#d4af37] rounded-full shadow-md"></div>
                  <span className="text-gray-200 font-semibold">Lifetime warranty included</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-[#d4af37] rounded-full shadow-md"></div>
                  <span className="text-gray-200 font-semibold">100% real gold & silver</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Register Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gradient-to-br from-[#f0f0f0] to-[#fafafa] min-h-screen">
        <div className="max-w-md w-full py-8">
          <div className="bg-white rounded-3xl shadow-lg p-10 border border-[#d4af37]">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold text-[#b8860b] mb-3 tracking-wide">Create Account</h2>
              <p className="text-gray-700 text-lg">Join us and shine brighter every day</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[#b8860b] mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#d4af37] shadow-sm"
                    placeholder="Your name"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#b8860b] mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#d4af37] shadow-sm"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-[#b8860b] mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#d4af37] shadow-sm"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#d4af37]"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-[#b8860b] mb-2">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#d4af37] shadow-sm"
                    placeholder="+1 (555) 123-4567"
                    required
                  />
                </div>
              </div>

              {/* Address */}
              <div>
                <label htmlFor="address" className="block text-sm font-semibold text-[#b8860b] mb-2">Address</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#d4af37] shadow-sm"
                    placeholder="123 Main St, City, State"
                    required
                  />
                </div>
              </div>

              {/* Date of Birth */}
              <div>
                <label htmlFor="dateOfBirth" className="block text-sm font-semibold text-[#b8860b] mb-2">Date of Birth</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="date"
                    id="dateOfBirth"
                    name="date_of_birth"
                    value={formData.date_of_birth}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#d4af37] shadow-sm"
                    required
                  />
                </div>
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-white py-3 rounded-xl font-bold transition duration-300 shadow-lg hover:from-[#b8860b] hover:to-[#d4af37] disabled:opacity-60 disabled:cursor-not-allowed flex justify-center items-center space-x-2"
              >
                <span>{loading ? 'Creating Account...' : 'Create Account'}</span>
                {!loading && <ArrowRight className="h-5 w-5" />}
              </button>
            </form>

            {/* Link */}
            <div className="text-center mt-8">
              <p className="text-gray-700 text-sm">
                Already have an account?{' '}
                <Link to="/login" className="text-[#d4af37] hover:text-[#b8860b] font-semibold transition-colors">
                  Sign in here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
