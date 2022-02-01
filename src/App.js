import React, { useState } from "react";
//import logo from "./logo.svg";
import "./App.css";
import { Message } from "./components/Message";
import {AUTHORS} from './utils/constants'
import { Form } from "./components/Form";
import { useEffect } from "react/cjs/react.development";

function App() {
  const [messageList, setMessageList] = useState([
    { text: "msg1", author:AUTHORS.ME },
    // { text: "i am bot", author: "Robot" },
  ]);
  
  // const handleMessageClick = () => {
  //   console.log("hello!!!");
  // };
  
  const handleAddMessage = (text) => {
    const newMessage={
      text,
      author:AUTHORS.ME
    };
    setMessageList((prevMessageList) => [...prevMessageList, newMessage]);
  };

  useEffect(() => {
    if (messageList[messageList.length - 1].author === AUTHORS.ME && messageList[messageList.length-1].text) {
      const newMessage = {
        text:'Hi, i am robot',
        author: AUTHORS.BOT
      };
      setTimeout(() => {
            setMessageList((prevMessageList) => [...prevMessageList, newMessage]);},1500)
    } 
    // console.log(messageList[messageList.length - 1]);
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
            {
            messageList.map((message) => (
            <Message  text={message.text} author={message.author}/>
          ))}
           
          </div>
          </div>
          <Form className="massage__form" onSubmit={handleAddMessage} />
        </main>
       
      </div>
    </>
  );
}

export default App;