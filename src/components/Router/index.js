import {
    Routes,
    Route,
}  from 'react-router-dom'

import React, {
    useState,
    useRef,
    useEffect
} from "react";

import {HomePage} from '../../pages/HomePage';
import {ChatPage} from '../../pages/ChatPage';
import {ProfilePage} from '../../pages/ProfilePage';
import {NotFoundPage} from '../../pages/NotFoundPage';
import {Layout} from '../Layout';
import {MessageField} from '../MessageField';
import { useDispatch, useSelector } from 'react-redux';
import { addChat, deleteChat } from '../../store/chats/chatsActions';

const initialChats = [{
        nameChat: "Chat 1",
        id: "chat1",
    },
    {
        nameChat: "Chat 2",
        id: "chat2",
    },
    {
        nameChat: "Chat 3",
        id: "chat3",
    },
];


const initialMessages = initialChats.reduce((acc, el) => {
    acc[el.id] = [];
    return acc;
}, {});


export const Router=()=>{
    // const [chatList, setChatList] = useState(initialChats);
    const [messages, setMessages] = useState(initialMessages);

    const chatList =useSelector((state)=>state.chats);
    const dispatch = useDispatch();

    const handleAddMessage = (chatId, newMessage) => {
        setMessages((prevMessages) => ({
            ...prevMessages,
            [chatId]: [...prevMessages[chatId], newMessage],
        }));
    };

    const handleAddchat=(newChatName)=>{
        const newId=`chat-${Date.now()}`;
        
        dispatch(addChat(newId,newChatName))
        setMessages((prevMessages)=>({...prevMessages,
            [newId]:[]
        }))
    }

    const handleDelchat = (idDelChat) => {
        dispatch(deleteChat(idDelChat))
        // setChatList(prevChatList=>prevChatList.filter(chat=>chat.id!==idDelChat));
        setMessages((prevMessages) => {
            const newMessages ={...prevMessages};
            delete newMessages[idDelChat];
            return newMessages
        })

    }

    return(
        <>
        <Routes>
            <Route path="/" element ={<Layout />}>
                <Route index element={<HomePage />}/>
                <Route path="profile" element={<ProfilePage/>}/>
                <Route path="chats" element={<ChatPage chatList={chatList} onAddChat={handleAddchat} delChat={handleDelchat}/> }>
                    <Route index element={<span>Please select a chat</span>} />
                    <Route path=':chatId' element={<MessageField messageList={messages} addMessage={handleAddMessage}/>} />
                </Route>
                <Route path="*" element={<NotFoundPage/>}/>
            </Route>
        </Routes>
        </>


    )
}

