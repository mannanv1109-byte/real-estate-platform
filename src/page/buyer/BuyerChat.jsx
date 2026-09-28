import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./BuyerChat.css";

const sellers = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Property Seller",
    avatar: "RK",
    online: true,
    lastMessage: "Yes, the property is available.",
    time: "10:42 PM",
    unread: 2,
    property: "Luxury Modern Villa",
  },
  {
    id: 2,
    name: "Priya Shah",
    role: "Verified Seller",
    avatar: "PS",
    online: true,
    lastMessage: "I can arrange a visit tomorrow.",
    time: "08:30 PM",
    unread: 1,
    property: "Premium Apartment",
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Property Agent",
    avatar: "AP",
    online: false,
    lastMessage: "Thank you for your enquiry.",
    time: "Yesterday",
    unread: 0,
    property: "Family House",
  },
];

function BuyerChat() {
  const navigate = useNavigate();

  const [selectedSeller, setSelectedSeller] =
    useState(sellers[0]);

  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "seller",
      text: "Hello Jainam! Thank you for your interest in our property.",
      time: "10:31 PM",
    },
    {
      id: 2,
      sender: "buyer",
      text: "Hi Rajesh, I would like to know more about the property.",
      time: "10:34 PM",
    },
    {
      id: 3,
      sender: "seller",
      text: "Sure. The property is fully verified and currently available.",
      time: "10:36 PM",
    },
    {
      id: 4,
      sender: "buyer",
      text: "Can I visit the property this weekend?",
      time: "10:40 PM",
    },
    {
      id: 5,
      sender: "seller",
      text: "Yes, the property is available. We can arrange a visit.",
      time: "10:42 PM",
    },
  ]);

  const sendMessage = () => {
    if (!message.trim()) return;

    setMessages((current) => [
      ...current,
      {
        id: Date.now(),
        sender: "buyer",
        text: message.trim(),
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);

    setMessage("");
  };

  const handleSellerChange = (seller) => {
    setSelectedSeller(seller);

    setMessages([
      {
        id: Date.now(),
        sender: "seller",
        text: `Hello Jainam! How can I help you regarding ${seller.property}?`,
        time: "Now",
      },
    ]);
  };

  return (
    <div className="buyer-chat-page">
      <header className="chat-header">
        <div className="chat-brand">
          <Link to="/buyer-dashboard">
            <div>EP</div>

            <span>
              Estate<span>Pro</span>
              <small>BUYER MESSENGER</small>
            </span>
          </Link>
        </div>

        <button
          onClick={() => navigate("/buyer-dashboard")}
          className="chat-back"
        >
          ← Dashboard
        </button>
      </header>

      <main className="chat-container">
        <div className="chat-heading">
          <div>
            <span>COMMUNICATION</span>

            <h1>
              Your conversations
              <strong>.</strong>
            </h1>
          </div>

          <div className="secure-chat">
            🛡 Secure messaging
          </div>
        </div>

        <section className="chat-window">
          {/* SELLER LIST */}
          <aside className="seller-list">
            <div className="seller-list-top">
              <div>
                <strong>Messages</strong>
                <span>3 conversations</span>
              </div>

              <button>＋</button>
            </div>

            <div className="chat-search">
              <span>⌕</span>
              <input
                placeholder="Search conversation..."
              />
            </div>

            <div className="seller-list-items">
              {sellers.map((seller) => (
                <button
                  className={`seller-chat-item ${
                    selectedSeller.id === seller.id
                      ? "active"
                      : ""
                  }`}
                  key={seller.id}
                  onClick={() =>
                    handleSellerChange(seller)
                  }
                >
                  <div className="chat-avatar">
                    {seller.avatar}

                    {seller.online && (
                      <span className="chat-online" />
                    )}
                  </div>

                  <div className="seller-chat-info">
                    <div>
                      <strong>{seller.name}</strong>
                      <small>{seller.time}</small>
                    </div>

                    <p>{seller.lastMessage}</p>

                    <span>{seller.property}</span>
                  </div>

                  {seller.unread > 0 && (
                    <b className="unread-count">
                      {seller.unread}
                    </b>
                  )}
                </button>
              ))}
            </div>
          </aside>

          {/* CHAT */}
          <div className="chat-content">
            <div className="active-chat-header">
              <div className="active-seller">
                <div className="active-chat-avatar">
                  {selectedSeller.avatar}

                  {selectedSeller.online && (
                    <span />
                  )}
                </div>

                <div>
                  <strong>{selectedSeller.name}</strong>

                  <span>
                    <i />
                    {selectedSeller.online
                      ? "Online now"
                      : "Offline"}
                  </span>
                </div>
              </div>

              <div className="chat-header-buttons">
                <button>☎</button>
                <button>⋮</button>
              </div>
            </div>

            <div className="property-chat-banner">
              <div className="chat-property-icon">
                ⌂
              </div>

              <div>
                <span>DISCUSSING PROPERTY</span>
                <strong>{selectedSeller.property}</strong>
              </div>

              <Link
                to="/property/1"
              >
                View →
              </Link>
            </div>

            <div className="messages-area">
              <div className="today-divider">
                <span>Today</span>
              </div>

              {messages.map((item) => (
                <div
                  className={`message-row ${
                    item.sender === "buyer"
                      ? "buyer-message"
                      : "seller-message"
                  }`}
                  key={item.id}
                >
                  {item.sender === "seller" && (
                    <div className="message-mini-avatar">
                      {selectedSeller.avatar}
                    </div>
                  )}

                  <div className="message-content">
                    <div className="message-bubble">
                      {item.text}
                    </div>

                    <span className="message-time">
                      {item.time}
                      {item.sender === "buyer" && (
                        <b> ✓✓</b>
                      )}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="chat-input-area">
              <button className="attachment-btn">
                ＋
              </button>

              <input
                type="text"
                placeholder="Type your message..."
                value={message}
                onChange={(e) =>
                  setMessage(e.target.value)
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    sendMessage();
                  }
                }}
              />

              <button className="emoji-btn">☺</button>

              <button
                className="send-message-btn"
                onClick={sendMessage}
              >
                ➤
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default BuyerChat;