import React, { useEffect, useState } from 'react';
import '../pages/styles/Chatbot.css';
import '../../src/index.css';
import sendButton from "../img/send.png";
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
import UserMessage from './UserMesage';
import BotMessage from './BotMessage';
import Groq from "groq-sdk";


// Setup Groq
const groq = new Groq({
  apiKey: process.env.REACT_APP_GROQ_API,
  dangerouslyAllowBrowser: true
});

// Fetch reply
async function fetchGroq(query) {

  const response = await groq.chat.completions.create({
    model: "llama3-70b-8192", // <-- fixed model name
    messages: [
    {
      role: "system",
      content: `
      You are a helpful assistant. Respond in the following format:
      - Start with a header that includes an emoji and a brief summary of the topic (2 line breaks after).
      - For each step:
        - Use an emoji + step number + short title
        - One line break below it
        - Then provide a paragraph-style detailed explanation (no emojis in paragraph)
        - One line break before the next step
      - After all steps, add a "Recommended Prompt" with 2 line breaks above it

      Avoid essay-style responses. Use markdown line breaks where needed.
    `
    },
      {
        role: "user",
        content: query
      }
    ]
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
  const initialMessBot = {
    bot: `👋 **Welcome to the Chat Simulation!**\n\n 💡 This chatbot is a project in Artist For Humanity by a teens that helps you simulate interview questions, study sessions, and more. The majority practice of simulation that focuses on working with an API and about data for a programmer. This project is a reference to the ChatGPT website but more user friendly. 
    And please enjoy it as well as this is still in process so we really apreciating your time for this website. *Thank you and we hope you enjoy this website with all your joys!*
    \n\n🛠️ **Type your question below to begin!**`
  }
  // 🔄 Load or create session on first mount
  useEffect(() => {
    if (showMessage.length === 0 && chatSessionId === null){
      setShowMessage([initialMessBot]);
    }
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

    const ResearchInput = {bot: "🤖 researching, please wait..."};
    let ResearchTiming = setTimeout(() =>{
      setShowMessage(prev =>[...prev, ResearchInput]);
    }, 100);

    try {
      const botResponse = await fetchGroq(userInput);

      clearTimeout(ResearchTiming);

      setShowMessage(prev => {
        const withoutResearch = prev.filter(
          msg => msg.bot !== ResearchInput.bot
        );
        return [...withoutResearch, { user: userInput, bot:botResponse}];
      });
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
      <Link to="/"
       className='logout'
       onClick ={() => {
        localStorage.clear();
       }}>Log out</Link>
      <Sidebar onSessionSelected={loadChatSession} />
      <div className="chat_interaction">
        {showMessage.map((msg, index) => (
          <div key={index}>
            {msg.user && <UserMessage message={msg.user} />}
            {msg.bot && <BotMessage message={msg.bot} />}
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
