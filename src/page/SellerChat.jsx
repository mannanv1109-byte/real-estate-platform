import { useEffect, useRef, useState } from "react";
import "./SellerChat.css";

function SellerChat() {
  const [selectedBuyer, setSelectedBuyer] = useState(0);
  const [message, setMessage] = useState("");
  const [search, setSearch] = useState("");
  const [isOnline, setIsOnline] = useState(true);
  const [typing, setTyping] = useState(false);

  const messageEndRef = useRef(null);

  const [buyers, setBuyers] = useState([
    {
      id: 1,
      name: "Rahul Patel",
      initials: "RP",
      property: "Modern Luxury Villa",
      online: true,
      lastSeen: "Online",
      unread: 2,
      messages: [
        {
          id: 1,
          sender: "buyer",
          text: "Hello, is this property still available?",
          time: "10:30 AM",
        },
        {
          id: 2,
          sender: "seller",
          text: "Yes, the property is still available.",
          time: "10:32 AM",
        },
        {
          id: 3,
          sender: "buyer",
          text: "Can I visit the property tomorrow?",
          time: "10:35 AM",
        },
      ],
    },

    {
      id: 2,
      name: "Amit Shah",
      initials: "AS",
      property: "Premium Apartment",
      online: false,
      lastSeen: "Last seen yesterday",
      unread: 0,
      messages: [
        {
          id: 4,
          sender: "buyer",
          text: "What is the final price?",
          time: "Yesterday",
        },
        {
          id: 5,
          sender: "seller",
          text: "The final price is ₹48 Lakh.",
          time: "Yesterday",
        },
      ],
    },

    {
      id: 3,
      name: "Priya Mehta",
      initials: "PM",
      property: "Commercial Property",
      online: true,
      lastSeen: "Online",
      unread: 1,
      messages: [
        {
          id: 6,
          sender: "buyer",
          text: "Is parking available?",
          time: "11:20 AM",
        },
        {
          id: 7,
          sender: "seller",
          text: "Yes, dedicated parking is available.",
          time: "11:22 AM",
        },
      ],
    },

    {
      id: 4,
      name: "Neha Patel",
      initials: "NP",
      property: "3 BHK Premium House",
      online: false,
      lastSeen: "Last seen 2 hours ago",
      unread: 0,
      messages: [
        {
          id: 8,
          sender: "buyer",
          text: "Can you share more property photos?",
          time: "09:45 AM",
        },
      ],
    },
  ]);

  const currentBuyer = buyers[selectedBuyer];

  /* =========================
     AUTO SCROLL
  ========================= */

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [currentBuyer.messages]);

  /* =========================
     SEND MESSAGE
  ========================= */

  const sendMessage = () => {
    if (!message.trim()) return;

    const newMessage = {
      id: Date.now(),
      sender: "seller",
      text: message.trim(),
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setBuyers((previousBuyers) =>
      previousBuyers.map((buyer, index) =>
        index === selectedBuyer
          ? {
              ...buyer,
              messages: [...buyer.messages, newMessage],
            }
          : buyer
      )
    );

    setMessage("");
    setTyping(false);
  };

  /* =========================
     ENTER KEY
  ========================= */

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  /* =========================
     SELECT BUYER
  ========================= */

  const selectBuyer = (index) => {
    setSelectedBuyer(index);

    setBuyers((previousBuyers) =>
      previousBuyers.map((buyer, i) =>
        i === index
          ? {
              ...buyer,
              unread: 0,
            }
          : buyer
      )
    );
  };

  /* =========================
     SEARCH BUYERS
  ========================= */

  const filteredBuyers = buyers.filter((buyer) => {
    const value = search.toLowerCase();

    return (
      buyer.name.toLowerCase().includes(value) ||
      buyer.property.toLowerCase().includes(value)
    );
  });

  const getBuyerOriginalIndex = (buyerId) => {
    return buyers.findIndex((buyer) => buyer.id === buyerId);
  };

  /* =========================
     EMOJI
  ========================= */

  const addEmoji = (emoji) => {
    setMessage((previous) => previous + emoji);
  };

  /* =========================
     ATTACHMENT
  ========================= */

  const handleAttachment = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    const attachmentMessage = {
      id: Date.now(),
      sender: "seller",
      text: `📎 ${file.name}`,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setBuyers((previousBuyers) =>
      previousBuyers.map((buyer, index) =>
        index === selectedBuyer
          ? {
              ...buyer,
              messages: [...buyer.messages, attachmentMessage],
            }
          : buyer
      )
    );

    event.target.value = "";
  };

  /* =========================
     START TYPING
  ========================= */

  const handleTyping = (event) => {
    setMessage(event.target.value);

    if (event.target.value.trim()) {
      setTyping(true);
    } else {
      setTyping(false);
    }
  };

  return (
    <div className="seller-chat-page">

      {/* =================================
          CHAT SIDEBAR
      ================================= */}

      <aside className="chat-sidebar">

        {/* Chat Header */}

        <div className="chat-sidebar-header">
          <div>
            <h2>Messages</h2>

            <p>
              {buyers.length} conversations
            </p>
          </div>

          <button
            className="new-chat-btn"
            title="New Chat"
          >
            +
          </button>
        </div>

        {/* Search */}

        <div className="chat-search">
          <span>🔍</span>

          <input
            type="text"
            placeholder="Search buyers..."
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
          />
        </div>

        {/* Buyer List */}

        <div className="buyer-list">

          {filteredBuyers.length === 0 ? (
            <div className="no-buyers">
              <div>🔍</div>
              <p>No buyer found</p>
            </div>
          ) : (
            filteredBuyers.map((buyer) => {
              const originalIndex =
                getBuyerOriginalIndex(buyer.id);

              const lastMessage =
                buyer.messages[
                  buyer.messages.length - 1
                ];

              return (
                <button
                  key={buyer.id}
                  className={
                    selectedBuyer === originalIndex
                      ? "buyer-item active"
                      : "buyer-item"
                  }
                  onClick={() =>
                    selectBuyer(originalIndex)
                  }
                >

                  {/* Avatar */}

                  <div className="buyer-avatar-wrapper">

                    <div className="buyer-avatar">
                      {buyer.initials}
                    </div>

                    {buyer.online && (
                      <span className="online-dot"></span>
                    )}

                  </div>

                  {/* Buyer Info */}

                  <div className="buyer-info">

                    <div className="buyer-name-row">

                      <strong>
                        {buyer.name}
                      </strong>

                      <small>
                        {lastMessage?.time}
                      </small>

                    </div>

                    <div className="buyer-property">
                      🏠 {buyer.property}
                    </div>

                    <div className="buyer-last-message">

                      <span>
                        {lastMessage?.text}
                      </span>

                      {buyer.unread > 0 && (
                        <b className="unread-count">
                          {buyer.unread}
                        </b>
                      )}

                    </div>

                  </div>

                </button>
              );
            })
          )}

        </div>

      </aside>

      {/* =================================
          MAIN CHAT
      ================================= */}

      <section className="chat-main">

        {/* =================================
            CHAT HEADER
        ================================= */}

        <header className="chat-header">

          <div className="chat-user">

            <div className="chat-user-avatar-wrapper">

              <div className="chat-user-avatar">
                {currentBuyer.initials}
              </div>

              {currentBuyer.online && (
                <span className="chat-online-dot"></span>
              )}

            </div>

            <div>

              <h3>
                {currentBuyer.name}
              </h3>

              <span
                className={
                  currentBuyer.online
                    ? "online-text"
                    : "offline-text"
                }
              >
                ●{" "}
                {currentBuyer.online
                  ? "Online"
                  : currentBuyer.lastSeen}
              </span>

            </div>

          </div>

          <div className="chat-header-actions">

            <button
              title="Audio Call"
              className="chat-action-btn"
            >
              📞
            </button>

            <button
              title="Video Call"
              className="chat-action-btn"
            >
              📹
            </button>

            <button
              title="More"
              className="chat-action-btn"
            >
              ⋮
            </button>

          </div>

        </header>

        {/* =================================
            PROPERTY INFO
        ================================= */}

        <div className="chat-property-bar">

          <div className="chat-property-icon">
            🏡
          </div>

          <div className="chat-property-info">

            <strong>
              {currentBuyer.property}
            </strong>

            <span>
              Property Inquiry
            </span>

          </div>

          <button className="view-property-btn">
            View Property
          </button>

        </div>

        {/* =================================
            ONLINE STATUS
        ================================= */}

        <div className="live-status">

          <span className="live-pulse"></span>

          <span>
            Secure conversation
          </span>

          <small>
            Messages are private
          </small>

        </div>

        {/* =================================
            MESSAGES
        ================================= */}

        <div className="messages-container">

          <div className="date-divider">
            <span>
              Today
            </span>
          </div>

          {currentBuyer.messages.map((msg) => (

            <div
              key={msg.id}
              className={
                msg.sender === "seller"
                  ? "message-row seller-message"
                  : "message-row buyer-message"
              }
            >

              {msg.sender === "buyer" && (
                <div className="message-mini-avatar">
                  {currentBuyer.initials}
                </div>
              )}

              <div className="message-content">

                <div className="message-bubble">

                  <p>
                    {msg.text}
                  </p>

                  <div className="message-meta">

                    <span>
                      {msg.time}
                    </span>

                    {msg.sender === "seller" && (
                      <span className="message-check">
                        ✓✓
                      </span>
                    )}

                  </div>

                </div>

              </div>

            </div>

          ))}

          {/* Typing */}

          {typing && currentBuyer.online && (
            <div className="typing-row">

              <div className="typing-avatar">
                {currentBuyer.initials}
              </div>

              <div className="typing-bubble">

                <span></span>
                <span></span>
                <span></span>

              </div>

            </div>
          )}

          <div ref={messageEndRef}></div>

        </div>

        {/* =================================
            EMOJI BAR
        ================================= */}

        <div className="quick-emoji-bar">

          <button
            type="button"
            onClick={() => addEmoji("😊")}
          >
            😊
          </button>

          <button
            type="button"
            onClick={() => addEmoji("👍")}
          >
            👍
          </button>

          <button
            type="button"
            onClick={() => addEmoji("❤️")}
          >
            ❤️
          </button>

          <button
            type="button"
            onClick={() => addEmoji("🏠")}
          >
            🏠
          </button>

          <button
            type="button"
            onClick={() => addEmoji("📍")}
          >
            📍
          </button>

        </div>

        {/* =================================
            MESSAGE INPUT
        ================================= */}

        <div className="chat-input-area">

          <label
            className="attachment-btn"
            title="Attach File"
          >
            📎

            <input
              type="file"
              hidden
              onChange={handleAttachment}
            />
          </label>

          <textarea
            value={message}
            onChange={handleTyping}
            onKeyDown={handleKeyDown}
            placeholder={`Message ${currentBuyer.name}...`}
            rows="1"
          />

          <button
            className="send-message-btn"
            onClick={sendMessage}
            disabled={!message.trim()}
            title="Send Message"
          >
            ➤
          </button>

        </div>

        <div className="chat-footer-text">
          Press <strong>Enter</strong> to send
        </div>

      </section>

    </div>
  );
}

export default SellerChat;