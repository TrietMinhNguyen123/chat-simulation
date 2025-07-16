import React from "react";
import "./styles/Chatbot.css";

export default function UserMessage({message}){

    return(
        <>
        <div className="w-full h-fit justify-end flex">
            <div className="Contain-box user">
                <p>{message}</p>
            </div>
        </div>
        </>
    )
}