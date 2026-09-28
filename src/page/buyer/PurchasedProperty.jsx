import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./PurchasedProperty.css";

const purchasedData = [
  {
    id: 1,
    title: "Modern Family Residence",
    location: "Gotri, Vadodara",
    price: "₹78 L",
    date: "12 Aug 2026",
    status: "Completed",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 2,
    title: "Premium City Apartment",
    location: "Vastrapur, Ahmedabad",
    price: "₹65 L",
    date: "02 Sep 2026",
    status: "Processing",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
  },
];

function PurchasedProperty() {
  const navigate = useNavigate();

  const [properties, setProperties] =
    useState(purchasedData);

  const [activeTab, setActiveTab] = useState("All");

  const filtered =
    activeTab === "All"
      ? properties
      : properties.filter(
          (item) => item.status === activeTab
        );

  const downloadDocument = (name) => {
    alert(`${name} download started.`);
  };

  return (
    <div className="purchased-page">
      <header className="purchased-header">
        <div className="purchased-brand">
          <Link to="/buyer-dashboard">
            <div>EP</div>

            <span>
              Estate<span>Pro</span>
              <small>BUYER PORTAL</small>
            </span>
          </Link>
        </div>

        <button
          onClick={() => navigate("/buyer-dashboard")}
          className="purchased-back"
        >
          ← Dashboard
        </button>
      </header>

      <main className="purchased-container">
        <section className="purchased-hero">
          <div>
            <span>PROPERTY MANAGEMENT</span>

            <h1>
              Your property
              <br />
              <strong>journey.</strong>
            </h1>

            <p>
              Track your purchased properties, documents,
              payments and transaction status.
            </p>
          </div>

          <div className="building-visual">
            <div>⌂</div>
          </div>
        </section>

        {/* SUMMARY */}
        <section className="purchase-summary">
          <div className="purchase-stat">
            <span className="purchase-stat-icon purple">
              ▣
            </span>

            <div>
              <strong>{properties.length}</strong>
              <small>Total Properties</small>
            </div>
          </div>

          <div className="purchase-stat">
            <span className="purchase-stat-icon green">
              ✓
            </span>

            <div>
              <strong>1</strong>
              <small>Completed</small>
            </div>
          </div>

          <div className="purchase-stat">
            <span className="purchase-stat-icon orange">
              ◷
            </span>

            <div>
              <strong>1</strong>
              <small>In Progress</small>
            </div>
          </div>

          <div className="purchase-stat">
            <span className="purchase-stat-icon blue">
              ₹
            </span>

            <div>
              <strong>₹1.43 Cr</strong>
              <small>Total Value</small>
            </div>
          </div>
        </section>

        {/* TABS */}
        <div className="purchase-tabs">
          {["All", "Completed", "Processing"].map(
            (tab) => (
              <button
                key={tab}
                className={
                  activeTab === tab ? "active" : ""
                }
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            )
          )}
        </div>

        {/* PROPERTIES */}
        <section className="purchased-list">
          <div className="purchased-title">
            <div>
              <span>MY PROPERTIES</span>
              <h2>Purchased Properties</h2>
            </div>
          </div>

          {filtered.map((property) => (
            <article
              className="purchased-card"
              key={property.id}
            >
              <div className="purchased-image">
                <img
                  src={property.image}
                  alt={property.title}
                />

                <span
                  className={
                    property.status === "Completed"
                      ? "status completed"
                      : "status processing"
                  }
                >
                  ● {property.status}
                </span>
              </div>

              <div className="purchased-info">
                <small>{property.location}</small>

                <h3>{property.title}</h3>

                <strong>{property.price}</strong>

                <div className="purchase-meta">
                  <span>
                    <b>Purchase Date</b>
                    {property.date}
                  </span>

                  <span>
                    <b>Property ID</b>
                    EP-00{property.id}84
                  </span>
                </div>

                <div className="purchase-actions">
                  <button
                    onClick={() =>
                      downloadDocument("Purchase Agreement")
                    }
                  >
                    ↓ Agreement
                  </button>

                  <button
                    onClick={() =>
                      downloadDocument("Property Documents")
                    }
                  >
                    ↓ Documents
                  </button>

                  <Link
                    to={`/property/${property.id}`}
                  >
                    View Property →
                  </Link>
                </div>
              </div>
            </article>
          ))}

          {filtered.length === 0 && (
            <div className="purchase-empty">
              No properties found in this category.
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default PurchasedProperty;