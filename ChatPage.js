// import './chats.css';
import { Outlet } from 'react-router-dom';
import './style.css'
import { ChatList } from '../components/ChatList';

export const ChatPage =()=>{
return(
    <div  className='chat-page'>
        {/* <ChatList chats={chatList} onAddChat={onAddChat} delChat={delChat} className="chat-lists"/> */}
        <ChatList className="chat-lists"/>
        <Outlet />
    </div>
    
)
}