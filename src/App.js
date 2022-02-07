import React, { useState } from "react";
//import logo from "./logo.svg";
import "./App.css";
//  { Message } from "./components/Message";
import { MessageList } from "./components/MessageList";
import {AUTHORS} from './utils/constants';
//  import { Form } from "./components/Form";
import { FormMui } from "./components/FormMui";
import{ useEffect } from "react/cjs/react.development";


function App() {
  const [messageList, setMessageList] = useState([
    {id:'fsf', text: "msg1", author:AUTHORS.ME },
  ]);
  
 
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
           <MessageList messages={messageList}/>
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