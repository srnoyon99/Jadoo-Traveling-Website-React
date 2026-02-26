import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Users, Eye, MousePointerClick, DollarSign, Globe, Activity, ArrowUp, ArrowDown, Menu, X } from 'lucide-react';

const DashBord = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [timeRange, setTimeRange] = useState('7d');

  const stats = [
    { title: 'Total Visitors', value: '24,531', change: '+12.5%', positive: true, icon: Users, color: 'bg-blue-500' },
    { title: 'Page Views', value: '89,429', change: '+8.2%', positive: true, icon: Eye, color: 'bg-purple-500' },
    { title: 'Conversion Rate', value: '3.24%', change: '+0.4%', positive: true, icon: MousePointerClick, color: 'bg-green-500' },
    { title: 'Revenue', value: '$12,426', change: '-2.1%', positive: false, icon: DollarSign, color: 'bg-orange-500' },
  ];

  const trafficData = [
    { name: 'Mon', visitors: 4200, pageViews: 12400 },
    { name: 'Tue', visitors: 3800, pageViews: 11200 },
    { name: 'Wed', visitors: 5100, pageViews: 15300 },
    { name: 'Thu', visitors: 4600, pageViews: 13800 },
    { name: 'Fri', visitors: 5900, pageViews: 17700 },
    { name: 'Sat', visitors: 3200, pageViews: 9600 },
    { name: 'Sun', visitors: 2800, pageViews: 8400 },
  ];

  const revenueData = [
    { name: 'Jan', revenue: 8400 },
    { name: 'Feb', revenue: 9200 },
    { name: 'Mar', revenue: 11100 },
    { name: 'Apr', revenue: 10500 },
    { name: 'May', revenue: 12800 },
    { name: 'Jun', revenue: 12400 },
  ];

  const deviceData = [
    { name: 'Desktop', value: 58, color: '#3B82F6' },
    { name: 'Mobile', value: 32, color: '#8B5CF6' },
    { name: 'Tablet', value: 10, color: '#10B981' },
  ];

  const topPages = [
    { page: '/home', views: 15420, bounce: '32%' },
    { page: '/products', views: 12830, bounce: '28%' },
    { page: '/blog', views: 9240, bounce: '45%' },
    { page: '/about', views: 7120, bounce: '38%' },
    { page: '/contact', views: 5890, bounce: '41%' },
  ];

  return (
    <div className="flex h-screen bg-gray-50 pt-25 md:pt-[120px]">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static`}>
        <div className="flex items-center justify-between p-6 border-b">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden">
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="p-4">
          <a href="#" className="flex items-center px-4 py-3 mb-2 text-white bg-blue-500 rounded-lg">
            <Activity className="w-5 h-5 mr-3" />
            Overview
          </a>
          <a href="#" className="flex items-center px-4 py-3 mb-2 text-gray-600 hover:bg-gray-100 rounded-lg">
            <Globe className="w-5 h-5 mr-3" />
            Websites
          </a>
          <a href="#" className="flex items-center px-4 py-3 mb-2 text-gray-600 hover:bg-gray-100 rounded-lg">
            <Users className="w-5 h-5 mr-3" />
            Audience
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-6 py-4">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden">
              <Menu className="w-6 h-6" />
            </button>
            <h2 className="text-2xl pl-3 lg:pl-0 font-semibold text-gray-800">Analytics Overview</h2>
            <div className="flex gap-2">
              {['24h', '7d', '30d', '90d'].map((range) => (
                <button
                  key={range}
                  onClick={() => setTimeRange(range)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    timeRange === range
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className={`${stat.color} p-3 rounded-lg`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className={`flex items-center text-sm font-medium ${stat.positive ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.positive ? <ArrowUp className="w-4 h-4 mr-1" /> : <ArrowDown className="w-4 h-4 mr-1" />}
                    {stat.change}
                  </div>
                </div>
                <h3 className="text-gray-500 text-sm font-medium">{stat.title}</h3>
                <p className="text-2xl font-bold text-gray-800 mt-1">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Traffic Chart */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Traffic Overview</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={trafficData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="name" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }} />
                  <Line type="monotone" dataKey="visitors" stroke="#3B82F6" strokeWidth={2} dot={{ fill: '#3B82F6', r: 4 }} />
                  <Line type="monotone" dataKey="pageViews" stroke="#8B5CF6" strokeWidth={2} dot={{ fill: '#8B5CF6', r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Revenue Chart */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Monthly Revenue</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="name" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }} />
                  <Bar dataKey="revenue" fill="#10B981" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Device Distribution */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Device Distribution</h3>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={deviceData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {deviceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex justify-center gap-4 mt-4">
                {deviceData.map((device, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: device.color }}></div>
                    <span className="text-sm text-gray-600">{device.name} {device.value}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Pages */}
            <div className="bg-white rounded-xl shadow-sm p-6 lg:col-span-2">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Top Pages</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Page</th>
                      <th className="text-right py-3 px-4 text-sm font-semibold text-gray-600">Views</th>
                      <th className="text-right py-3 px-4 text-sm font-semibold text-gray-600">Bounce Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topPages.map((page, idx) => (
                      <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 text-sm text-gray-800">{page.page}</td>
                        <td className="py-3 px-4 text-sm text-gray-800 text-right font-medium">{page.views.toLocaleString()}</td>
                        <td className="py-3 px-4 text-sm text-gray-600 text-right">{page.bounce}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashBord;