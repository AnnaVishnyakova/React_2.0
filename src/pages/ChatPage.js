// import './chats.css';
import { Outlet } from 'react-router-dom';
import './style.css'
import { ChatList } from '../components/ChatList';

export const ChatPage =({chatList,onAddChat,delChat})=>{
return(
    <div  className='chat-page'>
        <ChatList chats={chatList} onAddChat={onAddChat} delChat={delChat} className="chat-lists"/>
        <Outlet />
    </div>
    
)
}