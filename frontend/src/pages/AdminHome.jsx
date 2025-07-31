import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Package, 
  ShoppingCart, 
  TrendingUp, 
  DollarSign, 
  AlertCircle,
  BarChart3,
  FileText,
  Settings,
  Plus,
  Shield,
  Activity,
  Bell,
  Monitor,
  Eye,
  Truck,
  Clock,
  Leaf,
  Star,
  ChevronRight
} from 'lucide-react';

const AdminHome = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalProducts: 0,
    pendingOrders: 0,
    todayRevenue: 0,
    monthlyRevenue: 0,
    lowStockItems: 0
  });
  const [recentActivity, setRecentActivity] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      
      // Fetch dashboard statistics
      const statsResponse = await fetch('http://localhost:5000/api/admin/dashboard/stats', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (statsResponse.ok) {
        const statsData = await statsResponse.json();
        setStats(statsData);
      }

      // Fetch recent activity
      const activityResponse = await fetch('http://localhost:5000/api/admin/dashboard/activity', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (activityResponse.ok) {
        const activityData = await activityResponse.json();
        setRecentActivity(activityData);
      }

    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      // Set demo data for now
      setStats({
        totalUsers: 1250,
        totalProducts: 450,
        pendingOrders: 23,
        todayRevenue: 12450,
        monthlyRevenue: 145000,
        lowStockItems: 8
      });
      setRecentActivity([
        { id: 1, type: 'user', message: 'New user registered', time: '2 mins ago' },
        { id: 2, type: 'order', message: 'Order #1234 completed', time: '5 mins ago' },
        { id: 3, type: 'product', message: 'Product added to inventory', time: '10 mins ago' }
      ]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#ECFAE5] to-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#B0DB9C] mx-auto mb-4"></div>
          <p className="text-[#0A400C] font-semibold">Loading Dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ECFAE5] to-white">
      {/* Hero Admin Header - DailyGrocer Style */}
      <section className="bg-gradient-to-r from-[#b8860b] to-[#b8860b] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-4">
  
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-white">
                    Admin Dashboard
                  </h1>
                  <p className="text-[#b8860b] text-lg">
                    Jewellery Management System
                  </p>
                </div>
              </div>
              
              <p className="text-gray-200 text-lg mb-6">
                Monitor your grocery delivery platform with real-time insights and comprehensive management tools.
              </p>

              <div className="flex items-center space-x-4">
  
              
              </div>
            </div>
            
            {/* Admin Dashboard Illustration */}
            <div className="relative">
              
              
             
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics - DailyGrocer Style */}
      <section className="py-12 -mt-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Total Users */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-[#f3f6f4]/20 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-gradient-to-r from-[#f3f6f4] to-[#f3f6f4] p-3 rounded-xl">
                  <Users className="h-6 w-6 text-[#0A400C]" />
                </div>
                <TrendingUp className="h-5 w-5 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-[#f3f6f4] mb-1">{stats.totalUsers.toLocaleString()}</h3>
              <p className="text-gray-600 text-sm mb-2">Total Users</p>
              <div className="flex items-center text-green-600 text-sm">
                <span className="bg-green-100 px-2 py-1 rounded-full">+12% this month</span>
              </div>
            </div>

            {/* Total Products */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-[#B0DB9C]/20 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-gradient-to-r from-blue-400 to-blue-500 p-3 rounded-xl">
                  <Package className="h-6 w-6 text-white" />
                </div>
                <Leaf className="h-5 w-5 text-[#B0DB9C]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0A400C] mb-1">{stats.totalProducts}</h3>
              <p className="text-gray-600 text-sm mb-2">Products</p>
              <div className="flex items-center text-blue-600 text-sm">
                <span className="bg-blue-100 px-2 py-1 rounded-full">+5% this week</span>
              </div>
            </div>

            {/* Pending Orders */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-[#B0DB9C]/20 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-gradient-to-r from-orange-400 to-orange-500 p-3 rounded-xl">
                  <ShoppingCart className="h-6 w-6 text-white" />
                </div>
                <AlertCircle className="h-5 w-5 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-[#0A400C] mb-1">{stats.pendingOrders}</h3>
              <p className="text-gray-600 text-sm mb-2">Pending Orders</p>
              <div className="flex items-center text-orange-600 text-sm">
                <span className="bg-orange-100 px-2 py-1 rounded-full">Needs attention</span>
              </div>
            </div>

            {/* Today's Revenue */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-[#B0DB9C]/20 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-gradient-to-r from-purple-400 to-purple-500 p-3 rounded-xl">
                  <DollarSign className="h-6 w-6 text-white" />
                </div>
                <Star className="h-5 w-5 text-yellow-500" />
              </div>
              <h3 className="text-2xl font-bold text-[#0A400C] mb-1">${stats.todayRevenue.toLocaleString()}</h3>
              <p className="text-gray-600 text-sm mb-2">Today's Revenue</p>
              <div className="flex items-center text-purple-600 text-sm">
                <span className="bg-purple-100 px-2 py-1 rounded-full">+8% from yesterday</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions - DailyGrocer Style */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A400C] mb-4">Quick Actions</h2>
            <p className="text-gray-600 text-lg">Manage your platform efficiently</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              to="/admin/users"
              className="group bg-white rounded-2xl p-6 shadow-lg border-2 border-transparent hover:border-[#B0DB9C] hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="bg-gradient-to-r from-[#B0DB9C] to-[#ECFAE5] p-4 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                <Users className="h-8 w-8 text-[#0A400C]" />
              </div>
              <h3 className="text-lg font-bold text-[#0A400C] mb-2">Manage Users</h3>
              <p className="text-gray-600 mb-4">View, edit, and manage user accounts</p>
              <div className="flex items-center text-[#B0DB9C] group-hover:text-[#0A400C] transition-colors">
                <span className="font-semibold">Manage</span>
                <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/admin/products"
              className="group bg-white rounded-2xl p-6 shadow-lg border-2 border-transparent hover:border-[#B0DB9C] hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="bg-gradient-to-r from-blue-400 to-blue-500 p-4 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                <Package className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#0A400C] mb-2">Manage Products</h3>
              <p className="text-gray-600 mb-4">Add, edit, and organize products</p>
              <div className="flex items-center text-[#B0DB9C] group-hover:text-[#0A400C] transition-colors">
                <span className="font-semibold">Manage</span>
                <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/admin/orders"
              className="group bg-white rounded-2xl p-6 shadow-lg border-2 border-transparent hover:border-[#B0DB9C] hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="bg-gradient-to-r from-orange-400 to-orange-500 p-4 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                <ShoppingCart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#0A400C] mb-2">Process Orders</h3>
              <p className="text-gray-600 mb-4">View and process customer orders</p>
              <div className="flex items-center text-[#B0DB9C] group-hover:text-[#0A400C] transition-colors">
                <span className="font-semibold">Process</span>
                <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/admin/reports"
              className="group bg-white rounded-2xl p-6 shadow-lg border-2 border-transparent hover:border-[#B0DB9C] hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="bg-gradient-to-r from-purple-400 to-purple-500 p-4 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#0A400C] mb-2">Analytics</h3>
              <p className="text-gray-600 mb-4">View detailed reports and insights</p>
              <div className="flex items-center text-[#B0DB9C] group-hover:text-[#0A400C] transition-colors">
                <span className="font-semibold">Analyze</span>
                <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      

      {/* Quick Stats Footer */}
      <section className="py-8 bg-[#f3f6f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-3 shadow-lg">
                <Truck className="h-8 w-8 text-[#B0DB9C] mx-auto" />
              </div>
              <p className="text-[#0A400C] font-bold text-lg">{stats.pendingOrders}</p>
              <p className="text-gray-600 text-sm">Active Deliveries</p>
            </div>
            
            <div>
              <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-3 shadow-lg">
                <Clock className="h-8 w-8 text-[#B0DB9C] mx-auto" />
              </div>
              <p className="text-[#0A400C] font-bold text-lg">15 min</p>
              <p className="text-gray-600 text-sm">Avg Response</p>
            </div>
            
            <div>
              <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-3 shadow-lg">
                <Leaf className="h-8 w-8 text-[#B0DB9C] mx-auto" />
              </div>
              <p className="text-[#0A400C] font-bold text-lg">99.8%</p>
              <p className="text-gray-600 text-sm">Fresh Quality</p>
            </div>
            
            <div>
              <div className="bg-white rounded-full p-4 w-16 h-16 mx-auto mb-3 shadow-lg">
                <Star className="h-8 w-8 text-[#B0DB9C] mx-auto" />
              </div>
              <p className="text-[#0A400C] font-bold text-lg">4.9/5</p>
              <p className="text-gray-600 text-sm">Customer Rating</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminHome;
