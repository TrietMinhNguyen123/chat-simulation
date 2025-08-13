import "../pages/styles/Chatbot.css";
import React, { useState } from "react";

function ConversationSave({ id, onClick }) {

    const [isVisible, setIsVisible] = useState(true)

    if(!isVisible) return null;
     
    return (
      <div className="UI_feature" onClick={onClick}>
        <div className="Conversation_content">
          <p className="text_ui">{id}</p>
          <div className="delete_container">
            <button className="delete" onClick={() => deleteSession(id)}>X</button>
          </div>
        </div>
      </div>
    );

    function isEmpty(obj) {
        for (const prop in obj) {
        if (Object.hasOwn(obj, prop)) {
            return false;
        }
        }
    
        return true;
    }

    function deleteSession(id){ 
        const stored = localStorage.getItem("chat-messages");
        if (!stored) return;
        const parse = JSON.parse(stored);

        if(isEmpty(parse)){
            localStorage.clear();
        }

        delete parse[id];
    
        localStorage.setItem("chat-messages", JSON.stringify(parse));
        setIsVisible(false);

        window.location.reload()
    }
    
}

export default ConversationSave;
