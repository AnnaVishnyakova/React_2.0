import React, { useState, useRef,useEffect} from "react";

import "./index.css";
// import { MessageChats } from "../MessageChats";
import {AUTHORS} from '../../utils/constants';
import { FormMui } from "../FormMui";
import { MessageList } from "../MessageList";
import {
  Navigate,
  useNavigate,
  useParams
} from "react-router";



export const MessageField=({messageList,addMessage}) =>{

  const messagesEnd =useRef()
  const {chatId} = useParams();

  const handleAddMessage = (text) => {
    sendMessage(text, AUTHORS.ME);
  };

  const sendMessage =(text,author)=>{
       
      const newMessage = {
        text,
        author,
        id:`newMessage-${Date.now()}`,
      };
      addMessage(chatId, newMessage);
  }

  useEffect(() => {
    messagesEnd.current?.scrollIntoView();

    let timeout;
    if (
      messageList[chatId]?.[messageList[chatId]?.length - 1]?.author ===
      AUTHORS.ME) {
      timeout = setTimeout(() => {
        sendMessage("still here", AUTHORS.BOT);
      }, 1000);
      
      };
      return ()=>{
        clearTimeout(timeout)
        console.log(messageList[chatId])
      }

      
  }, [messageList]);

  if (!messageList[chatId]) {
    return <Navigate to="/chats" replace />;
  }
  
  // console.log(params,chatId)
  return (
    <div className="message-list">
      <div className="messages">
        <MessageList messages={messageList[chatId]}/>
      </div>
      <FormMui onSubmit={handleAddMessage}/>
    </div> 
      );
}
