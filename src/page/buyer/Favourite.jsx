import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Favourite.css";

const initialFavorites = [
  {
    id: 1,
    title: "Luxury Modern Villa",
    location: "Satellite, Ahmedabad",
    price: "₹1.25 Cr",
    type: "Villa",
    beds: 4,
    baths: 3,
    area: "2,850 sq.ft",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 2,
    title: "Premium City Apartment",
    location: "Vastrapur, Ahmedabad",
    price: "₹72 L",
    type: "Apartment",
    beds: 3,
    baths: 2,
    area: "1,650 sq.ft",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 3,
    title: "Elegant Family Home",
    location: "Manjalpur, Vadodara",
    price: "₹85 L",
    type: "House",
    beds: 3,
    baths: 3,
    area: "2,100 sq.ft",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
  },
];

function Favourite() {
  const navigate = useNavigate();
  const [favorites, setFavorites] =
    useState(initialFavorites);

  const removeFavorite = (id) => {
    setFavorites((items) =>
      items.filter((item) => item.id !== id)
    );
  };

  return (
    <div className="favourite-page">
      <header className="fav-header">
        <div className="fav-brand">
          <Link to="/buyer-dashboard">
            <div className="fav-logo">EP</div>

            <div>
              <strong>
                Estate<span>Pro</span>
              </strong>
              <small>BUYER PORTAL</small>
            </div>
          </Link>
        </div>

        <button
          onClick={() => navigate("/buyer-dashboard")}
          className="fav-back-btn"
        >
          ← Dashboard
        </button>
      </header>

      <main className="fav-container">
        <section className="fav-hero">
          <div>
            <span>YOUR COLLECTION</span>

            <h1>
              Properties you
              <br />
              <strong>love.</strong>
            </h1>

            <p>
              Keep your favourite properties here and
              compare them whenever you want.
            </p>
          </div>

          <div className="fav-heart-animation">
            ♥
          </div>
        </section>

        <div className="fav-heading">
          <div>
            <span>MY FAVOURITES</span>
            <h2>
              Saved Properties
              <b>{favorites.length}</b>
            </h2>
          </div>

          <Link to="/buyer-dashboard">
            + Explore More
          </Link>
        </div>

        {favorites.length > 0 ? (
          <div className="fav-grid">
            {favorites.map((property) => (
              <article
                className="fav-card"
                key={property.id}
              >
                <div className="fav-image">
                  <img
                    src={property.image}
                    alt={property.title}
                  />

                  <span>{property.type}</span>

                  <button
                    onClick={() =>
                      removeFavorite(property.id)
                    }
                  >
                    ♥
                  </button>
                </div>

                <div className="fav-content">
                  <small>
                    <span>⌖</span>
                    {property.location}
                  </small>

                  <h3>{property.title}</h3>

                  <strong>{property.price}</strong>

                  <div className="fav-features">
                    <span>🛏 {property.beds} Beds</span>
                    <span>♨ {property.baths} Baths</span>
                    <span>▧ {property.area}</span>
                  </div>

                  <Link
                    to={`/property/${property.id}`}
                    className="fav-view"
                  >
                    View Property →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="fav-empty">
            <div>♡</div>
            <h2>No favourite properties</h2>
            <p>
              Start exploring and save properties you love.
            </p>

            <Link to="/buyer-dashboard">
              Explore Properties →
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}

export default Favourite;