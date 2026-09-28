import React, { useState } from "react";
import "./BuyerDashboard.css";

const properties = [
  {
    id: 1,
    title: "Luxury Villa",
    location: "Bopal, Ahmedabad",
    price: "₹1.25 Cr",
    type: "Villa",
    bhk: "4 BHK",
    area: "2,450 sq.ft",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
    status: "For Sale",
  },
  {
    id: 2,
    title: "Modern Apartment",
    location: "Vastrapur, Ahmedabad",
    price: "₹78 Lakh",
    type: "Apartment",
    bhk: "3 BHK",
    area: "1,650 sq.ft",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
    status: "For Sale",
  },
  {
    id: 3,
    title: "Premium Residence",
    location: "Gotri, Vadodara",
    price: "₹92 Lakh",
    type: "House",
    bhk: "3 BHK",
    area: "1,980 sq.ft",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80",
    status: "For Sale",
  },
  {
    id: 4,
    title: "Royal Family Home",
    location: "Manjalpur, Vadodara",
    price: "₹1.10 Cr",
    type: "Villa",
    bhk: "4 BHK",
    area: "2,300 sq.ft",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=900&q=80",
    status: "For Sale",
  },
  {
    id: 5,
    title: "Green Valley Home",
    location: "New Ranip, Ahmedabad",
    price: "₹68 Lakh",
    type: "House",
    bhk: "3 BHK",
    area: "1,750 sq.ft",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
    status: "For Sale",
  },
  {
    id: 6,
    title: "Skyline Apartment",
    location: "Alkapuri, Vadodara",
    price: "₹85 Lakh",
    type: "Apartment",
    bhk: "3 BHK",
    area: "1,550 sq.ft",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80",
    status: "For Sale",
  },
];

