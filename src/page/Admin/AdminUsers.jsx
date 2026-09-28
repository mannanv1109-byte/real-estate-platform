import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminUsers.css";

function AdminUsers() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const [users, setUsers] = useState([
    {
      id: "USR001",
      name: "Rahul Patel",
      email: "rahul@gmail.com",
      phone: "+91 98765 43210",
      role: "Buyer",
      status: "Active",
    },
    {
      id: "USR002",
      name: "Amit Shah",
      email: "amit@gmail.com",
      phone: "+91 98765 12345",
      role: "Seller",
      status: "Active",
    },
    {
      id: "USR003",
      name: "Jay Mehta",
      email: "jay@gmail.com",
      phone: "+91 98250 11111",
      role: "Buyer",
      status: "Blocked",
    },
    {
      id: "USR004",
      name: "Priya Desai",
      email: "priya@gmail.com",
      phone: "+91 99090 22222",
      role: "Seller",
      status: "Active",
    },
  ]);

  const toggleStatus = (id) => {
    setUsers((oldUsers) =>
      oldUsers.map((user) =>
        user.id === id
          ? {
              ...user,
              status:
                user.status === "Active"
                  ? "Blocked"
                  : "Active",
            }
          : user
      )
    );
  };

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      user.email
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || user.role === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="admin-page">

      <header className="admin-page-header">

        <div>
          <small>ESTATEPRO / ADMIN</small>
          <h1>User Management</h1>
          <p>
            Manage buyers, sellers and platform accounts.
          </p>
        </div>

        <button
          onClick={() => navigate("/admin")}
        >
          ← Dashboard
        </button>

      </header>

      <div className="users-toolbar">

        <input
          type="text"
          placeholder="Search name or email..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <select
          value={filter}
          onChange={(e) =>
            setFilter(e.target.value)
          }
        >
          <option>All</option>
          <option>Buyer</option>
          <option>Seller</option>
        </select>

      </div>

      <div className="users-table">

        <div className="users-table-head">
          <span>User</span>
          <span>Phone</span>
          <span>Role</span>
          <span>Status</span>
          <span>Action</span>
        </div>

        {filteredUsers.map((user) => (

          <div
            className="users-table-row"
            key={user.id}
          >

            <div className="user-name-cell">

              <div className="user-table-avatar">
                {user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>

              <div>
                <strong>{user.name}</strong>
                <small>{user.email}</small>
              </div>

            </div>

            <span>{user.phone}</span>

            <b className={`role ${user.role.toLowerCase()}`}>
              {user.role}
            </b>

            <b
              className={`user-status ${user.status.toLowerCase()}`}
            >
              {user.status}
            </b>

            <button
              onClick={() =>
                toggleStatus(user.id)
              }
            >
              {user.status === "Active"
                ? "Block"
                : "Unblock"}
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default AdminUsers;