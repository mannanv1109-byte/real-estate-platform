import { useState } from "react";
import "./Auth.css";

function LoginPage({ onBackHome, onRegister }) {
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    alert("Login API will be connected here.");
  };

  return (
    <div className="auth-page">

      {/* Animated Background */}
      <div className="auth-orb orb-one"></div>
      <div className="auth-orb orb-two"></div>
      <div className="auth-orb orb-three"></div>

      {/* Back Home */}
      <button className="auth-back" onClick={onBackHome}>
        ← Back to EstatePro
      </button>

      <div className="auth-wrapper">

        {/* LEFT SIDE */}
        <div className="auth-showcase">

          <div className="showcase-content">

            <div className="auth-logo">
              <span>⌂</span>
              Estate<span>Pro</span>
            </div>

            <div className="showcase-badge">
              ✦ PREMIUM REAL ESTATE
            </div>

            <h1>
              Welcome
              <br />
              <i>back home.</i>
            </h1>

            <p>
              Login to discover premium properties,
              save your favourite homes and connect
              with trusted sellers.
            </p>

            <div className="auth-features">

              <div>
                <span>✓</span>
                <div>
                  <strong>Verified Properties</strong>
                  <small>Trusted property listings</small>
                </div>
              </div>

              <div>
                <span>⌖</span>
                <div>
                  <strong>Smart Discovery</strong>
                  <small>Find your perfect location</small>
                </div>
              </div>

              <div>
                <span>♡</span>
                <div>
                  <strong>Save Your Favourites</strong>
                  <small>Keep your dream homes nearby</small>
                </div>
              </div>

            </div>

          </div>

        </div>


        {/* RIGHT SIDE */}
        <div className="auth-card">

          <div className="auth-card-header">

            <span className="auth-mini-title">
              ACCOUNT LOGIN
            </span>

            <h2>
              Sign in to
              <span> EstatePro</span>
            </h2>

            <p>
              Enter your details to continue.
            </p>

          </div>


          <form onSubmit={handleLogin}>

            {/* EMAIL */}
            <div className="auth-input-group">

              <label>Email Address</label>

              <div className="auth-input">

                <span>✉</span>

                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                />

              </div>

            </div>


            {/* PASSWORD */}
            <div className="auth-input-group">

              <div className="password-label">

                <label>Password</label>

                <button
                  type="button"
                  onClick={() =>
                    alert("Forgot password API will be connected here.")
                  }
                >
                  Forgot Password?
                </button>

              </div>

              <div className="auth-input">

                <span>🔒</span>

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Enter your password"
                  required
                />

                <button
                  type="button"
                  className="show-password"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? "🙈" : "👁"}
                </button>

              </div>

            </div>


            {/* REMEMBER */}
            <div className="remember-row">

              <label>

                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) =>
                    setRemember(e.target.checked)
                  }
                />

                <span>
                  Remember me
                </span>

              </label>

            </div>


            {/* LOGIN */}
            <button
              type="submit"
              className="auth-submit"
            >
              <span>Sign In</span>
              <strong>→</strong>
            </button>

          </form>


          {/* REGISTER */}
          <div className="auth-divider">
            <span>OR</span>
          </div>

          <div className="auth-register">

            <span>
              Don't have an account?
            </span>

            <button onClick={onRegister}>
              Create Account →
            </button>

          </div>


          <div className="auth-security">
            🔐 Secure & trusted EstatePro experience
          </div>

        </div>

      </div>

    </div>
  );
}

export default LoginPage;