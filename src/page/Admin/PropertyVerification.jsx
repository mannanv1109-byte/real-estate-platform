import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PropertyVerification.css";

function PropertyVerification() {
  const navigate = useNavigate();

  const [status, setStatus] = useState("Pending");
  const [reason, setReason] = useState("");

  const approveProperty = () => {
    setStatus("Approved");
  };

  const rejectProperty = () => {
    if (!reason.trim()) {
      alert("Please enter rejection reason");
      return;
    }

    setStatus("Rejected");
  };

  return (
    <div className="verification-page">

      <header className="verification-header">

        <div>
          <small>ESTATEPRO / VERIFICATION</small>
          <h1>Property Verification</h1>
          <p>
            Verify seller information and property
            documents before approval.
          </p>
        </div>

        <button
          onClick={() =>
            navigate("/admin/properties")
          }
        >
          ← Properties
        </button>

      </header>

      <div className="verification-layout">

        {/* PROPERTY */}

        <div className="verification-main">

          <div className="verification-card">

            <div className="verification-property-image">
              🏡
            </div>

            <div className="property-verification-info">

              <span>PROPERTY #EST10245</span>

              <h2>Luxury 4 BHK Villa</h2>

              <p>
                📍 Satellite, Ahmedabad, Gujarat
              </p>

              <strong>₹1.25 Crore</strong>

            </div>

            <div
              className={`current-status ${status.toLowerCase()}`}
            >
              {status}
            </div>

          </div>

          {/* PROPERTY DETAILS */}

          <div className="verification-card">

            <div className="verification-title">
              <h2>Property Details</h2>
              <span>01</span>
            </div>

            <div className="details-grid">

              <div>
                <small>Property Type</small>
                <strong>Villa</strong>
              </div>

              <div>
                <small>BHK</small>
                <strong>4 BHK</strong>
              </div>

              <div>
                <small>Bathrooms</small>
                <strong>4</strong>
              </div>

              <div>
                <small>Area</small>
                <strong>2,850 sq.ft</strong>
              </div>

              <div>
                <small>City</small>
                <strong>Ahmedabad</strong>
              </div>

              <div>
                <small>Listed By</small>
                <strong>Seller</strong>
              </div>

            </div>

          </div>

          {/* SELLER */}

          <div className="verification-card">

            <div className="verification-title">
              <h2>Seller Information</h2>
              <span>02</span>
            </div>

            <div className="seller-verification">

              <div className="seller-avatar">
                RP
              </div>

              <div>
                <strong>Rahul Patel</strong>
                <p>
                  rahul.patel@gmail.com
                </p>
                <p>
                  +91 98765 43210
                </p>
              </div>

              <b>
                ✓ Verified Account
              </b>

            </div>

          </div>

          {/* DOCUMENTS */}

          <div className="verification-card">

            <div className="verification-title">
              <h2>Property Documents</h2>
              <span>03</span>
            </div>

            <div className="document-list">

              <div>
                <span>📄</span>

                <section>
                  <strong>
                    Property Ownership Document
                  </strong>
                  <small>
                    ownership-document.pdf
                  </small>
                </section>

                <button>View</button>
              </div>

              <div>
                <span>📄</span>

                <section>
                  <strong>
                    Property Tax Document
                  </strong>
                  <small>
                    property-tax.pdf
                  </small>
                </section>

                <button>View</button>
              </div>

              <div>
                <span>📄</span>

                <section>
                  <strong>
                    Seller Identity Proof
                  </strong>
                  <small>
                    identity-proof.pdf
                  </small>
                </section>

                <button>View</button>
              </div>

            </div>

          </div>

        </div>

        {/* RIGHT PANEL */}

        <aside className="verification-side">

          <div className="verification-action-card">

            <span>ADMIN DECISION</span>

            <h2>
              Review Property
            </h2>

            <p>
              Verify all information before making
              a decision.
            </p>

            <button
              className="approve-btn"
              onClick={approveProperty}
            >
              ✓ Approve Property
            </button>

            <textarea
              placeholder="Reason for rejection..."
              value={reason}
              onChange={(e) =>
                setReason(e.target.value)
              }
            />

            <button
              className="reject-btn"
              onClick={rejectProperty}
            >
              ✕ Reject Property
            </button>

          </div>

          <div className="verification-flow">

            <span>VERIFICATION FLOW</span>

            <div className="flow-step active">
              <b>1</b>
              <div>
                <strong>Property Submitted</strong>
                <small>Completed</small>
              </div>
            </div>

            <div
              className={`flow-step ${
                status !== "Pending"
                  ? "active"
                  : ""
              }`}
            >
              <b>2</b>
              <div>
                <strong>Admin Review</strong>
                <small>
                  {status === "Pending"
                    ? "In progress"
                    : "Completed"}
                </small>
              </div>
            </div>

            <div
              className={`flow-step ${
                status === "Approved"
                  ? "active"
                  : ""
              }`}
            >
              <b>3</b>
              <div>
                <strong>Buyer Visibility</strong>
                <small>
                  {status === "Approved"
                    ? "Visible"
                    : "Waiting"}
                </small>
              </div>
            </div>

          </div>

        </aside>

      </div>

    </div>
  );
}

export default PropertyVerification;