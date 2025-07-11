import React, { useEffect } from 'react';
import '../pages/styles/Chatbot.css';
import '../../src/index.css'
import sendButton from "../img/send.png";
import Sidebar from './sidebar';
function ChatBot() {
  return (
    <div className={`ChatPage`}>
        <div className='logo'>Chat simulation</div>
        <Sidebar>
        </Sidebar>
        <div className="chat_interaction">
        <div className='Search_container'>
        <input className='Search_bar' type="text" placeholder="Search your answer.."/>
          <img class="sendButton2" src={sendButton}></img>
        </div>
        </div>
    </div>
  );
}

export default ChatBot;
