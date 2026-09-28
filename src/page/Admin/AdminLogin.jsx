import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";

function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Demo frontend credentials
    if (
      email === "admin@realestate.com" &&
      password === "admin123"
    ) {
      setError("");

      // Admin login status
      localStorage.setItem("adminLoggedIn", "true");

      navigate("/admin-dashboard");
    } else {
      setError("Invalid Admin Email or Password");
    }
  };

  // Back to Home
  const handleBackHome = () => {
    navigate("/");
  };

  return (
    <div className="admin-login-page">

      {/* Background Decoration */}
      <div className="admin-bg-circle circle-one"></div>
      <div className="admin-bg-circle circle-two"></div>
      <div className="admin-bg-grid"></div>

      <div className="admin-login-card">

        {/* Back Button */}
        <button
          type="button"
          className="admin-back-btn"
          onClick={handleBackHome}
        >
          <span>←</span>
          Back to Home
        </button>

        {/* Admin Icon */}
        <div className="admin-icon">
          👑
        </div>

        <h1>Admin Login</h1>

        <p className="admin-subtitle">
          EstatePro Real Estate Platform
        </p>

        <div className="admin-line"></div>

        <form onSubmit={handleLogin}>

          {/* Email */}
          <div className="input-group">
            <label>Admin Email</label>

            <div className="input-wrapper">
              <span className="input-icon">✉</span>

              <input
                type="email"
                placeholder="Enter admin email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="input-group">
            <label>Password</label>

            <div className="input-wrapper">
              <span className="input-icon">🔒</span>

              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
                required
              />
            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="login-error">
              <span>⚠</span>
              {error}
            </div>
          )}

          {/* Login Button */}
          <button
            type="submit"
            className="admin-login-btn"
          >
            <span>Login as Admin</span>
            <span className="login-arrow">→</span>
          </button>

        </form>

        {/* Demo Credentials */}
        <div className="demo-box">
          <span className="demo-icon">ⓘ</span>

          <div>
            <strong>Demo Credentials</strong>

            <p>
              admin@realestate.com
            </p>

            <p>
              Password: admin123
            </p>
          </div>
        </div>

        {/* Security Footer */}
        <div className="admin-security">
          <span>🔐</span>
          Secure Admin Access
        </div>

      </div>
    </div>
  );
}

export default AdminLogin;