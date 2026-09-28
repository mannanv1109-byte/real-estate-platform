import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminSettings.css";

function AdminSettings() {
  const navigate = useNavigate();

  const [settings, setSettings] = useState({
    propertyNotification: true,
    userNotification: true,
    reportNotification: true,
    securityAlert: true,
    twoFactor: false,
  });

  const toggleSetting = (key) => {
    setSettings({
      ...settings,
      [key]: !settings[key],
    });
  };

  const Setting = ({ title, text, keyName }) => (
    <div className="setting-row">

      <div>
        <strong>{title}</strong>
        <p>{text}</p>
      </div>

      <button
        className={`setting-toggle ${
          settings[keyName] ? "on" : ""
        }`}
        onClick={() => toggleSetting(keyName)}
      >
        <span></span>
      </button>

    </div>
  );

  return (
    <div className="admin-page">

      <header className="admin-page-header">

        <div>
          <small>ESTATEPRO / SYSTEM</small>
          <h1>Admin Settings</h1>
          <p>
            Configure platform notifications and security.
          </p>
        </div>

        <button onClick={() => navigate("/admin")}>
          ← Dashboard
        </button>

      </header>

      <div className="settings-container">

        <div className="settings-section">

          <div className="settings-title">
            <span>🔔</span>
            <div>
              <h2>Notifications</h2>
              <p>
                Control admin alerts and platform updates.
              </p>
            </div>
          </div>

          <Setting
            title="New Property Notification"
            text="Receive notification when seller submits a property."
            keyName="propertyNotification"
          />

          <Setting
            title="New User Notification"
            text="Receive alerts for new buyer and seller registrations."
            keyName="userNotification"
          />

          <Setting
            title="Report Notification"
            text="Receive alerts when users submit reports."
            keyName="reportNotification"
          />

        </div>

        <div className="settings-section">

          <div className="settings-title">
            <span>🔐</span>
            <div>
              <h2>Security</h2>
              <p>
                Manage administrator security controls.
              </p>
            </div>
          </div>

          <Setting
            title="Security Alerts"
            text="Receive alerts about suspicious activity."
            keyName="securityAlert"
          />

          <Setting
            title="Two Factor Authentication"
            text="Add another security layer to admin login."
            keyName="twoFactor"
          />

        </div>

      </div>

    </div>
  );
}

export default AdminSettings;