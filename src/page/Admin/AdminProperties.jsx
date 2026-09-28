import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminProperties.css";

function AdminProperties() {
  const navigate = useNavigate();

  const [filter, setFilter] = useState("All");

  const properties = [
    {
      id: 101,
      title: "Luxury Villa",
      seller: "Rahul Patel",
      city: "Ahmedabad",
      type: "Villa",
      price: "₹1.25 Cr",
      status: "Pending",
    },
    {
      id: 102,
      title: "Modern 3 BHK",
      seller: "Amit Shah",
      city: "Vadodara",
      type: "Apartment",
      price: "₹72 Lakh",
      status: "Approved",
    },
    {
      id: 103,
      title: "Premium Apartment",
      seller: "Jay Mehta",
      city: "Surat",
      type: "Apartment",
      price: "₹58 Lakh",
      status: "Pending",
    },
    {
      id: 104,
      title: "Commercial Office",
      seller: "Raj Shah",
      city: "Ahmedabad",
      type: "Commercial",
      price: "₹95 Lakh",
      status: "Rejected",
    },
  ];

  const visibleProperties =
    filter === "All"
      ? properties
      : properties.filter(
          (property) =>
            property.status === filter
        );

  return (
    <div className="admin-page">

      <header className="admin-page-header">

        <div>
          <small>ESTATEPRO / PROPERTIES</small>
          <h1>Property Management</h1>
          <p>
            Monitor every property submitted on EstatePro.
          </p>
        </div>

        <button
          onClick={() => navigate("/admin")}
        >
          ← Dashboard
        </button>

      </header>

      <div className="property-filter">

        {["All", "Pending", "Approved", "Rejected"].map(
          (item) => (
            <button
              key={item}
              className={
                filter === item ? "selected" : ""
              }
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          )
        )}

      </div>

      <div className="admin-properties-grid">

        {visibleProperties.map((property) => (

          <div
            className="admin-property-card"
            key={property.id}
          >

            <div className="admin-property-cover">
              <span>🏡</span>

              <b
                className={`property-status ${property.status.toLowerCase()}`}
              >
                {property.status}
              </b>
            </div>

            <div className="admin-property-card-body">

              <small>{property.type}</small>

              <h2>{property.title}</h2>

              <p>📍 {property.city}</p>

              <strong>{property.price}</strong>

              <div className="seller-line">
                <span>Seller</span>
                <b>{property.seller}</b>
              </div>

              <button
                onClick={() =>
                  navigate(
                    `/admin/verification/${property.id}`
                  )
                }
              >
                View Property →
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default AdminProperties;