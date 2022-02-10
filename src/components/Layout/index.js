// import { MessageField } from '../MessageField';
// import { ChatList } from '../ChatList';
// import { useParams } from "react-router";

// const chats = [{
//         nameChat: "Chat 1",
//         id: "chat1",
//     },
//     {
//         nameChat: "Chat 2",
//         id: "chat2",
//     },
//     {
//         nameChat: "Chat 3",
//         id: "chat3",
//     },
// ];

//  const params = useParams();
//  const {
//      chatId
//  } = params
import {Outlet} from 'react-router-dom'
import { CustomLink } from './CustomLink';

export const Layout =()=>{
    return (
        <>
            <header>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/chat">Chat</CustomLink>
                <CustomLink to="/profile">Profile</CustomLink>
            </header>
            <Outlet />
        {/* <div className="App">
            <header className="App-header">
                <h2> CHAT </h2>
            </header>
            <main className="main-chat">
                <div className="container">
                    <ChatList className="message-chats" chats={chats}/>
                    <MessageField />
                </div>
            </main>
        </div> */}
    </>
  );
}