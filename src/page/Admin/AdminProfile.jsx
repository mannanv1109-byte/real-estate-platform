import { useNavigate } from "react-router-dom";
import "./AdminProfile.css";

function AdminProfile() {
  const navigate = useNavigate();

  return (
    <div className="admin-page">

      <header className="admin-page-header">

        <div>
          <small>ESTATEPRO / ACCOUNT</small>
          <h1>Admin Profile</h1>
          <p>
            Manage administrator account information.
          </p>
        </div>

        <button onClick={() => navigate("/admin")}>
          ← Dashboard
        </button>

      </header>

      <div className="admin-profile-card">

        <div className="profile-cover"></div>

        <div className="profile-main">

          <div className="profile-avatar-large">
            AD
          </div>

          <div>
            <h2>Admin User</h2>
            <p>Super Administrator</p>
          </div>

          <button>Edit Profile</button>

        </div>

        <div className="profile-information">

          <div>
            <small>FULL NAME</small>
            <strong>Admin User</strong>
          </div>

          <div>
            <small>EMAIL</small>
            <strong>admin@estatepro.com</strong>
          </div>

          <div>
            <small>PHONE</small>
            <strong>+91 98765 00000</strong>
          </div>

          <div>
            <small>ROLE</small>
            <strong>Super Administrator</strong>
          </div>

          <div>
            <small>JOINED</small>
            <strong>01 January 2026</strong>
          </div>

          <div>
            <small>ACCOUNT STATUS</small>
            <strong className="verified">
              ✓ Verified
            </strong>
          </div>

        </div>

      </div>

    </div>
  );
}

export default AdminProfile;