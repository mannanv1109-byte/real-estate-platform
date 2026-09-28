import { useNavigate } from "react-router-dom";
import "./AdminTransactions.css";

function AdminTransactions() {
  const navigate = useNavigate();

  const transactions = [
    {
      id: "TXN001",
      buyer: "Rahul Patel",
      seller: "Amit Shah",
      property: "3 BHK Apartment",
      amount: "₹72,00,000",
      status: "Completed",
    },
    {
      id: "TXN002",
      buyer: "Jay Mehta",
      seller: "Raj Shah",
      property: "Premium Villa",
      amount: "₹1,10,00,000",
      status: "Processing",
    },
    {
      id: "TXN003",
      buyer: "Priya Desai",
      seller: "Amit Shah",
      property: "2 BHK Flat",
      amount: "₹48,00,000",
      status: "Completed",
    },
  ];

  return (
    <div className="admin-page">

      <header className="admin-page-header">

        <div>
          <small>ESTATEPRO / FINANCE</small>
          <h1>Transactions</h1>
          <p>
            Monitor property transactions and payments.
          </p>
        </div>

        <button onClick={() => navigate("/admin")}>
          ← Dashboard
        </button>

      </header>

      <div className="transaction-table">

        <div className="transaction-head">
          <span>ID</span>
          <span>Buyer</span>
          <span>Seller</span>
          <span>Property</span>
          <span>Amount</span>
          <span>Status</span>
        </div>

        {transactions.map((transaction) => (

          <div className="transaction-row" key={transaction.id}>

            <strong>{transaction.id}</strong>

            <span>{transaction.buyer}</span>

            <span>{transaction.seller}</span>

            <span>{transaction.property}</span>

            <b>{transaction.amount}</b>

            <span
              className={`transaction-status ${transaction.status.toLowerCase()}`}
            >
              {transaction.status}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}

export default AdminTransactions;