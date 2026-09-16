import { useState } from "react";
import "./Auth.css";

function RegisterPage({ onBackHome, onLogin }) {

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    alert("Register API will be connected here.");
  };

  return (
    <div className="auth-page">

      {/* Animated Background */}
      <div className="auth-orb orb-one"></div>
      <div className="auth-orb orb-two"></div>
      <div className="auth-orb orb-three"></div>

      <button
        className="auth-back"
        onClick={onBackHome}
      >
        ← Back to EstatePro
      </button>


      <div className="auth-wrapper register-wrapper">

        {/* LEFT */}
        <div className="auth-showcase">

          <div className="showcase-content">

            <div className="auth-logo">
              <span>⌂</span>
              Estate<span>Pro</span>
            </div>

            <div className="showcase-badge">
              ✦ JOIN ESTATEPRO
            </div>

            <h1>
              Find your
              <br />
              <i>next chapter.</i>
            </h1>

            <p>
              Create your EstatePro account and
              start exploring premium properties
              from trusted sellers.
            </p>

            <div className="register-stats">

              <div>
                <strong>10K+</strong>
                <span>Properties</span>
              </div>

              <div>
                <strong>25+</strong>
                <span>Cities</span>
              </div>

              <div>
                <strong>4.9★</strong>
                <span>Rating</span>
              </div>

            </div>

          </div>

        </div>


        {/* REGISTER CARD */}
        <div className="auth-card">

          <div className="auth-card-header">

            <span className="auth-mini-title">
              CREATE ACCOUNT
            </span>

            <h2>
              Join <span>EstatePro</span>
            </h2>

            <p>
              Create your account in a few seconds.
            </p>

          </div>


          <form onSubmit={handleRegister}>

            {/* NAME */}
            <div className="auth-input-group">

              <label>Full Name</label>

              <div className="auth-input">

                <span>👤</span>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  required
                />

              </div>

            </div>


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

              <label>Password</label>

              <div className="auth-input">

                <span>🔒</span>

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Create password"
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


            {/* CONFIRM PASSWORD */}
            <div className="auth-input-group">

              <label>Confirm Password</label>

              <div className="auth-input">

                <span>🔐</span>

                <input
                  type={
                    showConfirm
                      ? "text"
                      : "password"
                  }
                  placeholder="Confirm password"
                  required
                />

                <button
                  type="button"
                  className="show-password"
                  onClick={() =>
                    setShowConfirm(!showConfirm)
                  }
                >
                  {showConfirm ? "🙈" : "👁"}
                </button>

              </div>

            </div>


            <label className="terms-check">

              <input type="checkbox" required />

              <span>
                I agree to the Terms & Conditions
                and Privacy Policy.
              </span>

            </label>


            <button
              type="submit"
              className="auth-submit"
            >
              <span>Create Account</span>
              <strong>→</strong>
            </button>

          </form>


          <div className="auth-divider">
            <span>OR</span>
          </div>


          <div className="auth-register">

            <span>
              Already have an account?
            </span>

            <button onClick={onLogin}>
              Sign In →
            </button>

          </div>


          <div className="auth-security">
            🔐 Your information is protected
          </div>

        </div>

      </div>

    </div>
  );
}

export default RegisterPage;