import React, {useEffect, useState, useRef} from 'react';
import '../pages/styles/Chatbot.css';
import '../../src/index.css'
import sendButton from "../img/send.png";
import Sidebar from './sidebar';
import UserMessage from './UserMesage';
import BotMessage from './BotMessage';
function ChatBot() {
  const [showMessage, setShowMessage] = useState([]);
  const [input, setInput] = useState("");

  const handleChat = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    
    setShowMessage([...showMessage, input]);
    setInput("");

    const chatInteraction = document.getElementsByClassName('chat_interaction')[0];
    if (chatInteraction) {
      chatInteraction.scrollTop = chatInteraction.scrollHeight;
    }
  };

  return (
    <div id="Chatpage" className={`ChatPage`}>
        <div id="logo" className='logo'>Chat simulation</div>
        <Sidebar>
        </Sidebar>
        <div className="chat_interaction">
          {showMessage.map((msg, index) => (
            <div>
              <UserMessage key={index} message={msg}/>
              <BotMessage key={index} message={msg}/>
            </div>
          ))}
        </div>
          <form className='Search_container' onSubmit={handleChat} >
            <input className='Search_bar' onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder="Search your answer.."/>
            <button type="submit">
            <img className="sendButton2" src={sendButton}></img>
            </button>
          </form>
    </div>
  );
}

export default ChatBot;
