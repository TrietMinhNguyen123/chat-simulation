import React from "react";
import "./styles/Chatbot.css";

export default function BotMessage({message}){

    return(
        <>
        <div className="w-full justify-start flex">
            <div className="Contain-box">
                <p>{message}</p>
            </div>
        </div>
        </>
    )
}