import React, { useState } from "react";
import sendMessageToChatGPT from "../utils/chatGPT";

const ChatBot = ({ onClose }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");

    try {
      const response = await sendMessageToChatGPT(input);
      setMessages([...newMessages, { text: response, sender: "bot" }]);
    } catch (error) {
      console.error("Ошибка запроса к ChatGPT:", error);
    }
  };

  return (
    <div className="chatbot-container">
      <h2>Чат-бот</h2>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Задайте вопрос..."
        />
        <button onClick={handleSendMessage}>Отправить</button>
      </div>
    </div>
  );
};

export default ChatBot;
