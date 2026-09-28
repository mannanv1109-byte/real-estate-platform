import { useState } from "react";
import "./App.css";

// =====================================================
// MAIN PAGES
// =====================================================

import LoginPage from "./page/LoginPage";
import RegisterPage from "./page/RegisterPage";
import SellerDashboard from "./page/SellerDashboard";

// =====================================================
// BUYER PAGES
// =====================================================

import BuyerDashboard from "./page/buyer/BuyerDashboard";
import PropertyDetails from "./page/buyer/PropertyDetails";
import Favourite from "./page/buyer/Favourite";
import PurchasedProperty from "./page/buyer/PurchasedProperty";
import BuyerProfile from "./page/buyer/BuyerProfile";
import BuyerChat from "./page/buyer/BuyerChat";

// =====================================================
// ADMIN PAGES
// =====================================================

import AdminLogin from "./page/Admin/AdminLogin";
import AdminDashboard from "./page/Admin/AdminDashboard";
import AdminUsers from "./page/Admin/AdminUsers";
import AdminProperties from "./page/Admin/AdminProperties";
import PropertyVerification from "./page/Admin/PropertyVerification";
import AdminDocuments from "./page/Admin/AdminDocuments";
import AdminReports from "./page/Admin/AdminReports";
import AdminTransactions from "./page/Admin/AdminTransactions";
import AdminProfile from "./page/Admin/AdminProfile";
import AdminSettings from "./page/Admin/AdminSettings";


// =====================================================
// PROPERTY DATA
// =====================================================

const properties = [
  {
    id: 1,
    title: "Modern Luxury Villa",
    location: "Ahmedabad, Gujarat",
    price: "₹1.25 Cr",
    type: "Villa",
    beds: 4,
    baths: 3,
    area: "2,850 Sq.Ft",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
  },

  {
    id: 2,
    title: "Premium City Apartment",
    location: "Surat, Gujarat",
    price: "₹75 Lakh",
    type: "Apartment",
    beds: 3,
    baths: 2,
    area: "1,650 Sq.Ft",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
  },

  {
    id: 3,
    title: "Premium Family Residence",
    location: "Vadodara, Gujarat",
    price: "₹95 Lakh",
    type: "House",
    beds: 4,
    baths: 3,
    area: "2,200 Sq.Ft",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
  },

  {
    id: 4,
    title: "Contemporary Dream Home",
    location: "Rajkot, Gujarat",
    price: "₹88 Lakh",
    type: "House",
    beds: 4,
    baths: 3,
    area: "2,350 Sq.Ft",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
  },

  {
    id: 5,
    title: "Green Luxury Villa",
    location: "Gandhinagar, Gujarat",
    price: "₹1.45 Cr",
    type: "Villa",
    beds: 5,
    baths: 4,
    area: "3,400 Sq.Ft",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=85",
  },

  {
    id: 6,
    title: "Modern Urban Apartment",
    location: "Ahmedabad, Gujarat",
    price: "₹62 Lakh",
    type: "Apartment",
    beds: 3,
    baths: 2,
    area: "1,480 Sq.Ft",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
  },
];

// =====================================================
// CATEGORY DATA
// =====================================================

const categories = [
  {
    title: "Apartments",
    icon: "🏢",
    type: "Apartment",
    count: "2,500+ Properties",
  },

  {
    title: "Independent Houses",
    icon: "🏡",
    type: "House",
    count: "1,800+ Properties",
  },

  {
    title: "Luxury Villas",
    icon: "🏰",
    type: "Villa",
    count: "950+ Properties",
  },

  {
    title: "Plots & Land",
    icon: "🌳",
    type: "All",
    count: "1,200+ Properties",
  },
];

// =====================================================
// APP
// =====================================================

