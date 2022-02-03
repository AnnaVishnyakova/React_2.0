import React, { useState } from "react";
//import logo from "./logo.svg";
import "./App.css";
import { MessageList } from "./components/MessageList";
import {AUTHORS} from './utils/constants'
import { Form } from "./components/Form";
import { useEffect } from "react/cjs/react.development";


function App() {
  const [messageList, setMessageList] = useState([]);
  
 
  const handleAddMessage = (text) => {
    sendMessage(text, AUTHORS.ME);
  };

  const sendMessage =(text,author)=>{
      const newMessage = {
        text,
        author
      };
      setMessageList((prevMessageList) => [...prevMessageList, newMessage]);
  }

  useEffect(() => {
    let timeout;
    if (messageList[messageList.length - 1].author === AUTHORS.ME ) {
        timeout= setTimeout(() => {
          sendMessage('still here',AUTHORS.BOT);
        }, 1500);
      };
      return ()=>{
        clearTimeout(timeout)
      }
  }, [messageList]);

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h2> CHAT </h2>
        </header>
        <main className="message__main">
          <div className = "message__window" >
            <div className="message__chat">
            Будующие чаты
          </div>
          <div className="message__field">
           <MessageList messages={messageList} />
           </div>
          </div>
          <Form className="massage__form" onSubmit={handleAddMessage} />
        </main>
       
      </div>
    </>
  );
}

export default App;