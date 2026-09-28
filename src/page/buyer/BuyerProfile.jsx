import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./BuyerProfile.css";

function BuyerProfile() {
  const navigate = useNavigate();

  const [editing, setEditing] = useState(false);

  const [profile, setProfile] = useState({
    firstName: "Jainam",
    lastName: "Kachhiya",
    email: "jainam@example.com",
    phone: "+91 98XXXXXX42",
    city: "Vadodara",
    occupation: "Software Professional",
    bio: "Looking for a premium property with modern amenities and excellent connectivity.",
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const saveProfile = () => {
    setEditing(false);
    alert("Profile updated successfully!");
  };

  return (
    <div className="buyer-profile-page">
      <header className="profile-header">
        <div className="profile-brand">
          <Link to="/buyer-dashboard">
            <div className="profile-logo">EP</div>

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
          className="profile-back"
        >
          ← Dashboard
        </button>
      </header>

      <main className="profile-container">
        {/* COVER */}
        <section className="profile-cover">
          <div className="profile-cover-pattern" />

          <div className="profile-main-avatar">
            JM
            <span>✓</span>
          </div>

          <div className="profile-main-info">
            <span>PREMIUM BUYER</span>

            <h1>
              {profile.firstName} {profile.lastName}
            </h1>

            <p>
              <span>⌖</span> {profile.city} · Member since
              2026
            </p>
          </div>

          <button
            className={`edit-profile-btn ${
              editing ? "editing" : ""
            }`}
            onClick={() =>
              editing ? saveProfile() : setEditing(true)
            }
          >
            {editing ? "✓ Save Changes" : "✎ Edit Profile"}
          </button>
        </section>

        {/* CONTENT */}
        <div className="profile-layout">
          <aside className="profile-sidebar">
            <div className="profile-menu-title">
              ACCOUNT
            </div>

            <button className="active">
              <span>◎</span>
              Personal Information
            </button>

            <button
              onClick={() => navigate("/favourite")}
            >
              <span>♡</span>
              My Favourites
            </button>

            <button
              onClick={() =>
                navigate("/purchased-property")
              }
            >
              <span>▣</span>
              Purchased Properties
            </button>

            <button
              onClick={() => navigate("/buyer-chat")}
            >
              <span>◌</span>
              Messages
            </button>

            <div className="profile-menu-title">
              SETTINGS
            </div>

            <button>
              <span>🔒</span>
              Security
            </button>

            <button>
              <span>🔔</span>
              Notifications
            </button>
          </aside>

          <section className="profile-content">
            <div className="profile-content-heading">
              <div>
                <span>PROFILE DETAILS</span>
                <h2>Personal Information</h2>
              </div>

              <div className="profile-status">
                <span />
                Profile 85% complete
              </div>
            </div>

            {/* FORM */}
            <div className="profile-form-card">
              <div className="form-section-title">
                <div>01</div>

                <div>
                  <strong>Basic Information</strong>
                  <span>Your personal details</span>
                </div>
              </div>

              <div className="profile-form-grid">
                <label>
                  First Name
                  <input
                    name="firstName"
                    value={profile.firstName}
                    onChange={handleChange}
                    disabled={!editing}
                  />
                </label>

                <label>
                  Last Name
                  <input
                    name="lastName"
                    value={profile.lastName}
                    onChange={handleChange}
                    disabled={!editing}
                  />
                </label>

                <label>
                  Email Address
                  <input
                    name="email"
                    type="email"
                    value={profile.email}
                    onChange={handleChange}
                    disabled={!editing}
                  />
                </label>

                <label>
                  Phone Number
                  <input
                    name="phone"
                    value={profile.phone}
                    onChange={handleChange}
                    disabled={!editing}
                  />
                </label>

                <label>
                  City
                  <input
                    name="city"
                    value={profile.city}
                    onChange={handleChange}
                    disabled={!editing}
                  />
                </label>

                <label>
                  Occupation
                  <input
                    name="occupation"
                    value={profile.occupation}
                    onChange={handleChange}
                    disabled={!editing}
                  />
                </label>

                <label className="full-field">
                  About You
                  <textarea
                    name="bio"
                    value={profile.bio}
                    onChange={handleChange}
                    disabled={!editing}
                    rows="4"
                  />
                </label>
              </div>
            </div>

            {/* ACTIVITY */}
            <div className="activity-section">
              <div className="profile-content-heading">
                <div>
                  <span>ACCOUNT ACTIVITY</span>
                  <h2>Your Activity</h2>
                </div>
              </div>

              <div className="activity-grid">
                <div className="activity-card">
                  <div className="activity-icon purple">
                    ♡
                  </div>

                  <div>
                    <strong>12</strong>
                    <span>Favourite Properties</span>
                  </div>
                </div>

                <div className="activity-card">
                  <div className="activity-icon green">
                    ▣
                  </div>

                  <div>
                    <strong>2</strong>
                    <span>Purchased Properties</span>
                  </div>
                </div>

                <div className="activity-card">
                  <div className="activity-icon blue">
                    ◌
                  </div>

                  <div>
                    <strong>18</strong>
                    <span>Seller Conversations</span>
                  </div>
                </div>
              </div>
            </div>

            {/* SECURITY */}
            <div className="security-card">
              <div className="security-icon">🛡</div>

              <div>
                <strong>Your account is secure</strong>

                <p>
                  Your account information is protected
                  using EstatePro security systems.
                </p>
              </div>

              <span className="secure-check">✓</span>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default BuyerProfile;