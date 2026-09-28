import { useNavigate } from "react-router-dom";
import "./AdminDocuments.css";

function AdminDocuments() {
  const navigate = useNavigate();

  const documents = [
    {
      seller: "Rahul Patel",
      property: "Luxury Villa",
      document: "Ownership Document",
      file: "ownership.pdf",
      status: "Pending",
    },
    {
      seller: "Amit Shah",
      property: "Modern 3 BHK",
      document: "Property Tax",
      file: "tax-document.pdf",
      status: "Verified",
    },
    {
      seller: "Jay Mehta",
      property: "Premium Apartment",
      document: "Identity Proof",
      file: "identity.pdf",
      status: "Pending",
    },
  ];

  return (
    <div className="admin-page">

      <header className="admin-page-header">

        <div>
          <small>ESTATEPRO / DOCUMENTS</small>
          <h1>Document Verification</h1>
          <p>
            Verify documents submitted by sellers.
          </p>
        </div>

        <button onClick={() => navigate("/admin")}>
          ← Dashboard
        </button>

      </header>

      <div className="documents-grid">

        {documents.map((doc, index) => (

          <div className="document-card" key={index}>

            <div className="document-icon">
              📄
            </div>

            <span className={`doc-status ${doc.status.toLowerCase()}`}>
              {doc.status}
            </span>

            <h2>{doc.document}</h2>

            <p>{doc.file}</p>

            <div className="document-meta">
              <span>Seller</span>
              <strong>{doc.seller}</strong>
            </div>

            <div className="document-meta">
              <span>Property</span>
              <strong>{doc.property}</strong>
            </div>

            <div className="document-actions">
              <button>View</button>
              <button>Verify</button>
            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default AdminDocuments;