import React from 'react';
import '../pages/styles/Chatbot.css';
import '../../src/index.css'
import search_glass from "../img/search_glass.png";
function ChatBot() {
  return (
    <div className="ChatPage">
        <div className='logo'>Chat simulation</div>
        <div className='Side_bar'></div>
        <div className="chat_interaction">
            <div className='Search_location'>
            <input className='Search_bar' type="text" placeholder="Search..">
            </input>
              <img src={search_glass}></img>
            </div>
        </div>
    </div>
  );
}

export default ChatBot;