function BuyerDashboard({ onBackHome }) {
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [favourites, setFavourites] = useState([2, 5]);
  const [search, setSearch] = useState("");

  const toggleFavourite = (id) => {
    setFavourites((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  const filteredProperties = properties.filter((property) => {
    const value = search.toLowerCase();

    return (
      property.title.toLowerCase().includes(value) ||
      property.location.toLowerCase().includes(value) ||
      property.type.toLowerCase().includes(value)
    );
  });

  const menuItems = [
    {
      section: "MAIN MENU",
      items: [
        { name: "Dashboard", icon: "⌂" },
        { name: "Profile", icon: "◉" },
        { name: "Favourite Properties", icon: "♡" },
        { name: "Purchased Property", icon: "▣" },
        { name: "Messages", icon: "✉", count: 3 },
        { name: "Recently Viewed", icon: "◷" },
      ],
    },
    {
      section: "ACCOUNT",
      items: [
        { name: "Settings", icon: "⚙" },
        { name: "Logout", icon: "↪" },
      ],
    },
  ];

  const handleMenu = (name) => {
    if (name === "Logout") {
      if (onBackHome) {
        onBackHome();
      }
      return;
    }

    setActiveMenu(name);
  };

  const renderDashboard = () => (
    <>
      <div className="buyer-page-heading">
        <div>
          <span className="buyer-overline">ESTATEPRO / BUYER</span>
          <h1>Welcome back, Jainam 👋</h1>
          <p>
            Discover your next property and manage your real-estate journey.
          </p>
        </div>

        <button
          className="buyer-explore-btn"
          onClick={() => setActiveMenu("Favourite Properties")}
        >
          <span>♡</span>
          My Favourites
        </button>
      </div>

      {/* STATISTICS */}
      <div className="buyer-stat-grid">
        <div className="buyer-stat-card">
          <div className="buyer-stat-icon gold">⌂</div>
          <div>
            <span>Viewed Properties</span>
            <strong>24</strong>
            <small>+12% this month</small>
          </div>
        </div>

        <div className="buyer-stat-card">
          <div className="buyer-stat-icon red">♡</div>
          <div>
            <span>Favourite Properties</span>
            <strong>{favourites.length}</strong>
            <small>Saved for later</small>
          </div>
        </div>

        <div className="buyer-stat-card">
          <div className="buyer-stat-icon green">✓</div>
          <div>
            <span>Purchased Property</span>
            <strong>2</strong>
            <small>Successfully purchased</small>
          </div>
        </div>

        <div className="buyer-stat-card">
          <div className="buyer-stat-icon blue">✉</div>
          <div>
            <span>Messages</span>
            <strong>3</strong>
            <small>Unread messages</small>
          </div>
        </div>
      </div>

      {/* SEARCH */}
      <div className="buyer-search-box">
        <div className="search-symbol">⌕</div>

        <input
          type="text"
          placeholder="Search property, location or property type..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
          onClick={() => setSearch("")}
          className="clear-search"
        >
          Clear
        </button>

        <button
          className="search-property-btn"
          onClick={() => setActiveMenu("Recently Viewed")}
        >
          Search Property
        </button>
      </div>

      {/* PROPERTY SECTION */}
      <div className="buyer-section-heading">
        <div>
          <span>DISCOVER</span>
          <h2>Recommended Properties</h2>
        </div>

        <button onClick={() => setActiveMenu("Recently Viewed")}>
          View All →
        </button>
      </div>

      <div className="buyer-property-grid">
        {filteredProperties.slice(0, 6).map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
            favourite={favourites.includes(property.id)}
            onFavourite={toggleFavourite}
          />
        ))}
      </div>

      {/* BOTTOM GRID */}
      <div className="buyer-bottom-grid">
        <div className="buyer-panel">
          <div className="buyer-panel-heading">
            <div>
              <span>ACTIVITY</span>
              <h3>Recently Viewed</h3>
            </div>

            <button onClick={() => setActiveMenu("Recently Viewed")}>
              View All
            </button>
          </div>

          <div className="recent-list">
            {properties.slice(0, 3).map((property) => (
              <div className="recent-item" key={property.id}>
                <img src={property.image} alt={property.title} />

                <div>
                  <strong>{property.title}</strong>
                  <span>{property.location}</span>
                  <b>{property.price}</b>
                </div>

                <span className="recent-arrow">→</span>
              </div>
            ))}
          </div>
        </div>

        <div className="buyer-panel buyer-message-panel">
          <div className="buyer-panel-heading">
            <div>
              <span>COMMUNICATION</span>
              <h3>Recent Messages</h3>
            </div>

            <button onClick={() => setActiveMenu("Messages")}>
              Open Chat
            </button>
          </div>

          <div className="mini-message">
            <div className="message-avatar">RP</div>

            <div>
              <strong>Rahul Patel</strong>
              <span>Seller • Luxury Villa</span>
              <p>
                Hello, the property is available for visit...
              </p>
            </div>

            <small>2m</small>
          </div>

          <div className="mini-message">
            <div className="message-avatar">AM</div>

            <div>
              <strong>Amit Mehta</strong>
              <span>Seller • Modern Apartment</span>
              <p>
                You can schedule a property visit tomorrow.
              </p>
            </div>

            <small>1h</small>
          </div>
        </div>
      </div>
    </>
  );

  const renderFavourites = () => (
    <>
      <PageHeader
        label="MY COLLECTION"
        title="Favourite Properties"
        description="Properties you saved for future consideration."
      />

      {favourites.length === 0 ? (
        <EmptyState
          icon="♡"
          title="No Favourite Properties"
          text="Start exploring properties and save the ones you like."
        />
      ) : (
        <div className="buyer-property-grid">
          {properties
            .filter((property) => favourites.includes(property.id))
            .map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                favourite={true}
                onFavourite={toggleFavourite}
              />
            ))}
        </div>
      )}
    </>
  );

  const renderPurchased = () => (
    <>
      <PageHeader
        label="MY INVESTMENTS"
        title="Purchased Property"
        description="Manage your purchased and booked properties."
      />

      <div className="purchase-card">
        <div className="purchase-image">
          <img src={properties[0].image} alt="Purchased property" />
          <span>Purchased</span>
        </div>

        <div className="purchase-info">
          <span className="purchase-label">PROPERTY PURCHASED</span>
          <h2>Luxury Villa</h2>
          <p>📍 Bopal, Ahmedabad</p>

          <div className="purchase-meta">
            <span>4 BHK</span>
            <span>2,450 sq.ft</span>
            <span>Villa</span>
          </div>

          <strong>₹1.25 Cr</strong>
        </div>

        <div className="purchase-status">
          <span>✓</span>
          <strong>Purchase Completed</strong>
          <small>Transaction ID: EP2026-001</small>
          <button>View Details</button>
        </div>
      </div>

      <div className="purchase-card second">
        <div className="purchase-image">
          <img src={properties[2].image} alt="Purchased property" />
          <span>Booked</span>
        </div>

        <div className="purchase-info">
          <span className="purchase-label">PROPERTY BOOKED</span>
          <h2>Premium Residence</h2>
          <p>📍 Gotri, Vadodara</p>

          <div className="purchase-meta">
            <span>3 BHK</span>
            <span>1,980 sq.ft</span>
            <span>House</span>
          </div>

          <strong>₹92 Lakh</strong>
        </div>

        <div className="purchase-status booked">
          <span>◷</span>
          <strong>Booking Confirmed</strong>
          <small>Visit scheduled</small>
          <button>View Details</button>
        </div>
      </div>
    </>
  );

  const renderRecentlyViewed = () => (
    <>
      <PageHeader
        label="PROPERTY ACTIVITY"
        title="Recently Viewed"
        description="Continue exploring properties you recently checked."
      />

      <div className="buyer-property-grid">
        {properties.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
            favourite={favourites.includes(property.id)}
            onFavourite={toggleFavourite}
          />
        ))}
      </div>
    </>
  );

  const renderMessages = () => (
    <>
      <PageHeader
        label="COMMUNICATION"
        title="Messages"
        description="Connect with sellers and discuss property details."
      />

      <div className="buyer-chat-preview">
        <div className="chat-contact-list">
          <div className="chat-contact active">
            <div className="message-avatar">RP</div>
            <div>
              <strong>Rahul Patel</strong>
              <span>Luxury Villa</span>
            </div>
            <small>2m</small>
          </div>

          <div className="chat-contact">
            <div className="message-avatar">AM</div>
            <div>
              <strong>Amit Mehta</strong>
              <span>Modern Apartment</span>
            </div>
            <small>1h</small>
          </div>

          <div className="chat-contact">
            <div className="message-avatar">PS</div>
            <div>
              <strong>Priya Shah</strong>
              <span>Green Valley Home</span>
            </div>
            <small>3h</small>
          </div>
        </div>

        <div className="chat-window">
          <div className="chat-window-header">
            <div className="message-avatar">RP</div>

            <div>
              <strong>Rahul Patel</strong>
              <span>● Online</span>
            </div>

            <button>⋮</button>
          </div>

          <div className="chat-messages">
            <div className="chat-date">Today</div>

            <div className="chat-bubble seller">
              Hello! Are you interested in the Luxury Villa?
            </div>

            <div className="chat-bubble buyer">
              Yes, I would like to visit the property.
            </div>

            <div className="chat-bubble seller">
              Sure. We can arrange a visit tomorrow.
            </div>
          </div>

          <div className="chat-input">
            <input placeholder="Type your message..." />
            <button>➤</button>
          </div>
        </div>
      </div>
    </>
  );

  const renderProfile = () => (
    <>
      <PageHeader
        label="ACCOUNT"
        title="My Profile"
        description="Manage your personal information."
      />

      <div className="buyer-profile-layout">
        <div className="buyer-profile-card">
          <div className="large-avatar">JK</div>

          <h2>Jainam Kachhiya</h2>
          <span>Verified Buyer</span>

          <button>Edit Profile</button>
        </div>

        <div className="buyer-information-card">
          <h3>Personal Information</h3>

          <div className="buyer-info-grid">
            <div>
              <span>Full Name</span>
              <strong>Jainam Kachhiya</strong>
            </div>

            <div>
              <span>Email</span>
              <strong>jainam@example.com</strong>
            </div>

            <div>
              <span>Phone</span>
              <strong>+91 XXXXX XXXXX</strong>
            </div>

            <div>
              <span>Account Type</span>
              <strong>Buyer</strong>
            </div>

            <div>
              <span>Location</span>
              <strong>Gujarat, India</strong>
            </div>

            <div>
              <span>Member Since</span>
              <strong>2026</strong>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const renderSettings = () => (
    <>
      <PageHeader
        label="ACCOUNT SETTINGS"
        title="Settings"
        description="Control your account and notification preferences."
      />

      <div className="settings-panel">
        <Setting
          title="Email Notifications"
          description="Receive updates about new properties and activities."
          checked={true}
        />

        <Setting
          title="Property Recommendations"
          description="Get personalised property recommendations."
          checked={true}
        />

        <Setting
          title="Seller Messages"
          description="Receive instant notifications from sellers."
          checked={true}
        />

        <Setting
          title="Marketing Notifications"
          description="Receive offers and promotional information."
          checked={false}
        />

        <Setting
          title="Profile Visibility"
          description="Allow verified sellers to contact you."
          checked={true}
        />
      </div>
    </>
  );

  const renderActivePage = () => {
    switch (activeMenu) {
      case "Dashboard":
        return renderDashboard();

      case "Favourite Properties":
        return renderFavourites();

      case "Purchased Property":
        return renderPurchased();

      case "Messages":
        return renderMessages();

      case "Recently Viewed":
        return renderRecentlyViewed();

      case "Profile":
        return renderProfile();

      case "Settings":
        return renderSettings();

      default:
        return renderDashboard();
    }
  };

  return (
    <div className="buyer-dashboard">

      {/* SIDEBAR */}
      <aside className="buyer-sidebar">

        <div className="buyer-logo">
          <div className="buyer-logo-mark">E</div>

          <div>
            <h2>Estate<span>Pro</span></h2>
            <small>BUYER PORTAL</small>
          </div>
        </div>

        <div className="buyer-mini-profile">
          <div className="buyer-mini-avatar">JK</div>

          <div>
            <strong>Jainam K.</strong>
            <span>Verified Buyer</span>
          </div>

          <div className="online-indicator"></div>
        </div>

        <div className="buyer-navigation">

          {menuItems.map((section) => (
            <div className="buyer-nav-section" key={section.section}>

              <span className="buyer-section-title">
                {section.section}
              </span>

              {section.items.map((item) => (
                <button
                  key={item.name}
                  className={`buyer-nav-item ${
                    activeMenu === item.name ? "active" : ""
                  } ${item.name === "Logout" ? "logout-item" : ""}`}
                  onClick={() => handleMenu(item.name)}
                >
                  <span className="buyer-nav-icon">{item.icon}</span>

                  <span className="buyer-nav-text">
                    {item.name}
                  </span>

                  {item.count && (
                    <span className="buyer-message-count">
                      {item.count}
                    </span>
                  )}
                </button>
              ))}

            </div>
          ))}

        </div>

        <div className="buyer-sidebar-footer">

          <button
            className="buyer-back-home"
            onClick={onBackHome}
          >
            <span>←</span>
            Back to Website
          </button>

          <div className="buyer-sidebar-version">
            EstatePro v1.0 • Buyer Portal
          </div>

        </div>

      </aside>

      {/* MAIN */}
      <main className="buyer-main">

        {/* TOPBAR */}
        <header className="buyer-topbar">

          <div className="buyer-breadcrumb">
            <span>EstatePro</span>
            <b>/</b>
            <strong>{activeMenu}</strong>
          </div>

          <div className="buyer-top-actions">

            <button
              className="buyer-top-icon"
              onClick={() => setActiveMenu("Messages")}
            >
              ✉
              <span className="top-notification">3</span>
            </button>

            <button
              className="buyer-top-icon"
              onClick={() => setActiveMenu("Favourite Properties")}
            >
              ♡
            </button>

            <div className="buyer-top-profile">
              <div className="buyer-top-avatar">JK</div>

              <div>
                <strong>Jainam Kachhiya</strong>
                <span>Buyer Account</span>
              </div>
            </div>

          </div>

        </header>

        {/* PAGE CONTENT */}
        <section className="buyer-content">

          <div className="buyer-content-inner">
            {renderActivePage()}
          </div>

        </section>

      </main>

    </div>
  );
}


