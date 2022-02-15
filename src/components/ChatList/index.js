import {
    List,
     ListItem,
     ListItemButton,
     ListItemText,
   
} from '@mui/material';

import { Link,Outlet } from 'react-router-dom';
import { FormMui } from '../FormMui';
import { ChatItem } from './ChatItem';



export const ChatList =({chats,onAddChat,delChat})=>{
    

return(
    <div  className='chat-list'>
        < List >
            {chats.map((chat)=>
              <ChatItem chat={chat} delChat={delChat}/>  
            )}
        </List>
        <FormMui  onSubmit={onAddChat}/>
    </div>
)
}