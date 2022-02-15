import {
    List,
     ListItem,
     ListItemButton,
     ListItemText,
   
} from '@mui/material';

import { Link,Outlet } from 'react-router-dom';
import { FormMui } from '../FormMui';



export const ChatList =({chats,onAddChat,delChat})=>{
    

return(
    <div  className='chat-list'>
        < List >
            {chats.map((chat)=>(
                <Link key={chat.id} to={`/chats/${chat.id}`}>
                 < ListItem disablePadding >
                    <ListItemButton>
                        <ListItemText primary={chat.nameChat} />
                        <button onClick={()=>delChat(chat.id)}>del</button>
                    </ListItemButton>
                </ListItem>
                </Link>
            ))}
        </List>
        <FormMui  onSubmit={onAddChat}/>
    </div>
)
}