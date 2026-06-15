import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { useCart } from '../../contexts/CartContext'

const Header = () => {
  const { isAuthenticated, user, logout } = useAuth()
  const { getTotalItems } = useCart()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const location = useLocation()

  const cartItemCount = getTotalItems()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const isActive = (path) => location.pathname === path

  return (
    <header className="bg-white sticky top-0 z-50" style={{ boxShadow: '0 1px 4px rgba(28, 28, 28, 0.08)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#FF5C00' }}>
              <span className="text-white text-lg font-bold">F</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-2xl font-bold" style={{ color: '#FF5C00' }}>Foodie</span>
              <span className="text-xs px-2 py-1 rounded-full font-medium" style={{ backgroundColor: '#fff3ed', color: '#FF5C00' }}>
                Express
              </span>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <div className="flex items-center bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center px-4 py-3 border-r border-gray-200">
                  <span className="text-lg mr-2">📍</span>
                  <div className="text-sm">
                    <div className="font-medium text-gray-900">Madurai</div>
                    <div className="text-gray-500 text-xs">Tamil Nadu, India</div>
                  </div>
                </div>
                <div className="flex-1 px-4">
                  <input
                    type="text"
                    placeholder="Search for restaurant, cuisine or a dish"
                    className="w-full text-sm text-gray-700 placeholder-gray-400 border-none outline-none bg-transparent"
                  />
                </div>
                <button className="px-4 py-3 transition-colors" style={{ color: '#FF5C00' }}>
                  <span className="text-lg">🔍</span>
                </button>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/meals"
              className={`text-sm font-medium transition-colors duration-200 px-3 py-2 rounded-md ${
                isActive('/meals')
                  ? 'bg-orange-50'
                  : 'text-gray-700 hover:bg-orange-50'
              }`}
              style={{ color: isActive('/meals') ? '#FF5C00' : undefined }}
            >
              🍽️ Order Online
            </Link>

            {isAuthenticated && (
              <Link
                to="/orders"
                className={`text-sm font-medium transition-colors duration-200 px-3 py-2 rounded-md ${
                  isActive('/orders')
                    ? 'bg-orange-50'
                    : 'text-gray-700 hover:bg-orange-50'
                }`}
                style={{ color: isActive('/orders') ? '#FF5C00' : undefined }}
              >
                📋 My Orders
              </Link>
            )}

            {user?.role === 'chef' && (
              <Link
                to="/chef-dashboard"
                className={`text-sm font-medium transition-colors duration-200 px-3 py-2 rounded-md ${
                  isActive('/chef-dashboard')
                    ? 'bg-orange-50'
                    : 'text-gray-700 hover:bg-orange-50'
                }`}
                style={{ color: isActive('/chef-dashboard') ? '#FF5C00' : undefined }}
              >
                👨‍🍳 Dashboard
              </Link>
            )}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-3">
            {/* Cart */}
            {isAuthenticated && (
              <Link to="/cart" className="relative p-2 rounded-lg transition-colors duration-200 hover:bg-orange-50">
                <span className="text-xl">🛒</span>
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center" style={{ backgroundColor: '#FF5C00' }}>
                    {cartItemCount}
                  </span>
                )}
              </Link>
            )}

            {/* User menu */}
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 p-2 hover:bg-orange-50 rounded-lg transition-colors duration-200"
                >
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#fff3ed' }}>
                    <span style={{ color: '#FF5C00' }}>👤</span>
                  </div>
                  <span className="hidden sm:block text-sm font-medium text-gray-900">{user?.name}</span>
                  <span className="text-gray-400">▼</span>
                </button>

                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 z-50 border border-gray-100">
                    <div className="px-4 py-3 border-b border-gray-100">
                      <div className="font-semibold text-gray-900">{user?.name}</div>
                      <div className="text-sm text-gray-500 capitalize flex items-center">
                        {user?.role === 'chef' && '👨‍🍳 '}
                        {user?.role === 'admin' && '⚙️ '}
                        {user?.role}
                      </div>
                    </div>
                    <Link
                      to="/orders"
                      className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-orange-50"
                      onClick={() => setIsUserMenuOpen(false)}
                      style={{ color: undefined }}
                    >
                      <span className="mr-3">📋</span>
                      Your orders
                    </Link>
                    {user?.role === 'chef' && (
                      <Link
                        to="/chef-dashboard"
                        className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-orange-50"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        <span className="mr-3">👨‍🍳</span>
                        Partner Dashboard
                      </Link>
                    )}
                    {user?.role === 'admin' && (
                      <Link
                        to="/admin"
                        className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-orange-50"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        <span className="mr-3">⚙️</span>
                        Admin panel
                      </Link>
                    )}
                    <div className="border-t border-gray-100 mt-2 pt-2">
                      <button
                        onClick={() => {
                          logout()
                          setIsUserMenuOpen(false)
                        }}
                        className="w-full flex items-center text-left px-4 py-3 text-sm font-medium text-gray-700 hover:bg-orange-50"
                      >
                        <span className="mr-3">🚪</span>
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link
                  to="/login"
                  className="text-sm font-medium text-gray-700 hover:bg-orange-50 transition-colors duration-200 px-3 py-2 rounded-md"
                >
                  Log in
                </Link>
                <Link
                  to="/register"
                  className="text-sm font-medium text-white px-4 py-2 rounded-lg transition-colors duration-200"
                  style={{ backgroundColor: '#FF5C00' }}
                >
                  Sign up
                </Link>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg text-gray-700 transition-colors duration-200 hover:text-black hover:bg-gray-100"
            >
              {isMobileMenuOpen ? (
                <span className="text-xl">✕</span>
              ) : (
                <span className="text-xl">☰</span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="py-4 border-t border-gray-200 animate-slide-up">
            <div className="flex flex-col space-y-4">
              <Link
                to="/meals"
                className="text-gray-700 font-medium transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Browse Meals
              </Link>

              {isAuthenticated ? (
                <>
                  <Link
                    to="/cart"
                    className="flex items-center space-x-2 text-gray-700 font-medium transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="text-xl">🛒</span>
                    <span>Cart ({cartItemCount})</span>
                  </Link>

                  <Link
                    to="/orders"
                    className="text-gray-700 font-medium transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    My Orders
                  </Link>

                  {user?.role === 'chef' && (
                    <Link
                      to="/chef-dashboard"
                      className="flex items-center space-x-2 text-gray-700 font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="text-lg">👨‍🍳</span>
                      <span>Chef Dashboard</span>
                    </Link>
                  )}

                  {user?.role === 'admin' && (
                    <Link
                      to="/admin"
                      className="flex items-center space-x-2 text-gray-700 font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="text-lg">⚙️</span>
                      <span>Admin Panel</span>
                    </Link>
                  )}

                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="text-lg">👤</span>
                      <span className="text-sm text-gray-700">{user?.name}</span>
                    </div>
                    <button
                      onClick={() => {
                        logout()
                        setIsMobileMenuOpen(false)
                      }}
                      className="w-full text-white px-4 py-2 rounded-lg font-medium"
                      style={{ backgroundColor: '#FF5C00' }}
                    >
                      Logout
                    </button>
                  </div>
                </>
              ) : (
                <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                  <Link
                    to="/login"
                    className="text-gray-700 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="text-white px-4 py-2 rounded-lg font-medium text-center"
                    style={{ backgroundColor: '#FF5C00' }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header