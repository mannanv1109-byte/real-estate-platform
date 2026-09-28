import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

function AdminDashboard() {
  const navigate = useNavigate();

  const stats = [
    {
      title: "Total Users",
      value: "1,248",
      icon: "👥",
      text: "+12.8% this month",
    },
    {
      title: "Total Properties",
      value: "742",
      icon: "🏠",
      text: "+8.4% this month",
    },
    {
      title: "Pending Approval",
      value: "28",
      icon: "⏳",
      text: "Requires attention",
    },
    {
      title: "Transactions",
      value: "₹48.6L",
      icon: "💰",
      text: "+18.2% this month",
    },
  ];

  const properties = [
    {
      id: 1,
      title: "Luxury Villa",
      seller: "Rahul Patel",
      city: "Ahmedabad",
      price: "₹1.25 Cr",
      status: "Pending",
    },
    {
      id: 2,
      title: "Modern 3 BHK",
      seller: "Amit Shah",
      city: "Vadodara",
      price: "₹72 Lakh",
      status: "Approved",
    },
    {
      id: 3,
      title: "Premium Apartment",
      seller: "Jay Mehta",
      city: "Surat",
      price: "₹58 Lakh",
      status: "Pending",
    },
    {
      id: 4,
      title: "Commercial Office",
      seller: "Raj Shah",
      city: "Ahmedabad",
      price: "₹95 Lakh",
      status: "Rejected",
    },
  ];

  return (
    <div className="admin-dashboard">

      {/* SIDEBAR */}

      <aside className="admin-sidebar">

        <div className="admin-brand">
          <div className="admin-brand-logo">
            E
          </div>

          <div>
            <h2>EstatePro</h2>
            <span>ADMIN CONTROL</span>
          </div>
        </div>

        <div className="admin-user-card">
          <div className="admin-avatar">
            AD
          </div>

          <div>
            <strong>Admin User</strong>
            <small>Super Administrator</small>
          </div>
        </div>

        <nav className="admin-nav">

          <p>MAIN MENU</p>

          <button
            className="admin-nav-link active"
            onClick={() => navigate("/admin")}
          >
            <span>📊</span>
            Dashboard
          </button>

          <button
            className="admin-nav-link"
            onClick={() => navigate("/admin/users")}
          >
            <span>👥</span>
            Users
          </button>

          <button
            className="admin-nav-link"
            onClick={() => navigate("/admin/properties")}
          >
            <span>🏠</span>
            Properties
          </button>

          <button
            className="admin-nav-link"
            onClick={() =>
              navigate("/admin/verification")
            }
          >
            <span>⏳</span>
            Pending Approval
            <b>28</b>
          </button>

          <button
            className="admin-nav-link"
            onClick={() =>
              navigate("/admin/documents")
            }
          >
            <span>📄</span>
            Documents
          </button>

          <button
            className="admin-nav-link"
            onClick={() =>
              navigate("/admin/reports")
            }
          >
            <span>🚨</span>
            Reports
            <b>7</b>
          </button>

          <button
            className="admin-nav-link"
            onClick={() =>
              navigate("/admin/transactions")
            }
          >
            <span>💰</span>
            Transactions
          </button>

          <button
            className="admin-nav-link"
            onClick={() =>
              navigate("/admin/messages")
            }
          >
            <span>💬</span>
            Messages
          </button>

          <p>ACCOUNT</p>

          <button
            className="admin-nav-link"
            onClick={() =>
              navigate("/admin/profile")
            }
          >
            <span>👤</span>
            Profile
          </button>

          <button
            className="admin-nav-link"
            onClick={() =>
              navigate("/admin/settings")
            }
          >
            <span>⚙️</span>
            Settings
          </button>

        </nav>

        <div className="admin-sidebar-bottom">

          <button
            onClick={() => navigate("/")}
          >
            🌐 Back to Website
          </button>

          <button className="admin-logout">
            🚪 Logout
          </button>

        </div>

      </aside>

      {/* MAIN */}

      <main className="admin-main">

        <header className="admin-header">

          <div>
            <span>ESTATEPRO ADMIN PANEL</span>
            <h1>Dashboard</h1>
          </div>

          <div className="admin-header-right">

            <button>🔍</button>

            <button className="admin-notification">
              🔔
              <i></i>
            </button>

            <div className="admin-header-profile">
              <div>AD</div>

              <section>
                <strong>Admin User</strong>
                <small>Administrator</small>
              </section>
            </div>

          </div>

        </header>

        <section className="admin-content">

          <div className="welcome-box">

            <div>
              <small>WELCOME BACK</small>

              <h2>
                Good Morning, Admin 👋
              </h2>

              <p>
                Monitor and manage your EstatePro
                platform from one place.
              </p>
            </div>

            <button
              onClick={() =>
                navigate("/admin/verification")
              }
            >
              Review Pending →
            </button>

          </div>

          {/* STATS */}

          <div className="admin-stats">

            {stats.map((item, index) => (
              <div
                className="admin-stat"
                key={index}
              >

                <div className="stat-top">

                  <div className="stat-icon">
                    {item.icon}
                  </div>

                  <span>↗</span>

                </div>

                <small>{item.title}</small>

                <h2>{item.value}</h2>

                <p>{item.text}</p>

              </div>
            ))}

          </div>

          {/* GRID */}

          <div className="admin-dashboard-grid">

            {/* PROPERTIES */}

            <div className="admin-card">

              <div className="card-heading">

                <div>
                  <h2>Recent Properties</h2>
                  <p>
                    Latest seller submissions
                  </p>
                </div>

                <button
                  onClick={() =>
                    navigate("/admin/properties")
                  }
                >
                  View All
                </button>

              </div>

              <div className="admin-property-list">

                {properties.map((property) => (

                  <div
                    className="admin-property"
                    key={property.id}
                  >

                    <div className="property-image">
                      🏡
                    </div>

                    <div className="property-info">

                      <strong>
                        {property.title}
                      </strong>

                      <small>
                        {property.seller} •{" "}
                        {property.city}
                      </small>

                      <b>
                        {property.price}
                      </b>

                    </div>

                    <span
                      className={`property-status ${property.status.toLowerCase()}`}
                    >
                      {property.status}
                    </span>

                    <button
                      onClick={() =>
                        navigate(
                          `/admin/verification/${property.id}`
                        )
                      }
                    >
                      View
                    </button>

                  </div>

                ))}

              </div>

            </div>

            {/* QUICK ACTIONS */}

            <div className="admin-card">

              <div className="card-heading">

                <div>
                  <h2>Quick Actions</h2>
                  <p>
                    Frequently used admin tools
                  </p>
                </div>

              </div>

              <div className="quick-actions">

                <button
                  onClick={() =>
                    navigate("/admin/verification")
                  }
                >
                  <span>⏳</span>

                  <div>
                    <strong>
                      Review Properties
                    </strong>

                    <small>
                      28 properties pending
                    </small>
                  </div>
                </button>

                <button
                  onClick={() =>
                    navigate("/admin/users")
                  }
                >
                  <span>👥</span>

                  <div>
                    <strong>
                      Manage Users
                    </strong>

                    <small>
                      Buyers & Sellers
                    </small>
                  </div>
                </button>

                <button
                  onClick={() =>
                    navigate("/admin/documents")
                  }
                >
                  <span>📄</span>

                  <div>
                    <strong>
                      Verify Documents
                    </strong>

                    <small>
                      Seller documents
                    </small>
                  </div>
                </button>

                <button
                  onClick={() =>
                    navigate("/admin/reports")
                  }
                >
                  <span>🚨</span>

                  <div>
                    <strong>
                      Check Reports
                    </strong>

                    <small>
                      7 reports
                    </small>
                  </div>
                </button>

              </div>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default AdminDashboard;