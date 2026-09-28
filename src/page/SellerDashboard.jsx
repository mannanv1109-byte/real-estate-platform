import { useState } from "react";
import "./SellerDashboard.css";
import SellerChat from "./SellerChat";

function SellerDashboard({ onBackHome }) {
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  const [propertyStatus, setPropertyStatus] = useState("Pending");

  const [formData, setFormData] = useState({
    title: "",
    price: "",
    address: "",
    city: "",
    bhk: "",
    bathroom: "",
    area: "",
    propertyType: "",
    description: "",
    amenities: "",
    mapLocation: "",
    contactNumber: "",
  });

  const [imagePreview, setImagePreview] = useState([]);

  // =========================
  // FORM HANDLERS
  // =========================

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    const imageUrls = files.map((file) =>
      URL.createObjectURL(file)
    );

    setImagePreview(imageUrls);
  };

  const handleSubmitProperty = (e) => {
    e.preventDefault();

    setPropertyStatus("Pending");
    setActiveMenu("Pending Properties");

    alert(
      "Property submitted successfully! Your property is now pending for Admin approval."
    );
  };

  // =========================
  // DASHBOARD
  // =========================

  const renderDashboard = () => {
    return (
      <div className="seller-content-area">
        <div className="seller-page-heading">
          <div>
            <span className="seller-small-label">
              SELLER PANEL
            </span>

            <h1>Dashboard</h1>

            <p>
              Welcome back! Manage your properties and buyer
              enquiries from here.
            </p>
          </div>

          <button
            className="seller-primary-btn"
            onClick={() => setActiveMenu("Add Property")}
          >
            + Add Property
          </button>
        </div>

        <div className="seller-stats-grid">
          <div className="seller-stat-card">
            <div className="seller-stat-icon">🏠</div>

            <div>
              <span>Total Properties</span>
              <h2>12</h2>
              <small>All your properties</small>
            </div>
          </div>

          <div className="seller-stat-card">
            <div className="seller-stat-icon pending">
              ⏳
            </div>

            <div>
              <span>Pending Approval</span>
              <h2>3</h2>
              <small>Waiting for admin</small>
            </div>
          </div>

          <div className="seller-stat-card">
            <div className="seller-stat-icon approved">
              ✓
            </div>

            <div>
              <span>Approved</span>
              <h2>7</h2>
              <small>Visible to buyers</small>
            </div>
          </div>

          <div className="seller-stat-card">
            <div className="seller-stat-icon sold">
              💰
            </div>

            <div>
              <span>Sold / Rented</span>
              <h2>2</h2>
              <small>Completed properties</small>
            </div>
          </div>
        </div>

        <div className="seller-dashboard-grid">
          <div className="seller-dashboard-card">
            <div className="seller-card-heading">
              <div>
                <h2>Recent Properties</h2>
                <p>Your latest property activity.</p>
              </div>

              <button
                onClick={() =>
                  setActiveMenu("My Properties")
                }
              >
                View All
              </button>
            </div>

            <div className="seller-property-list">
              <div className="seller-property-row">
                <div className="seller-property-image">
                  🏡
                </div>

                <div className="seller-property-info">
                  <h3>Modern Luxury Villa</h3>
                  <p>Vadodara, Gujarat</p>
                  <span>₹85,00,000</span>
                </div>

                <div className="property-status approved-status">
                  Approved
                </div>
              </div>

              <div className="seller-property-row">
                <div className="seller-property-image">
                  🏢
                </div>

                <div className="seller-property-info">
                  <h3>Premium 3 BHK Apartment</h3>
                  <p>Ahmedabad, Gujarat</p>
                  <span>₹72,00,000</span>
                </div>

                <div className="property-status pending-status">
                  Pending
                </div>
              </div>

              <div className="seller-property-row">
                <div className="seller-property-image">
                  🏠
                </div>

                <div className="seller-property-info">
                  <h3>Family Residential House</h3>
                  <p>Anand, Gujarat</p>
                  <span>₹58,00,000</span>
                </div>

                <div className="property-status sold-status">
                  Sold
                </div>
              </div>
            </div>
          </div>

          <div className="seller-dashboard-card">
            <div className="seller-card-heading">
              <div>
                <h2>Quick Actions</h2>
                <p>Frequently used actions.</p>
              </div>
            </div>

            <div className="quick-actions">
              <button
                onClick={() =>
                  setActiveMenu("Add Property")
                }
              >
                <span>🏠</span>
                <div>
                  <strong>Add Property</strong>
                  <small>List a new property</small>
                </div>
              </button>

              <button
                onClick={() =>
                  setActiveMenu("Pending Properties")
                }
              >
                <span>⏳</span>
                <div>
                  <strong>Pending Properties</strong>
                  <small>Check approval status</small>
                </div>
              </button>

              <button
                onClick={() =>
                  setActiveMenu("Messages")
                }
              >
                <span>💬</span>
                <div>
                  <strong>Messages</strong>
                  <small>Chat with buyers</small>
                </div>
              </button>

              <button
                onClick={() => setActiveMenu("Profile")}
              >
                <span>👤</span>
                <div>
                  <strong>My Profile</strong>
                  <small>Update seller profile</small>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // =========================
  // MY PROPERTIES
  // =========================

  const renderMyProperties = () => {
    return (
      <div className="seller-content-area">
        <div className="seller-page-heading">
          <div>
            <span className="seller-small-label">
              PROPERTY MANAGEMENT
            </span>

            <h1>My Properties</h1>

            <p>
              Manage all properties submitted by you.
            </p>
          </div>

          <button
            className="seller-primary-btn"
            onClick={() => setActiveMenu("Add Property")}
          >
            + Add Property
          </button>
        </div>

        <div className="property-table-card">
          <div className="property-table-header">
            <span>Property</span>
            <span>Location</span>
            <span>Price</span>
            <span>Status</span>
            <span>Action</span>
          </div>

          <div className="property-table-row">
            <div className="table-property">
              <div className="table-property-img">
                🏡
              </div>

              <div>
                <strong>Modern Luxury Villa</strong>
                <small>4 BHK • 2500 sq.ft</small>
              </div>
            </div>

            <span>Vadodara</span>

            <strong>₹85,00,000</strong>

            <span className="property-status approved-status">
              Approved
            </span>

            <button className="table-action-btn">
              View
            </button>
          </div>

          <div className="property-table-row">
            <div className="table-property">
              <div className="table-property-img">
                🏢
              </div>

              <div>
                <strong>Premium Apartment</strong>
                <small>3 BHK • 1800 sq.ft</small>
              </div>
            </div>

            <span>Ahmedabad</span>

            <strong>₹72,00,000</strong>

            <span className="property-status pending-status">
              Pending
            </span>

            <button className="table-action-btn">
              View
            </button>
          </div>

          <div className="property-table-row">
            <div className="table-property">
              <div className="table-property-img">
                🏠
              </div>

              <div>
                <strong>Family House</strong>
                <small>3 BHK • 1600 sq.ft</small>
              </div>
            </div>

            <span>Anand</span>

            <strong>₹58,00,000</strong>

            <span className="property-status sold-status">
              Sold
            </span>

            <button className="table-action-btn">
              View
            </button>
          </div>
        </div>
      </div>
    );
  };

  // =========================
  // ADD PROPERTY
  // =========================

  const renderAddProperty = () => {
    return (
      <div className="seller-content-area">
        <div className="seller-page-heading">
          <div>
            <span className="seller-small-label">
              PROPERTY LISTING
            </span>

            <h1>Add Property</h1>

            <p>
              Submit your property for Admin verification.
            </p>
          </div>
        </div>

        <form
          className="seller-property-form"
          onSubmit={handleSubmitProperty}
        >
          <div className="form-section">
            <div className="form-section-title">
              <span>01</span>

              <div>
                <h2>Basic Information</h2>
                <p>Enter basic property details.</p>
              </div>
            </div>

            <div className="form-grid">
              <div className="form-group full-width">
                <label>Property Title</label>

                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Example: Modern Luxury Villa"
                  required
                />
              </div>

              <div className="form-group">
                <label>Price</label>

                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  placeholder="Example: 8500000"
                  required
                />
              </div>

              <div className="form-group">
                <label>Property Type</label>

                <select
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">
                    Select Property Type
                  </option>

                  <option value="Apartment">
                    Apartment
                  </option>

                  <option value="Villa">
                    Villa
                  </option>

                  <option value="House">
                    House
                  </option>

                  <option value="Plot">Plot</option>

                  <option value="Commercial">
                    Commercial
                  </option>
                </select>
              </div>

              <div className="form-group">
                <label>BHK</label>

                <select
                  name="bhk"
                  value={formData.bhk}
                  onChange={handleInputChange}
                >
                  <option value="">Select BHK</option>
                  <option value="1">1 BHK</option>
                  <option value="2">2 BHK</option>
                  <option value="3">3 BHK</option>
                  <option value="4">4 BHK</option>
                  <option value="5">5+ BHK</option>
                </select>
              </div>

              <div className="form-group">
                <label>Bathroom</label>

                <select
                  name="bathroom"
                  value={formData.bathroom}
                  onChange={handleInputChange}
                >
                  <option value="">
                    Select Bathrooms
                  </option>

                  <option value="1">1 Bathroom</option>
                  <option value="2">2 Bathrooms</option>
                  <option value="3">3 Bathrooms</option>
                  <option value="4">4 Bathrooms</option>
                  <option value="5">5+ Bathrooms</option>
                </select>
              </div>

              <div className="form-group">
                <label>Area</label>

                <input
                  type="text"
                  name="area"
                  value={formData.area}
                  onChange={handleInputChange}
                  placeholder="Example: 2500 sq.ft"
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <div className="form-section-title">
              <span>02</span>

              <div>
                <h2>Location Details</h2>
                <p>Where is your property located?</p>
              </div>
            </div>

            <div className="form-grid">
              <div className="form-group full-width">
                <label>Address</label>

                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Enter complete property address"
                  required
                />
              </div>

              <div className="form-group">
                <label>City</label>

                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="Example: Vadodara"
                  required
                />
              </div>

              <div className="form-group">
                <label>Google Map Location</label>

                <input
                  type="text"
                  name="mapLocation"
                  value={formData.mapLocation}
                  onChange={handleInputChange}
                  placeholder="Paste Google Maps link"
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <div className="form-section-title">
              <span>03</span>

              <div>
                <h2>Description & Amenities</h2>
                <p>Tell buyers more about the property.</p>
              </div>
            </div>

            <div className="form-grid">
              <div className="form-group full-width">
                <label>Description</label>

                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Write detailed property description..."
                  rows="6"
                ></textarea>
              </div>

              <div className="form-group full-width">
                <label>Amenities</label>

                <input
                  type="text"
                  name="amenities"
                  value={formData.amenities}
                  onChange={handleInputChange}
                  placeholder="Example: Parking, Garden, Swimming Pool, Security"
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <div className="form-section-title">
              <span>04</span>

              <div>
                <h2>Property Images</h2>
                <p>
                  Upload clear images of your property.
                </p>
              </div>
            </div>

            <div className="image-upload-box">
              <input
                type="file"
                accept="image/*"
                multiple
                id="propertyImages"
                onChange={handleImageChange}
              />

              <label htmlFor="propertyImages">
                <div className="upload-icon">📷</div>

                <strong>
                  Click to upload property images
                </strong>

                <span>
                  PNG, JPG or WEBP • Multiple images allowed
                </span>
              </label>
            </div>

            {imagePreview.length > 0 && (
              <div className="image-preview-grid">
                {imagePreview.map((image, index) => (
                  <div
                    className="image-preview-item"
                    key={index}
                  >
                    <img
                      src={image}
                      alt={`Property ${index + 1}`}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="form-section">
            <div className="form-section-title">
              <span>05</span>

              <div>
                <h2>Contact Information</h2>
                <p>
                  Buyer will use this information to contact
                  you.
                </p>
              </div>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <label>Contact Number</label>

                <input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  placeholder="Enter mobile number"
                  required
                />
              </div>
            </div>
          </div>

          <div className="property-submit-box">
            <div>
              <h3>Submit for Admin Approval</h3>

              <p>
                After submitting, your property will be
                reviewed by the Admin before it becomes
                visible to buyers.
              </p>
            </div>

            <button
              type="submit"
              className="seller-primary-btn submit-property-btn"
            >
              Submit Property →
            </button>
          </div>
        </form>
      </div>
    );
  };

  // =========================
  // PROPERTY STATUS
  // =========================

  const renderPropertyStatus = (status) => {
    const statusTitle =
      status === "Pending"
        ? "Pending Properties"
        : status === "Approved"
        ? "Approved Properties"
        : "Sold / Rented";

    const statusDescription =
      status === "Pending"
        ? "Properties waiting for Admin verification."
        : status === "Approved"
        ? "Properties approved and visible to buyers."
        : "Properties that have been sold or rented.";

    return (
      <div className="seller-content-area">
        <div className="seller-page-heading">
          <div>
            <span className="seller-small-label">
              PROPERTY STATUS
            </span>

            <h1>{statusTitle}</h1>

            <p>{statusDescription}</p>
          </div>
        </div>

        <div className="status-flow-card">
          <div className="status-flow-step active">
            <span>1</span>
            <strong>Submitted</strong>
          </div>

          <div className="status-flow-line"></div>

          <div
            className={
              status === "Approved" || status === "Sold/Rented"
                ? "status-flow-step active"
                : "status-flow-step"
            }
          >
            <span>2</span>
            <strong>Admin Review</strong>
          </div>

          <div className="status-flow-line"></div>

          <div
            className={
              status === "Approved" || status === "Sold/Rented"
                ? "status-flow-step active"
                : "status-flow-step"
            }
          >
            <span>3</span>
            <strong>Approved</strong>
          </div>
        </div>

        <div className="status-property-card">
          <div className="status-property-image">
            🏡
          </div>

          <div className="status-property-details">
            <span className="seller-small-label">
              PROPERTY
            </span>

            <h2>Modern Luxury Villa</h2>

            <p>Vadodara, Gujarat</p>

            <div className="status-property-meta">
              <span>4 BHK</span>
              <span>3 Bathroom</span>
              <span>2500 sq.ft</span>
              <span>₹85,00,000</span>
            </div>
          </div>

          <div className="status-right">
            <span
              className={
                status === "Approved"
                  ? "property-status approved-status"
                  : status === "Sold/Rented"
                  ? "property-status sold-status"
                  : "property-status pending-status"
              }
            >
              {status}
            </span>

            <small>
              {status === "Pending"
                ? "Waiting for Admin approval"
                : status === "Approved"
                ? "Visible to buyers"
                : "Transaction completed"}
            </small>
          </div>
        </div>
      </div>
    );
  };

  // =========================
  // MESSAGES
  // =========================

  const renderMessages = () => {
    return (
      <div className="seller-content-area seller-messages-content">
        <div className="seller-page-heading">
          <div>
            <span className="seller-small-label">
              COMMUNICATION
            </span>

            <h1>Messages</h1>

            <p>
              Communicate with buyers interested in your
              properties.
            </p>
          </div>
        </div>

        <SellerChat />
      </div>
    );
  };

  // =========================
  // PROFILE
  // =========================

  const renderProfile = () => {
    return (
      <div className="seller-content-area">
        <div className="seller-page-heading">
          <div>
            <span className="seller-small-label">
              ACCOUNT
            </span>

            <h1>My Profile</h1>

            <p>Manage your seller account information.</p>
          </div>
        </div>

        <div className="profile-card">
          <div className="profile-top">
            <div className="profile-avatar">JK</div>

            <div>
              <h2>Jainam Kachhiya</h2>
              <p>Property Seller</p>
            </div>

            <button className="seller-secondary-btn">
              Edit Profile
            </button>
          </div>

          <div className="profile-info-grid">
            <div>
              <span>Full Name</span>
              <strong>Jainam Kachhiya</strong>
            </div>

            <div>
              <span>Email</span>
              <strong>seller@example.com</strong>
            </div>

            <div>
              <span>Phone</span>
              <strong>+91 98765 43210</strong>
            </div>

            <div>
              <span>Account Type</span>
              <strong>Seller</strong>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // =========================
  // SETTINGS
  // =========================

  const renderSettings = () => {
    return (
      <div className="seller-content-area">
        <div className="seller-page-heading">
          <div>
            <span className="seller-small-label">
              ACCOUNT SETTINGS
            </span>

            <h1>Settings</h1>

            <p>Manage your account preferences.</p>
          </div>
        </div>

        <div className="settings-card">
          <div className="setting-row">
            <div>
              <h3>Email Notifications</h3>
              <p>
                Receive notifications about property
                approvals and buyer messages.
              </p>
            </div>

            <label className="toggle-switch">
              <input type="checkbox" defaultChecked />
              <span></span>
            </label>
          </div>

          <div className="setting-row">
            <div>
              <h3>Buyer Messages</h3>
              <p>
                Allow buyers to contact you about approved
                properties.
              </p>
            </div>

            <label className="toggle-switch">
              <input type="checkbox" defaultChecked />
              <span></span>
            </label>
          </div>

          <div className="setting-row">
            <div>
              <h3>Profile Visibility</h3>
              <p>
                Show your seller profile to interested buyers.
              </p>
            </div>

            <label className="toggle-switch">
              <input type="checkbox" defaultChecked />
              <span></span>
            </label>
          </div>
        </div>
      </div>
    );
  };

  // =========================
  // ACTIVE CONTENT
  // =========================

  const renderActiveContent = () => {
    switch (activeMenu) {
      case "Dashboard":
        return renderDashboard();

      case "My Properties":
        return renderMyProperties();

      case "Add Property":
        return renderAddProperty();

      case "Pending Properties":
        setTimeout(() => {}, 0);
        return renderPropertyStatus("Pending");

      case "Approved Properties":
        return renderPropertyStatus("Approved");

      case "Sold/Rented":
        return renderPropertyStatus("Sold/Rented");

      case "Messages":
        return renderMessages();

      case "Profile":
        return renderProfile();

      case "Settings":
        return renderSettings();

      default:
        return renderDashboard();
    }
  };

  // =========================
  // MENU ITEMS
  // =========================

  const menuItems = [
    {
      name: "Dashboard",
      icon: "▦",
    },
    {
      name: "My Properties",
      icon: "🏠",
    },
    {
      name: "Add Property",
      icon: "+",
    },
    {
      name: "Pending Properties",
      icon: "⏳",
    },
    {
      name: "Approved Properties",
      icon: "✓",
    },
    {
      name: "Sold/Rented",
      icon: "💰",
    },
    {
      name: "Messages",
      icon: "💬",
    },
    {
      name: "Profile",
      icon: "👤",
    },
    {
      name: "Settings",
      icon: "⚙",
    },
  ];

  // =========================
  // MAIN RETURN
  // =========================

  return (
    <div className="seller-dashboard">
      <aside className="seller-sidebar">
        <div className="seller-brand">
          <div className="seller-brand-logo">E</div>

          <div>
            <h2>EstatePro</h2>
            <span>SELLER PANEL</span>
          </div>
        </div>

        <div className="seller-profile-mini">
          <div className="seller-mini-avatar">JK</div>

          <div>
            <strong>Jainam Kachhiya</strong>
            <span>Property Seller</span>
          </div>
        </div>

        <nav className="seller-sidebar-nav">
          <span className="sidebar-section-title">
            MAIN MENU
          </span>

          {menuItems.map((item) => (
            <button
              key={item.name}
              className={
                activeMenu === item.name
                  ? "seller-nav-item active"
                  : "seller-nav-item"
              }
              onClick={() => setActiveMenu(item.name)}
            >
              <span className="seller-nav-icon">
                {item.icon}
              </span>

              <span>{item.name}</span>

              {item.name === "Messages" && (
                <span className="message-count">3</span>
              )}
            </button>
          ))}
        </nav>

        <div className="seller-sidebar-bottom">
          <button
            className="back-website-btn"
            onClick={onBackHome}
          >
            ← Back to Website
          </button>

          <button
            className="logout-btn"
            onClick={() => {
              alert("Logout clicked");
            }}
          >
            <span>↪</span>
            Logout
          </button>
        </div>
      </aside>

      <main className="seller-main">
        <header className="seller-topbar">
          <div className="seller-breadcrumb">
            <span>EstatePro</span>
            <b>/</b>
            <strong>{activeMenu}</strong>
          </div>

          <div className="seller-topbar-right">
            <button
              className="topbar-icon-btn"
              onClick={() => setActiveMenu("Messages")}
            >
              🔔
              <span className="notification-dot"></span>
            </button>

            <div className="topbar-user">
              <div className="topbar-avatar">JK</div>

              <div>
                <strong>Jainam Kachhiya</strong>
                <span>Seller</span>
              </div>
            </div>
          </div>
        </header>

        <div className="seller-main-content">
          {renderActiveContent()}
        </div>
      </main>
    </div>
  );
}

export default SellerDashboard;