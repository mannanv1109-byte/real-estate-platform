import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminReports.css";

function AdminReports() {
  const navigate = useNavigate();

  const [reports, setReports] = useState([
    {
      id: "REP001",
      type: "Fake Property",
      reportedBy: "Rahul Patel",
      target: "Luxury Villa",
      priority: "High",
      status: "Open",
    },
    {
      id: "REP002",
      type: "Wrong Information",
      reportedBy: "Amit Shah",
      target: "Modern Apartment",
      priority: "Medium",
      status: "Open",
    },
    {
      id: "REP003",
      type: "Abusive User",
      reportedBy: "Priya Mehta",
      target: "Seller Account",
      priority: "Low",
      status: "Resolved",
    },
  ]);

  const resolveReport = (id) => {
    setReports((old) =>
      old.map((report) =>
        report.id === id
          ? { ...report, status: "Resolved" }
          : report
      )
    );
  };

  return (
    <div className="admin-page">

      <header className="admin-page-header">

        <div>
          <small>ESTATEPRO / REPORTS</small>
          <h1>Reports & Complaints</h1>
          <p>
            Review user reports and platform complaints.
          </p>
        </div>

        <button onClick={() => navigate("/admin")}>
          ← Dashboard
        </button>

      </header>

      <div className="reports-grid">

        {reports.map((report) => (

          <div className="report-card" key={report.id}>

            <div className="report-top">

              <span className={`priority ${report.priority.toLowerCase()}`}>
                {report.priority}
              </span>

              <small>{report.id}</small>

            </div>

            <h2>{report.type}</h2>

            <div className="report-info">
              <span>Reported By</span>
              <strong>{report.reportedBy}</strong>
            </div>

            <div className="report-info">
              <span>Target</span>
              <strong>{report.target}</strong>
            </div>

            <div className="report-bottom">

              <b className={`report-status ${report.status.toLowerCase()}`}>
                {report.status}
              </b>

              {report.status === "Open" && (
                <button
                  onClick={() =>
                    resolveReport(report.id)
                  }
                >
                  Resolve
                </button>
              )}

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default AdminReports;