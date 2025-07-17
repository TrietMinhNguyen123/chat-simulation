import React, { useEffect, useState } from 'react';
import '../pages/styles/Chatbot.css';
import '../../src/index.css';
import sendButton from "../img/send.png";
import Sidebar from './sidebar';
import UserMessage from './UserMesage';
import BotMessage from './BotMessage';
import Groq from "groq-sdk";

// Setup Groq
const groq = new Groq({
  apiKey: "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",
  dangerouslyAllowBrowser: true
});

// Fetch reply
async function fetchGroq(query) {
  const response = await groq.chat.completions.create({
    messages: [{ role: "user", content: query }],
    model: "llama-3.3-70b-versatile"
  });
  return response.choices[0]?.message?.content || "No response";
}



function ChatBot() {
  const [showMessage, setShowMessage] = useState([]);
  const [input, setInput] = useState("");
  const [chatSessionId, setChatSessionId] = useState(null);
  
  const loadChatSession= (sessionId) => {
    const allChats = JSON.parse(localStorage.getItem("chat-messages") || {})
    const selectedSessions = allChats[sessionId];
    if(selectedSessions)
      setShowMessage(selectedSessions);
      setChatSessionId(sessionId);
      console.log(`📥 Loaded session: ${sessionId}`);
  }
  // 🔄 Load or create session on first mount
  useEffect(() => {
    // null
  }, []);  

  // 💾 Save messages to localStorage under current session ID
  useEffect(() => {
    if (chatSessionId === null) return;

    const existingData = JSON.parse(localStorage.getItem("chat-messages")) || {};
    existingData[chatSessionId] = showMessage;
    localStorage.setItem("chat-messages", JSON.stringify(existingData));
  }, [showMessage, chatSessionId]);

  // ✉️ Send message
  const handleChat = async (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    let sessionId = chatSessionId;
    const userInput = input;
    if(!sessionId){
      sessionId = userInput;
      setChatSessionId(sessionId)
    }
    setInput("");

    try {
      const botResponse = await fetchGroq(userInput);
      const newMessage = { user: userInput, bot: botResponse };
      setShowMessage(prev => [...prev, newMessage]);
    } catch (err) {
      const fallbackMessage = { user: userInput, bot: "I am sorry but I don't understand! :(" };
      setShowMessage(prev => [...prev, fallbackMessage]);
    }
  };

  // ⬇️ Auto scroll
  useEffect(() => {
    const chatInteraction = document.getElementsByClassName("chat_interaction")[0];
    if (chatInteraction) {
      chatInteraction.scrollTop = chatInteraction.scrollHeight;
    }
  }, [showMessage]);

  return (
    <div id="Chatpage" className="ChatPage">
      <div id="logo" className='logo'>Chat simulation</div>
      <Sidebar onSessionSelected={loadChatSession} />
      <div className="chat_interaction">
        {showMessage.map((msg, index) => (
          <div key={index}>
            <UserMessage message={msg.user} />
            <BotMessage message={msg.bot} />
          </div>
        ))}
      </div>
      <form className='Search_container' onSubmit={handleChat}>
        <input
          className='Search_bar'
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          placeholder="Search your answer..."
        />
        <button type="submit">
          <img className="sendButton2" src={sendButton} alt="Send" />
        </button>
      </form>
    </div>
  );
}

export default ChatBot;
