import React, { useState, useRef,} from "react";
//import logo from "./logo.svg";
import "./App.css";
import { MessageChats } from "./components/MessageChats";
import { MessageList } from "./components/MessageList";
import {AUTHORS} from './utils/constants';
//  import { Form } from "./components/Form";
import { FormMui } from "./components/FormMui";
import{ useEffect } from "react/cjs/react.development";


function App() {
  const [messageList, setMessageList] = useState([
    {id:'fsf', text: "msg1", author:AUTHORS.ME },
  ]);
  const messagesEnd =useRef()
  
 
  const handleAddMessage = (text) => {
    sendMessage(text, AUTHORS.ME);
  };

  const sendMessage =(text,author)=>{
      const newMessage = {
        text,
        author,
        id:`newMessage-${Date.now()}`,
      };
      setMessageList((prevMessageList) => [...prevMessageList, newMessage]);
  }

  useEffect(() => {
    messagesEnd.current?.scrollIntoView();

    let timeout;
    if (messageList[messageList.length - 1].author === AUTHORS.ME ) {
        timeout= setTimeout(() => {
          sendMessage('Привет, я бот. Как дела?',AUTHORS.BOT);
        }, 1500);
      
      };
      return ()=>{
        clearTimeout(timeout)
      }

      
  }, [messageList]);

  useEffect(() => {
      console.log(messagesEnd)

  },[]);

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h2> CHAT </h2>
        </header>
        <main className="message__main">
          <div className = "message__window" >
            <div className="message__chat">
            <MessageChats/>
          </div>
          <div className="message__field">
           <MessageList messages={messageList}/>
           <div ref={messagesEnd}></div>
           </div>
          </div>
          <FormMui onSubmit={handleAddMessage}/>
          {/* <Form className="massage__form" onSubmit={handleAddMessage} /> */}
        </main>
       
      </div>
    </>
  );
}

export default App;