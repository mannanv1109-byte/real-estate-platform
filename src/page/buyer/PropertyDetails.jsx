import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./PropertyDetails.css";

const propertyData = {
  1: {
    title: "Luxury Modern Villa",
    location: "Satellite, Ahmedabad",
    price: "₹1.25 Cr",
    type: "Villa",
    beds: 4,
    baths: 3,
    area: "2,850 sq.ft",
    status: "For Sale",
    description:
      "Experience modern luxury in this beautifully designed villa featuring spacious interiors, premium finishes, natural lighting and a peaceful residential environment. Perfect for families looking for comfort, privacy and a premium lifestyle.",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=90",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=90",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=90",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=90",
    ],
    amenities: [
      "Covered Parking",
      "Swimming Pool",
      "24/7 Security",
      "Garden",
      "Power Backup",
      "Smart Home",
    ],
  },

  2: {
    title: "Premium City Apartment",
    location: "Vastrapur, Ahmedabad",
    price: "₹72 L",
    type: "Apartment",
    beds: 3,
    baths: 2,
    area: "1,650 sq.ft",
    status: "For Sale",
    description:
      "A premium city apartment with elegant interiors, excellent connectivity and modern amenities. The property is located close to shopping centres, schools, hospitals and major roads.",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=90",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=90",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=90",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=90",
    ],
    amenities: [
      "Parking",
      "Lift",
      "Security",
      "Gym",
      "Club House",
      "Power Backup",
    ],
  },

  3: {
    title: "Elegant Family Home",
    location: "Manjalpur, Vadodara",
    price: "₹85 L",
    type: "House",
    beds: 3,
    baths: 3,
    area: "2,100 sq.ft",
    status: "For Sale",
    description:
      "A comfortable family home with spacious bedrooms, modern kitchen, beautiful living spaces and excellent neighbourhood connectivity.",
    images: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=90",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=90",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1400&q=90",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=90",
    ],
    amenities: [
      "Parking",
      "Garden",
      "Security",
      "Water Supply",
      "Terrace",
      "Modular Kitchen",
    ],
  },
};

function PropertyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const property =
    propertyData[id] || propertyData[1];

  const [activeImage, setActiveImage] = useState(0);
  const [liked, setLiked] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const nextImage = () => {
    setActiveImage(
      (activeImage + 1) % property.images.length
    );
  };

  const previousImage = () => {
    setActiveImage(
      (activeImage - 1 + property.images.length) %
        property.images.length
    );
  };

  return (
    <div className="property-details-page">
      {/* HEADER */}
      <header className="details-header">
        <div className="details-brand">
          <Link to="/buyer-dashboard">
            <div className="details-logo">EP</div>

            <div>
              <strong>
                Estate<span>Pro</span>
              </strong>
              <small>REAL ESTATE</small>
            </div>
          </Link>
        </div>

        <div className="details-header-actions">
          <button
            className={`details-like ${
              liked ? "active" : ""
            }`}
            onClick={() => setLiked(!liked)}
          >
            {liked ? "♥" : "♡"}
          </button>

          <button
            className="details-share"
            onClick={() =>
              navigator.clipboard?.writeText(window.location.href)
            }
          >
            ↗
          </button>

          <button
            className="back-dashboard"
            onClick={() => navigate("/buyer-dashboard")}
          >
            ← Dashboard
          </button>
        </div>
      </header>

      <main className="details-container">
        {/* BREADCRUMB */}
        <div className="details-breadcrumb">
          <Link to="/buyer-dashboard">Dashboard</Link>
          <span>/</span>
          <span>Properties</span>
          <span>/</span>
          <strong>{property.title}</strong>
        </div>

        {/* IMAGE GALLERY */}
        <section className="details-gallery">
          <div className="main-property-image">
            <img
              src={property.images[activeImage]}
              alt={property.title}
            />

            <div className="gallery-overlay" />

            <span className="sale-badge">
              {property.status}
            </span>

            <span className="gallery-count">
              {activeImage + 1} / {property.images.length}
            </span>

            <button
              className="gallery-arrow gallery-prev"
              onClick={previousImage}
            >
              ‹
            </button>

            <button
              className="gallery-arrow gallery-next"
              onClick={nextImage}
            >
              ›
            </button>

            <div className="verified-property">
              ✓ Verified Property
            </div>
          </div>

          <div className="thumbnail-list">
            {property.images.map((image, index) => (
              <button
                key={image}
                className={`property-thumbnail ${
                  activeImage === index ? "active" : ""
                }`}
                onClick={() => setActiveImage(index)}
              >
                <img
                  src={image}
                  alt={`Property ${index + 1}`}
                />
              </button>
            ))}
          </div>
        </section>

        {/* PROPERTY INFO */}
        <section className="details-main-grid">
          <div className="details-left">
            <div className="details-title-area">
              <div>
                <span className="details-type">
                  {property.type}
                </span>

                <h1>{property.title}</h1>

                <p className="details-location">
                  <span>⌖</span>
                  {property.location}
                </p>
              </div>

              <div className="details-price">
                <small>PROPERTY PRICE</small>
                <strong>{property.price}</strong>
              </div>
            </div>

            {/* FEATURES */}
            <div className="details-feature-box">
              <div>
                <span>🛏</span>
                <strong>{property.beds}</strong>
                <small>Bedrooms</small>
              </div>

              <div>
                <span>♨</span>
                <strong>{property.baths}</strong>
                <small>Bathrooms</small>
              </div>

              <div>
                <span>▧</span>
                <strong>{property.area}</strong>
                <small>Built-up Area</small>
              </div>

              <div>
                <span>⌂</span>
                <strong>Ready</strong>
                <small>Property Status</small>
              </div>
            </div>

            {/* DESCRIPTION */}
            <div className="details-section">
              <div className="details-section-heading">
                <span />
                <h2>About this property</h2>
              </div>

              <p className="property-description">
                {property.description}
              </p>
            </div>

            {/* AMENITIES */}
            <div className="details-section">
              <div className="details-section-heading">
                <span />
                <h2>Property amenities</h2>
              </div>

              <div className="amenities-grid">
                {property.amenities.map((amenity) => (
                  <div
                    className="amenity-item"
                    key={amenity}
                  >
                    <span>✓</span>
                    {amenity}
                  </div>
                ))}
              </div>
            </div>

            {/* LOCATION */}
            <div className="details-section">
              <div className="details-section-heading">
                <span />
                <h2>Property location</h2>
              </div>

              <div className="property-map">
                <div className="map-grid">
                  <div className="map-road road-one" />
                  <div className="map-road road-two" />
                  <div className="map-road road-three" />
                  <div className="map-pin">⌖</div>

                  <div className="map-label">
                    {property.location}
                  </div>
                </div>

                <button
                  onClick={() =>
                    alert(
                      `Map location: ${property.location}`
                    )
                  }
                >
                  Open Map ↗
                </button>
              </div>
            </div>
          </div>

          {/* SELLER CARD */}
          <aside className="seller-sidebar-card">
            <div className="seller-card-top">
              <span>PROPERTY OWNER</span>

              <div className="seller-verified">
                ✓ Verified
              </div>
            </div>

            <div className="seller-profile">
              <div className="seller-large-avatar">
                RK
              </div>

              <div>
                <h3>Rajesh Kumar</h3>
                <p>Premium Property Seller</p>

                <div className="seller-rating">
                  ★★★★★
                  <span>4.9</span>
                </div>
              </div>
            </div>

            <div className="seller-divider" />

            <div className="seller-stat-row">
              <div>
                <strong>18</strong>
                <span>Properties</span>
              </div>

              <div>
                <strong>5+</strong>
                <span>Years</span>
              </div>

              <div>
                <strong>98%</strong>
                <span>Response</span>
              </div>
            </div>

            <div className="seller-actions">
              <button
                className="primary-contact-btn"
                onClick={() =>
                  setShowContact(!showContact)
                }
              >
                <span>☎</span>
                {showContact
                  ? "Hide Contact"
                  : "Contact Seller"}
              </button>

              <button
                className="chat-seller-btn"
                onClick={() => navigate("/buyer-chat")}
              >
                <span>◌</span>
                Chat
              </button>
            </div>

            {showContact && (
              <div className="seller-contact-box">
                <small>SELLER CONTACT</small>

                <strong>+91 98XXXXXX42</strong>

                <span>
                  Seller will receive your enquiry.
                </span>
              </div>
            )}

            <div className="secure-box">
              <span>🛡</span>

              <div>
                <strong>Safe & Verified</strong>
                <p>
                  EstatePro has verified this property
                  listing.
                </p>
              </div>
            </div>

            <button
              className="buy-property-btn"
              onClick={() =>
                alert(
                  "Property enquiry submitted successfully!"
                )
              }
            >
              Request Property
              <span>→</span>
            </button>
          </aside>
        </section>
      </main>
    </div>
  );
}

export default PropertyDetails;