function App() {
  
  // =====================================================
  // PAGE
  // =====================================================

  const [currentPage, setCurrentPage] = useState("home");

  // =====================================================
  // NAVBAR
  // =====================================================

  const [menuOpen, setMenuOpen] = useState(false);

  // =====================================================
  // SEARCH
  // =====================================================

  const [activeTab, setActiveTab] = useState("Buy");

  const [location, setLocation] = useState("");

  const [propertyType, setPropertyType] = useState("All");

  const [priceRange, setPriceRange] = useState("Any Price");

  // =====================================================
  // PROPERTY
  // =====================================================

  const [favorites, setFavorites] = useState([]);

  const [showAll, setShowAll] = useState(false);

  // =====================================================
  // SCROLL TO SECTION
  // =====================================================

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMenuOpen(false);
  };

  // =====================================================
  // NAVIGATION HELPER
  // =====================================================

  const navigateTo = (page) => {
    setCurrentPage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  // =====================================================
  // FAVORITE
  // =====================================================

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(
        favorites.filter(
          (item) => item !== id
        )
      );
    } else {
      setFavorites([
        ...favorites,
        id,
      ]);
    }
  };

  // =====================================================
  // FILTER
  // =====================================================

  const filteredProperties = properties.filter(
    (property) => {
      const searchText =
        location.toLowerCase().trim();

      const locationMatch =
        searchText === "" ||
        property.location
          .toLowerCase()
          .includes(searchText) ||
        property.title
          .toLowerCase()
          .includes(searchText);

      const typeMatch =
        propertyType === "All" ||
        property.type === propertyType;

      let priceMatch = true;

      if (priceRange === "Under ₹50 Lakh") {
        priceMatch = false;
      }

      if (
        priceRange ===
        "₹50 - ₹80 Lakh"
      ) {
        priceMatch =
          property.price === "₹62 Lakh" ||
          property.price === "₹75 Lakh";
      }

      if (
        priceRange ===
        "₹80 Lakh - ₹1 Crore"
      ) {
        priceMatch =
          property.price === "₹88 Lakh" ||
          property.price === "₹95 Lakh";
      }

      if (
        priceRange ===
        "Above ₹1 Crore"
      ) {
        priceMatch =
          property.price === "₹1.25 Cr" ||
          property.price === "₹1.45 Cr";
      }

      return (
        locationMatch &&
        typeMatch &&
        priceMatch
      );
    }
  );
if (currentPage === "admin-login") {
  return (
    <AdminLogin
      onBackHome={() => setCurrentPage("home")}
    />
  );
}
  const visibleProperties = showAll
    ? filteredProperties
    : filteredProperties.slice(0, 3);

  // =====================================================
  // LOGIN PAGE
  // =====================================================

  if (currentPage === "login") {
    return (
      <LoginPage
        onBackHome={() =>
          navigateTo("home")
        }
        onRegister={() =>
          navigateTo("register")
        }
      />
    );
  }

  // =====================================================
  // REGISTER PAGE
  // =====================================================

  if (currentPage === "register") {
    return (
      <RegisterPage
        onBackHome={() =>
          navigateTo("home")
        }
        onLogin={() =>
          navigateTo("login")
        }
      />
    );
  }

  // =====================================================
  // SELLER DASHBOARD
  // =====================================================

  if (currentPage === "seller") {
    return (
      <SellerDashboard
        onBackHome={() =>
          navigateTo("home")
        }
      />
    );
  }

  // =====================================================
  // BUYER DASHBOARD
  // =====================================================

  if (currentPage === "buyer") {
    return (
      <BuyerDashboard
        onBackHome={() =>
          navigateTo("home")
        }
        onNavigate={navigateTo}
      />
    );
  }

  // =========================
