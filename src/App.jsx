import { useState } from "react";
import "./App.css";

const properties = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
    title: "Modern Luxury Villa",
    location: "Rajkot, Gujarat",
    price: "₹85 Lakh",
    type: "Villa",
    beds: 4,
    baths: 3,
    area: "2,450 Sq.Ft",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
    title: "Premium Family Home",
    location: "Ahmedabad, Gujarat",
    price: "₹72 Lakh",
    type: "House",
    beds: 3,
    baths: 2,
    area: "1,850 Sq.Ft",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80",
    title: "Elegant City Apartment",
    location: "Surat, Gujarat",
    price: "₹48 Lakh",
    type: "Apartment",
    beds: 3,
    baths: 2,
    area: "1,420 Sq.Ft",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filteredProperties = properties.filter((property) =>
    `${property.title} ${property.location} ${property.type}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <header className="navbar">
        <div className="container nav-content">
          <div className="logo">
            <span className="logo-icon">⌂</span>
            <span>HomeNest</span>
          </div>

          <nav className={menuOpen ? "nav-links active" : "nav-links"}>
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>
            <a href="#properties" onClick={() => setMenuOpen(false)}>
              Buy
            </a>
            <a href="#sell" onClick={() => setMenuOpen(false)}>
              Sell
            </a>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </nav>

          <div className="nav-actions">
            <button className="login-btn">Login</button>
            <button className="signup-btn">Get Started</button>
          </div>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-overlay"></div>

        <div className="container hero-content">
          <div className="hero-text">
            <span className="hero-badge">🏠 Find Your Dream Home</span>

            <h1>
              Find a place you'll
              <span>love to live.</span>
            </h1>

            <p>
              Discover beautiful properties, connect directly with owners,
              and find your perfect home with HomeNest.
            </p>
          </div>

          <div className="search-box">
            <div className="search-tabs">
              <button className="active-tab">Buy</button>
              <button>Rent</button>
            </div>

            <div className="search-fields">
              <div className="search-field">
                <label>LOCATION</label>

                <div className="input-wrapper">
                  <span>📍</span>

                  <input
                    type="text"
                    placeholder="City, Area or Location"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
              </div>

              <div className="search-field">
                <label>PROPERTY TYPE</label>

                <select>
                  <option>All Properties</option>
                  <option>Apartment</option>
                  <option>House</option>
                  <option>Villa</option>
                  <option>Plot</option>
                </select>
              </div>

              <div className="search-field">
                <label>PRICE RANGE</label>

                <select>
                  <option>Any Price</option>
                  <option>Under ₹50 Lakh</option>
                  <option>₹50 - ₹80 Lakh</option>
                  <option>₹80 Lakh - ₹1 Crore</option>
                  <option>Above ₹1 Crore</option>
                </select>
              </div>

              <button className="search-btn">🔍 Search</button>
            </div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container stats-grid">
          <div className="stat">
            <strong>10K+</strong>
            <span>Properties</span>
          </div>

          <div className="stat">
            <strong>5K+</strong>
            <span>Happy Customers</span>
          </div>

          <div className="stat">
            <strong>25+</strong>
            <span>Cities</span>
          </div>

          <div className="stat">
            <strong>2K+</strong>
            <span>Verified Sellers</span>
          </div>
        </div>
      </section>

      <section className="properties-section" id="properties">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="small-title">EXPLORE PROPERTIES</span>
              <h2>Featured Properties</h2>
              <p>Hand-picked properties from trusted sellers.</p>
            </div>

            <button className="view-all">View All Properties →</button>
          </div>

          <div className="property-grid">
            {filteredProperties.length > 0 ? (
              filteredProperties.map((property) => (
                <div className="property-card" key={property.id}>
                  <div className="property-image">
                    <img src={property.image} alt={property.title} />

                    <span className="property-tag">For Sale</span>

                    <button className="heart-btn">♡</button>
                  </div>

                  <div className="property-info">
                    <div className="property-type">{property.type}</div>

                    <h3>{property.title}</h3>

                    <p className="location">📍 {property.location}</p>

                    <div className="property-details">
                      <span>🛏 {property.beds} Beds</span>
                      <span>🛁 {property.baths} Baths</span>
                      <span>📐 {property.area}</span>
                    </div>

                    <div className="property-bottom">
                      <strong>{property.price}</strong>

                      <button>View Details</button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-result">
                <h3>No properties found</h3>
                <p>Try another location or property name.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="categories">
        <div className="container">
          <div className="center-heading">
            <span className="small-title">PROPERTY CATEGORIES</span>
            <h2>Explore By Property Type</h2>
            <p>Choose the property that fits your lifestyle.</p>
          </div>

          <div className="category-grid">
            <div className="category-card">
              <div className="category-icon">🏢</div>
              <h3>Apartment</h3>
              <p>2,500+ Properties</p>
            </div>

            <div className="category-card">
              <div className="category-icon">🏡</div>
              <h3>House</h3>
              <p>1,800+ Properties</p>
            </div>

            <div className="category-card">
              <div className="category-icon">🏰</div>
              <h3>Villa</h3>
              <p>950+ Properties</p>
            </div>

            <div className="category-card">
              <div className="category-icon">🌳</div>
              <h3>Plots</h3>
              <p>1,200+ Properties</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sell-section" id="sell">
        <div className="container sell-container">
          <div className="sell-content">
            <span className="small-title light">SELL YOUR PROPERTY</span>

            <h2>Ready to sell your property?</h2>

            <p>
              List your property on HomeNest and connect with thousands
              of verified buyers.
            </p>

            <button className="sell-btn">List Your Property →</button>
          </div>

          <div className="sell-image">
            <img
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80"
              alt="Luxury house"
            />
          </div>
        </div>
      </section>

      <section className="why-section" id="about">
        <div className="container">
          <div className="center-heading">
            <span className="small-title">WHY HOMENEST</span>
            <h2>Everything You Need in One Place</h2>
          </div>

          <div className="why-grid">
            <div className="why-card">
              <div>✓</div>
              <h3>Verified Properties</h3>
              <p>
                Every property is reviewed to give you a safer experience.
              </p>
            </div>

            <div className="why-card">
              <div>💬</div>
              <h3>Direct Chat</h3>
              <p>
                Chat directly with property owners and sellers.
              </p>
            </div>

            <div className="why-card">
              <div>📍</div>
              <h3>Real Location</h3>
              <p>
                Find exact property locations using interactive maps.
              </p>
            </div>

            <div className="why-card">
              <div>🔒</div>
              <h3>Secure Platform</h3>
              <p>
                Your account and property information stay protected.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact">
        <div className="container footer-grid">
          <div className="footer-brand">
            <div className="logo">
              <span className="logo-icon">⌂</span>
              <span>HomeNest</span>
            </div>

            <p>
              Find your dream home with a smarter and simpler real estate
              experience.
            </p>
          </div>

          <div>
            <h4>Company</h4>
            <a href="#about">About Us</a>
            <a href="#contact">Contact</a>
            <a href="#home">Careers</a>
          </div>

          <div>
            <h4>Properties</h4>
            <a href="#properties">Buy Property</a>
            <a href="#properties">Rent Property</a>
            <a href="#sell">Sell Property</a>
          </div>

          <div>
            <h4>Contact</h4>
            <p>📍 Rajkot, Gujarat</p>
            <p>📞 +91 98765 43210</p>
            <p>✉️ info@homenest.com</p>
          </div>
        </div>

        <div className="copyright">
          © 2026 HomeNest. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;