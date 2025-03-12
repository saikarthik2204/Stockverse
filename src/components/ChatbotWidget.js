import React, { useState, useEffect, useRef } from "react";
import "./ChatbotWidget.css"; // Make sure to create this file for styling
import axios from "axios";

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! How can I assist you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  // Auto-scroll to the latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const response = await axios.post("http://localhost:3002/chat", 
        { message: input }, // ✅ Correct request body
        { headers: { "Content-Type": "application/json" } } // ✅ Ensure JSON format
      );
      const botReply = response.data.reply || "Sorry, I didn't understand that.";

      setMessages((prev) => [...prev, { text: botReply, sender: "bot" }]);
    } catch (error) {
      console.error("Chatbot API error:", error);
      setMessages((prev) => [
        ...prev,
        { text: "⚠️ Error connecting to chatbot. Please try again.", sender: "bot" },
      ]);
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <div className="chat-toggle" onClick={toggleChatbot}>
        💬
      </div>

      {/* Chatbot UI */}
      {isOpen && (
        <div className="chatbot-widget">
          {/* Header */}
          <div className="chatbot-header">
            Chatbot Assistant
            <span onClick={toggleChatbot} style={{ cursor: "pointer" }}>✖</span>
          </div>

          {/* Messages Container */}
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.sender}-message`}>
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Field */}
          <div className="chat-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>➤</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatbotWidget;