// BUYER DASHBOARD
// =========================
if (currentPage === "buyer") {
  return (
    <BuyerDashboard
      onBackHome={() => setCurrentPage("home")}
    />
  );
}
if (currentPage === "buyer") {
  return <BuyerDashboard />;
}

  // =====================================================
  // PROPERTY DETAILS
  // =====================================================

  if (
    currentPage ===
    "property-details"
  ) {
    return (
      <PropertyDetails
        onBack={() =>
          navigateTo("buyer")
        }
        onNavigate={navigateTo}
      />
    );
  }

  // =====================================================
  // FAVOURITE
  // =====================================================

  if (
    currentPage ===
    "favourite"
  ) {
    return (
      <Favourite
        onBack={() =>
          navigateTo("buyer")
        }
        onNavigate={navigateTo}
      />
    );
  }

  // =====================================================
  // PURCHASED PROPERTY
  // =====================================================

  if (
    currentPage ===
    "purchased"
  ) {
    return (
      <PurchasedProperty
        onBack={() =>
          navigateTo("buyer")
        }
        onNavigate={navigateTo}
      />
    );
  }

  // =====================================================
  // BUYER PROFILE
  // =====================================================

  if (
    currentPage ===
    "buyer-profile"
  ) {
    return (
      <BuyerProfile
        onBack={() =>
          navigateTo("buyer")
        }
        onNavigate={navigateTo}
      />
    );
  }

  // =====================================================
  // BUYER CHAT
  // =====================================================

  if (
    currentPage ===
    "buyer-chat"
  ) {
    return (
      <BuyerChat
        onBack={() =>
          navigateTo("buyer")
        }
        onNavigate={navigateTo}
      />
    );
  }
  if (currentPage === "buyer") {
  return (
    <BuyerDashboard
      onBackHome={() => setCurrentPage("home")}
    />
  );
}
// Admin
if (currentPage === "admin-login") {
  return (
    <AdminLogin
      onBackHome={() => setCurrentPage("home")}
      onAdminLogin={() => setCurrentPage("admin-dashboard")}
    />
  );
}

  // =====================================================
  // HOME PAGE
  // =====================================================

  return (
    <div className="app">

      {/* =================================================
          NAVBAR
      ================================================= */}

      <header className="navbar">
        <div className="container nav-content">

          {/* LOGO */}

          <button
            className="logo"
            onClick={() =>
              scrollToSection("home")
            }
          >
            <span className="logo-icon">
              ⌂
            </span>

            <span>
              Estate
              <span>Pro</span>
            </span>
          </button>

          {/* NAVIGATION */}

          <nav
            className={
              menuOpen
                ? "nav-links active"
                : "nav-links"
            }
          >

            <button
              onClick={() =>
                scrollToSection("home")
              }
            >
              Home
            </button>

            <button
              onClick={() =>
                scrollToSection(
                  "properties"
                )
              }
            >
              Buy
            </button>

            <button
              onClick={() =>
                scrollToSection(
                  "properties"
                )
              }
            >
              Rent
            </button>

            <button
              onClick={() =>
                scrollToSection("sell")
              }
            >
              Sell
            </button>

            <button
              onClick={() =>
                scrollToSection("about")
              }
            >
              About
            </button>

            <button
              onClick={() =>
                scrollToSection("contact")
              }
            >
              Contact
            </button>

          </nav>

          {/* NAV ACTIONS */}

          <div className="nav-actions">

            <button
              className="login-btn"
              onClick={() =>
                navigateTo("login")
              }
            >
              Login
            </button>

            <button
              className="signup-btn"
              onClick={() =>
                navigateTo("register")
              }
            >
              Get Started
            </button>

            {/* BUYER */}

            <button
              className="profile-btn"
              onClick={() =>
                navigateTo("buyer")
              }
              title="Buyer Dashboard"
            >
              👤
            </button>

            {/* ADMIN */}

      <button
  onClick={() => setCurrentPage("admin-login")}
>
  Admin
</button>
          </div>

          {/* MOBILE MENU */}

          <button
            className="menu-btn"
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
          >
            {menuOpen
              ? "✕"
              : "☰"}
          </button>

        </div>
      </header>

      {/* =================================================
          HERO
      ================================================= */}

      <section
        className="hero"
        id="home"
      >

        <div className="hero-overlay"></div>

        <div className="hero-floating floating-one">
          ✦
        </div>

        <div className="hero-floating floating-two">
          ⌂
        </div>

        <div className="container hero-content">

          {/* HERO TEXT */}

          <div className="hero-text">

            <span className="hero-badge">
              ✦ PREMIUM REAL ESTATE PLATFORM
            </span>

            <h1>
              Find a place
              <br />
              you'll{" "}
              <span>
                love to live.
              </span>
            </h1>

            <p>
              Discover exceptional
              properties, explore prime
              locations and connect with
              trusted sellers — all in one
              beautiful real estate
              experience.
            </p>

            <div className="hero-buttons">
<button
  className="hero-explore-btn"
  onClick={() => setCurrentPage("buyer")}
>
  <span>Explore Properties</span>
  <span className="hero-explore-arrow">→</span>
</button>

              <button
                className="sell-btn"
                onClick={() =>
                  navigateTo("seller")
                }
              >
                List Your Property →
              </button>

            </div>

            {/* TRUST */}

            <div className="hero-trust">

              <div className="avatar-stack">
                <span>J</span>
                <span>A</span>
                <span>R</span>
                <span>+</span>
              </div>

              <div>
                <strong>
                  5,000+
                </strong>

                <small>
                  Happy homeowners
                </small>
              </div>

              <div className="trust-divider"></div>

              <div>
                <strong>
                  4.9/5
                </strong>

                <small>
                  Customer rating ★
                </small>
              </div>

            </div>

          </div>

          {/* =================================================
              SEARCH BOX
          ================================================= */}

          <div className="search-box">

            <div className="search-tabs">

              <button
                className={
                  activeTab === "Buy"
                    ? "active-tab"
                    : ""
                }
                onClick={() =>
                  setActiveTab("Buy")
                }
              >
                Buy
              </button>

              <button
                className={
                  activeTab === "Rent"
                    ? "active-tab"
                    : ""
                }
                onClick={() =>
                  setActiveTab("Rent")
                }
              >
                Rent
              </button>

            </div>

            <div className="search-fields">

              {/* LOCATION */}

              <div className="search-field">

                <label>
                  LOCATION
                </label>

                <div className="input-wrapper">

                  <span>
                    📍
                  </span>

                  <input
                    type="text"
                    placeholder="City, Area or Location"
                    value={location}
                    onChange={(event) =>
                      setLocation(
                        event.target.value
                      )
                    }
                  />

                </div>

              </div>

              {/* PROPERTY TYPE */}

              <div className="search-field">

                <label>
                  PROPERTY TYPE
                </label>

                <select
                  value={propertyType}
                  onChange={(event) =>
                    setPropertyType(
                      event.target.value
                    )
                  }
                >

                  <option value="All">
                    All Properties
                  </option>

                  <option value="Apartment">
                    Apartment
                  </option>

                  <option value="House">
                    House
                  </option>

                  <option value="Villa">
                    Villa
                  </option>

                </select>

              </div>

              {/* PRICE */}

              <div className="search-field">

                <label>
                  PRICE RANGE
                </label>

                <select
                  value={priceRange}
                  onChange={(event) =>
                    setPriceRange(
                      event.target.value
                    )
                  }
                >

                  <option>
                    Any Price
                  </option>

                  <option>
                    Under ₹50 Lakh
                  </option>

                  <option>
                    ₹50 - ₹80 Lakh
                  </option>

                  <option>
                    ₹80 Lakh - ₹1 Crore
                  </option>

                  <option>
                    Above ₹1 Crore
                  </option>

                </select>

              </div>

              {/* SEARCH */}

              <button
                className="search-btn"
                onClick={() =>
                  scrollToSection(
                    "properties"
                  )
                }
              >
                <span>
                  ⌕
                </span>

                Search
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* =================================================
          STATS
      ================================================= */}

      <section className="stats">

        <div className="container stats-grid">

          <div className="stat">

            <strong>
              10K
              <span>+</span>
            </strong>

            <span>
              Premium Properties
            </span>

          </div>

          <div className="stat">

            <strong>
              5K
              <span>+</span>
            </strong>

            <span>
              Happy Customers
            </span>

          </div>

          <div className="stat">

            <strong>
              25
              <span>+</span>
            </strong>

            <span>
              Cities Covered
            </span>

          </div>

          <div className="stat">

            <strong>
              2K
              <span>+</span>
            </strong>

            <span>
              Verified Sellers
            </span>

          </div>

        </div>

      </section>

      {/* =================================================
          PROPERTIES
      ================================================= */}

      <section
        className="properties-section"
        id="properties"
      >

        <div className="container">

          <div className="section-heading">

            <div>

              <span className="small-title">
                DISCOVER YOUR NEXT ADDRESS
              </span>

              <h2>
                Featured Properties
              </h2>

              <p>
                Hand-picked homes from
                trusted property owners.
              </p>

            </div>

            <button
              className="view-all"
              onClick={() =>
                setShowAll(!showAll)
              }
            >
              {showAll
                ? "Show Less ↑"
                : "View All Properties →"}
            </button>

          </div>

          {visibleProperties.length >
          0 ? (

            <div className="property-grid">

              {visibleProperties.map(
                (property) => (

                  <article
                    className="property-card"
                    key={property.id}
                  >

                    {/* IMAGE */}

                    <div className="property-image">

                      <img
                        src={
                          property.image
                        }
                        alt={
                          property.title
                        }
                      />

                      <span className="property-tag">
                        ✓ VERIFIED
                      </span>

                      {/* FAVORITE */}

                      <button
                        className={
                          favorites.includes(
                            property.id
                          )
                            ? "heart-btn liked"
                            : "heart-btn"
                        }
                        onClick={() =>
                          toggleFavorite(
                            property.id
                          )
                        }
                      >
                        {favorites.includes(
                          property.id
                        )
                          ? "♥"
                          : "♡"}
                      </button>

                      <div className="image-bottom">

                        <span>
                          {property.type}
                        </span>

                        <span>
                          View 360°
                        </span>

                      </div>

                    </div>

                    {/* PROPERTY INFO */}

                    <div className="property-info">

                      <div className="property-top">

                        <div className="property-type">
                          {property.type}
                        </div>

                        <span className="property-status">
                          ● Available
                        </span>

                      </div>

                      <h3>
                        {property.title}
                      </h3>

                      <p className="location">
                        📍{" "}
                        {property.location}
                      </p>

                      <div className="property-details">

                        <span>
                          🛏{" "}
                          {property.beds} Beds
                        </span>

                        <span>
                          🛁{" "}
                          {property.baths} Baths
                        </span>

                        <span>
                          📐{" "}
                          {property.area}
                        </span>

                      </div>

                      <div className="property-bottom">

                        <div>

                          <small>
                            Starting from
                          </small>

                          <strong>
                            {property.price}
                          </strong>

                        </div>

                        {/* IMPORTANT */}

                        <button
                          onClick={() =>
                            navigateTo(
                              "property-details"
                            )
                          }
                        >
                          View Details →
                        </button>

                      </div>

                    </div>

                  </article>

                )
              )}

            </div>

          ) : (

            <div className="no-result">

              <div>
                ⌕
              </div>

              <h3>
                No properties found
              </h3>

              <p>
                Try another location,
                property type or price
                range.
              </p>

            </div>

          )}

        </div>

      </section>

      {/* =================================================
          CATEGORIES
      ================================================= */}

      <section className="categories">

        <div className="container">

          <div className="center-heading">

            <span className="small-title">
              FIND WHAT FITS YOU
            </span>

            <h2>
              Explore By Property Type
            </h2>

            <p>
              From modern apartments to
              luxury villas, discover a
              property made for you.
            </p>

          </div>

          <div className="category-grid">

            {categories.map(
              (category) => (

                <button
                  className="category-card"
                  key={
                    category.title
                  }
                  onClick={() => {

                    setPropertyType(
                      category.type
                    );

                    scrollToSection(
                      "properties"
                    );

                  }}
                >

                  <div className="category-icon">
                    {category.icon}
                  </div>

                  <h3>
                    {category.title}
                  </h3>

                  <p>
                    {category.count}
                  </p>

                  <span className="category-arrow">
                    ↗
                  </span>

                </button>

              )
            )}

          </div>

        </div>

      </section>

      {/* =================================================
          EXPERIENCE
      ================================================= */}

      <section className="experience-section">

        <div className="container experience-grid">

          <div className="experience-image">

            <img
              src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=85"
              alt="Premium interior"
            />

            <div className="experience-card">

              <span>
                ✦
              </span>

              <div>

                <strong>
                  Premium Experience
                </strong>

                <small>
                  Designed around your
                  needs
                </small>

              </div>

            </div>

          </div>

          <div className="experience-content">

            <span className="small-title">
              THE ESTATEPRO DIFFERENCE
            </span>

            <h2>
              More than a property.
              <span>
                {" "}
                It's your next chapter.
              </span>
            </h2>

            <p>
              Buying or selling a home
              should feel exciting, not
              complicated. EstatePro
              brings properties, people,
              locations and communication
              together in one seamless
              platform.
            </p>

            <div className="experience-list">

              <div>

                <span>
                  01
                </span>

                <div>

                  <h4>
                    Verified Properties
                  </h4>

                  <p>
                    Browse properties
                    reviewed by our
                    platform.
                  </p>

                </div>

              </div>

              <div>

                <span>
                  02
                </span>

                <div>

                  <h4>
                    Trusted Sellers
                  </h4>

                  <p>
                    Connect with genuine
                    property owners.
                  </p>

                </div>

              </div>

              <div>

                <span>
                  03
                </span>

                <div>

                  <h4>
                    Smart Discovery
                  </h4>

                  <p>
                    Find homes based on
                    your location and
                    needs.
                  </p>

                </div>

              </div>

            </div>

            <button
              className="dark-btn"
              onClick={() =>
                scrollToSection(
                  "properties"
                )
              }
            >
              Discover EstatePro →
            </button>

          </div>

        </div>

      </section>

      {/* =================================================
          SELL PROPERTY
      ================================================= */}

      <section
        className="sell-section"
        id="sell"
      >

        <div className="sell-glow"></div>

        <div className="container sell-container">

          <div className="sell-content">

            <span className="small-title light">
              SELL WITH CONFIDENCE
            </span>

            <h2>
              Your property
              <br />
              deserves the spotlight.
            </h2>

            <p>
              List your property on
              EstatePro and connect with
              verified buyers looking for
              their next home.
            </p>

            <div className="sell-points">

              <span>
                ✓ Easy property listing
              </span>

              <span>
                ✓ Verified buyer reach
              </span>

              <span>
                ✓ Direct communication
              </span>

            </div>

            <button
              className="sell-btn"
              onClick={() =>
                navigateTo("seller")
              }
            >
              List Your Property →
            </button>

          </div>

          <div className="sell-image">

            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"
              alt="Luxury property"
            />

            <div className="sell-image-card">

              <strong>
                2,000+
              </strong>

              <span>
                Verified sellers
              </span>

            </div>

          </div>

        </div>

      </section>

      {/* =================================================
          WHY ESTATEPRO
      ================================================= */}

      <section
        className="why-section"
        id="about"
      >

        <div className="container">

          <div className="center-heading">

            <span className="small-title">
              BUILT FOR MODERN REAL ESTATE
            </span>

            <h2>
              Everything you need,
              <br />
              in one place.
            </h2>

            <p>
              A smarter experience for
              buyers and sellers.
            </p>

          </div>

          <div className="why-grid">

            <div className="why-card">

              <div className="why-number">
                01
              </div>

              <div className="why-icon">
                ✓
              </div>

              <h3>
                Verified Properties
              </h3>

              <p>
                Discover properties reviewed
                for a safer and more reliable
                experience.
              </p>

            </div>

            <div className="why-card">

              <div className="why-number">
                02
              </div>

              <div className="why-icon">
                ⌁
              </div>

              <h3>
                Direct Communication
              </h3>

              <p>
                Connect directly with sellers
                and discuss property details
                easily.
              </p>

            </div>

            <div className="why-card">

              <div className="why-number">
                03
              </div>

              <div className="why-icon">
                ⌖
              </div>

              <h3>
                Location Discovery
              </h3>

              <p>
                Explore properties based on
                locations that match your
                lifestyle.
              </p>

            </div>

            <div className="why-card">

              <div className="why-number">
                04
              </div>

              <div className="why-icon">
                ◆
              </div>

              <h3>
                Premium Experience
              </h3>

              <p>
                A clean, modern and
                interactive platform designed
                for effortless property
                discovery.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =================================================
          FINAL CTA
      ================================================= */}

      <section className="final-cta">

        <div className="cta-pattern"></div>

        <div className="container final-cta-content">

          <span>
            YOUR NEXT HOME IS CLOSER THAN
            YOU THINK
          </span>

          <h2>
            Let's find the place
            <br />
            that feels like{" "}
            <i>home.</i>
          </h2>

          <button
            onClick={() =>
              scrollToSection(
                "properties"
              )
            }
          >
            Start Exploring →
          </button>

        </div>

      </section>

      {/* =================================================
          FOOTER
      ================================================= */}

      <footer id="contact">

        <div className="container footer-grid">

          {/* BRAND */}

          <div className="footer-brand">

            <div className="logo">

              <span className="logo-icon">
                ⌂
              </span>

              <span>
                Estate
                <span>Pro</span>
              </span>

            </div>

            <p>
              A smarter and more beautiful
              way to discover, buy and sell
              real estate.
            </p>

            <div className="socials">

              <span>
                in
              </span>

              <span>
                𝕏
              </span>

              <span>
                ◎
              </span>

              <span>
                f
              </span>

            </div>

          </div>

          {/* EXPLORE */}

          <div>

            <h4>
              Explore
            </h4>

            <button
              onClick={() =>
                scrollToSection(
                  "home"
                )
              }
            >
              Home
            </button>

            <button
              onClick={() =>
                scrollToSection(
                  "properties"
                )
              }
            >
              Buy Property
            </button>

            <button
              onClick={() =>
                scrollToSection(
                  "properties"
                )
              }
            >
              Rent Property
            </button>

            <button
              onClick={() =>
                scrollToSection(
                  "sell"
                )
              }
            >
              Sell Property
            </button>

          </div>

          {/* COMPANY */}

          <div>

            <h4>
              Company
            </h4>

            <button
              onClick={() =>
                scrollToSection(
                  "about"
                )
              }
            >
              About Us
            </button>

            <button
              onClick={() =>
                scrollToSection(
                  "contact"
                )
              }
            >
              Contact
            </button>

            <button
              onClick={() =>
                scrollToSection(
                  "home"
                )
              }
            >
              Careers
            </button>

            <button
              onClick={() =>
                scrollToSection(
                  "home"
                )
              }
            >
              Privacy Policy
            </button>

          </div>

          {/* CONTACT */}

          <div>

            <h4>
              Get in touch
            </h4>

            <p>
              📍 Gujarat, India
            </p>

            <p>
              📞 +91 98765 43210
            </p>

            <p>
              ✉️ hello@estatepro.com
            </p>

          </div>

        </div>

        {/* COPYRIGHT */}

        <div className="copyright">

          <div className="container">

            <span>
              © 2026 EstatePro.
              All Rights Reserved.
            </span>

            <span>
              Built for the future of
              real estate.
            </span>

          </div>

        </div>

      </footer>

    </div>
  );
}

// =====================================================
// EXPORT
// =====================================================

export default App;