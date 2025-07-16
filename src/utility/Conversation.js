import "../pages/styles/Chatbot.css";
import React from "react";

function ConversationSave({ id, onClick }) {

    return (
      <div className="UI_feature" onClick={onClick}>
        <div id="NewChat" className="Content_container">
          <p className="text_ui">{id}</p>
        </div>
      </div>
    );
  }

export default ConversationSave;