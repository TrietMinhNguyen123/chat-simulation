import React from 'react';
import '../pages/styles/Chatbot.css';
import '../../src/index.css'
import sendButton from "../img/send.png"
function ChatBot() {
  return (
    <div className="ChatPage">
        <div className='logo'>Chat simulation</div>
        <div className='Side_bar'></div>
        <div className="chat_interaction">
        <input className='Search_bar2' type="text" placeholder="Search your answer.."/>
          <img class="sendButton2" src={sendButton}></img>
        </div>
    </div>
  );
}

export default ChatBot;
