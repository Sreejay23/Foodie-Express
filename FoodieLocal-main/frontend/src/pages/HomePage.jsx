import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import './HomePage.css'

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
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-card">
          <span className="hero-badge">📍 Delivering across Madurai</span>
          <h1 className="hero-title">Hungry? We've got<br />you covered 🍴</h1>
          <p className="hero-subtitle">Order from your favorite local restaurants in just a few taps</p>
          <div className="hero-search">
            <span className="hero-search-icon">🔍</span>
            <input type="text" placeholder="Search dishes, restaurants, cuisines..." className="hero-search-input" />
            <Link to="/meals" className="hero-search-btn">Go</Link>
          </div>
        </div>
      </section>

      <section className="categories-section">
        <h2 className="section-title">What are you craving?</h2>
        <div className="categories-row">
          {categories.map((cat, i) => (
            <Link to="/meals" key={i} className="category-bubble" style={{ backgroundColor: cat.color }}>
              <span className="category-emoji">{cat.emoji}</span>
              <span className="category-name">{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="restaurants-section">
        <div className="section-header">
          <h2 className="section-title">Popular near you</h2>
          <Link to="/meals" className="see-all-link">See all →</Link>
        </div>
        <div className="restaurant-grid">
          {restaurants.map((r, i) => (
            <Link key={i} to="/meals" className="restaurant-card">
              <div className="restaurant-img-wrap">
                <img src={r.image} alt={r.name} className="restaurant-img" />
                <span className="restaurant-tag">{r.tag}</span>
                <span className="restaurant-rating">⭐ {r.rating}</span>
              </div>
              <div className="restaurant-info">
                <h3 className="restaurant-name">{r.name}</h3>
                <p className="restaurant-cuisine">{r.cuisine}</p>
                <p className="restaurant-time">⏱ {r.time}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <Link to="/register" className="cta-card cta-green">
          <span className="cta-emoji">🏪</span>
          <h3>Partner your restaurant</h3>
          <p>Reach thousands of hungry customers</p>
        </Link>
        <Link to="/register" className="cta-card cta-purple">
          <span className="cta-emoji">👨‍🍳</span>
          <h3>Cook & earn from home</h3>
          <p>Turn your kitchen into a business</p>
        </Link>
      </section>
    </div>
  )
}

export default HomePage