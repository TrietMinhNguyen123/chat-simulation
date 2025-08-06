import React from "react";
import {motion} from "framer-motion";
import "./styles/Chatbot.css";
import ReactMarkdown from "react-markdown";

export default function BotMessage({message}){

    return(
        <>
        <div className="w-full h-fit justify-start flex">
            <motion.div
             className="Contain-box"
             initial = {{opacity: 0, y: 20}}
             animate = {{opacity: 1, y: 0}}
             transition={{duration: 0.4, ease: "easeOut"}}>
                <ReactMarkdown>{message}</ReactMarkdown>
            </motion.div>
        </div>
        </>
    )
}