/* =========================================
   PROPERTY CARD
========================================= */

function PropertyCard({
  property,
  favourite,
  onFavourite,
}) {
  return (
    <article className="buyer-property-card">

      <div className="property-image-wrapper">

        <img
          src={property.image}
          alt={property.title}
        />

        <span className="property-status">
          {property.status}
        </span>

        <button
          className={`property-heart ${
            favourite ? "liked" : ""
          }`}
          onClick={() => onFavourite(property.id)}
        >
          {favourite ? "♥" : "♡"}
        </button>

        <div className="property-image-overlay"></div>

      </div>

      <div className="buyer-property-body">

        <div className="property-type">
          {property.type}
        </div>

        <h3>{property.title}</h3>

        <p className="property-location">
          📍 {property.location}
        </p>

        <div className="property-details">
          <span>🛏 {property.bhk}</span>
          <span>▣ {property.area}</span>
        </div>

        <div className="property-card-bottom">

          <strong>{property.price}</strong>

          <button>
            View →
          </button>

        </div>

      </div>

    </article>
  );
}


/* =========================================
   PAGE HEADER
========================================= */

function PageHeader({
  label,
  title,
  description,
}) {
  return (
    <div className="buyer-page-heading">

      <div>
        <span className="buyer-overline">
          {label}
        </span>

        <h1>{title}</h1>

        <p>{description}</p>
      </div>

      <div className="page-header-decoration">
        ESTATEPRO
      </div>

    </div>
  );
}


/* =========================================
   EMPTY STATE
========================================= */

function EmptyState({
  icon,
  title,
  text,
}) {
  return (
    <div className="buyer-empty-state">

      <div>{icon}</div>

      <h2>{title}</h2>

      <p>{text}</p>

      <button>
        Explore Properties
      </button>

    </div>
  );
}


/* =========================================
   SETTINGS
========================================= */

function Setting({
  title,
  description,
  checked,
}) {
  return (
    <div className="buyer-setting">

      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <label className="buyer-toggle">
        <input
          type="checkbox"
          defaultChecked={checked}
        />
        <span></span>
      </label>

    </div>
  );
}

export default BuyerDashboard;