import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const categories = [
  { name: 'Pizza', emoji: '🍕', color: '#FFD23F' },
  { name: 'Biryani', emoji: '🍛', color: '#FF6B6B' },
  { name: 'Burger', emoji: '🍔', color: '#4ECDC4' },
  { name: 'Desserts', emoji: '🍰', color: '#C77DFF' },
  { name: 'Chinese', emoji: '🥡', color: '#FF9F1C' },
  { name: 'Drinks', emoji: '🥤', color: '#3DDC97' },
]

const restaurants = [
  { name: "Maria's Authentic Italian", cuisine: 'Italian, Pizza, Pasta', rating: '4.8', time: '25-35 min', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop', tag: 'Bestseller' },
  { name: 'Spice Garden', cuisine: 'South Indian, Biryani', rating: '4.9', time: '30-40 min', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop', tag: 'New' },
  { name: 'Fresh Bowl Co.', cuisine: 'Healthy, Salads, Bowls', rating: '4.7', time: '15-25 min', image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop', tag: 'Healthy' },
]

const HomePage = () => {
  const { isAuthenticated, user } = useAuth()

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFF9F2' }}>
      {/* Playful Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-12 pb-10 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-[2.5rem] p-8 md:p-14 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #FF5C00 0%, #FF8A3D 60%, #FFD23F 100%)' }}>
            <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white opacity-10"></div>
            <div className="absolute bottom-0 left-1/3 w-32 h-32 rounded-full bg-white opacity-10"></div>
            <div className="relative z-10 text-center text-white space-y-5">
              <span className="inline-block bg-white/20 backdrop-blur px-4 py-1.5 rounded-full text-sm font-semibold">
                📍 Delivering across Madurai
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                Hungry? We've got<br />you covered 🍴
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-xl mx-auto">
                Order from your favorite local restaurants in just a few taps
              </p>
              <div className="bg-white rounded-2xl p-2 max-w-xl mx-auto flex items-center shadow-xl mt-6">
                <span className="text-xl px-3" style={{ color: '#FF5C00' }}>🔍</span>
                <input
                  type="text"
                  placeholder="Search dishes, restaurants, cuisines..."
                  className="flex-1 py-3 outline-none text-gray-800 placeholder-gray-400"
                />
                <Link
                  to="/meals"
                  className="px-6 py-3 rounded-xl font-bold text-white"
                  style={{ backgroundColor: '#FF5C00' }}
                >
                  Go
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category bubbles */}
      <section className="px-4 sm:px-6 lg:px-8 pb-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-5">What are you craving?</h2>
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat, i) => (
              <Link
                to="/meals"
                key={i}
                className="flex flex-col items-center justify-center min-w-[110px] h-[110px] rounded-3xl shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-200"
                style={{ backgroundColor: cat.color }}
              >
                <span className="text-3xl mb-1">{cat.emoji}</span>
                <span className="font-bold text-white text-sm">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Restaurant cards - playful pill style */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-2xl font-extrabold text-gray-900">Popular near you</h2>
            <Link to="/meals" className="font-bold text-sm" style={{ color: '#FF5C00' }}>See all →</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {restaurants.map((r, i) => (
              <Link
                key={i}
                to="/meals"
                className="bg-white rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-200 overflow-hidden border-2 border-transparent hover:border-orange-200"
              >
                <div className="relative">
                  <img src={r.image} alt={r.name} className="w-full h-44 object-cover" />
                  <span
                    className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold text-white shadow"
                    style={{ backgroundColor: '#FF5C00' }}
                  >
                    {r.tag}
                  </span>
                  <span className="absolute bottom-3 right-3 bg-white px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow">
                    ⭐ {r.rating}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-extrabold text-gray-900">{r.name}</h3>
                  <p className="text-gray-500 text-sm mt-0.5">{r.cuisine}</p>
                  <p className="text-sm font-semibold mt-2" style={{ color: '#FF5C00' }}>⏱ {r.time}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Become a partner - bubble CTA */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link to="/register" className="rounded-3xl p-8 text-white relative overflow-hidden hover:-translate-y-1 transition-all duration-200" style={{ backgroundColor: '#3DDC97' }}>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-white opacity-10"></div>
            <span className="text-4xl">🏪</span>
            <h3 className="text-2xl font-extrabold mt-3">Partner your restaurant</h3>
            <p className="text-white/90 mt-1">Reach thousands of hungry customers</p>
          </Link>
          <Link to="/register" className="rounded-3xl p-8 text-white relative overflow-hidden hover:-translate-y-1 transition-all duration-200" style={{ backgroundColor: '#C77DFF' }}>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-white opacity-10"></div>
            <span className="text-4xl">👨‍🍳</span>
            <h3 className="text-2xl font-extrabold mt-3">Cook & earn from home</h3>
            <p className="text-white/90 mt-1">Turn your kitchen into a business</p>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HomePage