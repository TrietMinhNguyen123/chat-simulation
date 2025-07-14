import React from "react";
import "./styles/Chatbot.css";

export default function UserMessage({message}){

    return(
        <>
        <div className="w-full justify-end flex">
            <div className="Contain-box">
                <p>{message}</p>
            </div>
        </div>
        </>
    )
}