import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const HomePage = () => {
  const { isAuthenticated, user } = useAuth()

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #fff3ed 0%, #fffaf7 100%)' }}>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Discover the best
                <span className="block" style={{ color: '#FF5C00' }}>
                  food & drinks
                </span>
                <span className="block text-4xl lg:text-5xl text-gray-700 font-normal mt-2">
                  in Madurai
                </span>
              </h1>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-2">
                <div className="flex flex-col md:flex-row gap-2">
                  <div className="flex-1 flex items-center px-4 py-3 border-r border-gray-200">
                    <span className="text-xl mr-3" style={{ color: '#FF5C00' }}>📍</span>
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Madurai, Tamil Nadu"
                        className="w-full text-lg font-medium text-gray-900 placeholder-gray-500 border-none outline-none bg-transparent"
                      />
                      <p className="text-sm text-gray-500">Location</p>
                    </div>
                  </div>
                  <div className="flex-1 flex items-center px-4 py-3">
                    <span className="text-xl mr-3" style={{ color: '#FF5C00' }}>🔍</span>
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Search for restaurant, cuisine or a dish"
                        className="w-full text-lg font-medium text-gray-900 placeholder-gray-500 border-none outline-none bg-transparent"
                      />
                      <p className="text-sm text-gray-500">Restaurant or dish</p>
                    </div>
                  </div>
                  <Link
                    to="/meals"
                    className="px-8 py-4 text-lg font-medium whitespace-nowrap text-white rounded-lg transition-colors"
                    style={{ backgroundColor: '#FF5C00' }}
                  >
                    Search
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
              <span className="text-gray-600 font-medium">Popular:</span>
              {['Pizza', 'Burger', 'Biryani', 'Chinese', 'Desserts'].map((item, index) => (
                <Link
                  key={index}
                  to="/meals"
                  className="font-medium border-b border-orange-200 hover:border-orange-400 transition-colors"
                  style={{ color: '#FF5C00' }}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Order Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link to="/meals" className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3]" style={{ background: 'linear-gradient(135deg, #FF5C00 0%, #FF8A3D 100%)' }}>
                <img
                  src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop"
                  alt="Order Online"
                  className="w-full h-full object-cover mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-3xl font-bold mb-2">Order Online</h3>
                  <p className="text-lg opacity-90">Stay home and order to your doorstep</p>
                </div>
                <div className="absolute top-6 right-6 text-white text-4xl">🍽️</div>
              </div>
            </Link>

            <Link to="/meals" className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] bg-gradient-to-br from-amber-400 to-orange-500">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop"
                  alt="Dining"
                  className="w-full h-full object-cover mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-3xl font-bold mb-2">Dining</h3>
                  <p className="text-lg opacity-90">View the city's favourite dining venues</p>
                </div>
                <div className="absolute top-6 right-6 text-white text-4xl">🍴</div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Collections</h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Explore curated lists of top restaurants, cafes, and bars in Madurai, based on trends
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Trending This Week', count: '30 Places', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=400&fit=crop' },
              { title: 'Best of Madurai', count: '52 Places', image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=300&h=400&fit=crop' },
              { title: 'Newly Opened', count: '18 Places', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&h=400&fit=crop' },
              { title: 'Pure Veg', count: '24 Places', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=400&fit=crop' }
            ].map((collection, index) => (
              <Link
                key={index}
                to="/meals"
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 aspect-[3/4]"
              >
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(255,92,0,0.75), rgba(255,92,0,0.1))' }}></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold mb-1">{collection.title}</h3>
                  <p className="text-sm opacity-90">{collection.count}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Restaurants */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular restaurants</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Maria's Authentic Italian", cuisine: 'Italian, Pizza, Pasta', rating: '4.8', reviews: '1.2k', time: '25-35 min', price: '₹₹', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop', offer: '50% OFF up to ₹100', promoted: true },
              { name: "Spice Garden", cuisine: 'South Indian, Biryani', rating: '4.9', reviews: '2.1k', time: '30-40 min', price: '₹₹₹', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop', offer: 'Free delivery', promoted: false },
              { name: "Fresh Bowl Co.", cuisine: 'Healthy Food, Salads, Bowls', rating: '4.7', reviews: '856', time: '15-25 min', price: '₹₹', image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop', offer: '20% OFF', promoted: false }
            ].map((restaurant, index) => (
              <Link
                key={index}
                to="/meals"
                className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative">
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {restaurant.promoted && (
                    <div className="absolute top-3 left-3 text-white px-2 py-1 rounded text-xs font-semibold" style={{ backgroundColor: '#FF5C00' }}>
                      PROMOTED
                    </div>
                  )}
                  <div className="absolute bottom-3 left-3 bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">
                    {restaurant.offer}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg text-gray-900 mb-1">{restaurant.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{restaurant.cuisine}</p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <span className="w-4 h-4 bg-green-600 rounded-full flex items-center justify-center text-white text-xs">★</span>
                        <span className="font-semibold">{restaurant.rating}</span>
                        <span className="text-gray-500">({restaurant.reviews})</span>
                      </div>
                      <span className="text-gray-500">{restaurant.time}</span>
                    </div>
                    <span className="text-gray-600 font-medium">{restaurant.price}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Partner with us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore options near me</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link to="/register" className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto" style={{ backgroundColor: '#fff3ed' }}>
                  <span className="text-3xl">🏪</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Add restaurant</h3>
                <p className="text-gray-600">Partner with us and grow your business</p>
                <div className="pt-4">
                  <span className="font-semibold group-hover:underline" style={{ color: '#FF5C00' }}>Learn more →</span>
                </div>
              </div>
            </Link>

            <Link to="/register" className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto" style={{ backgroundColor: '#fff3ed' }}>
                  <span className="text-3xl">👨‍🍳</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Become a chef</h3>
                <p className="text-gray-600">Cook from home and earn money</p>
                <div className="pt-4">
                  <span className="font-semibold group-hover:underline" style={{ color: '#FF5C00' }}>Get started →</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage