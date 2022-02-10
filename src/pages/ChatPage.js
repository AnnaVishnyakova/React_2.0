import {
    List,
     ListItem,
     ListItemButton,
     ListItemText,
   
} from '@mui/material';
// import './chats.css';
import { Link } from 'react-router-dom';

const chats = [{
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

export const ChatPage =()=>{
     

return(
    <div  className='chat-list'>
        < List >
            {chats.map((chat)=>(
                <Link key={chat.id} to={`/chats/${chat.id}`}>
                 < ListItem disablePadding >
                    <ListItemButton>
                        <ListItemText primary={chat.nameChat} />
                    </ListItemButton>
                </ListItem>
                </Link>
            ))}
        </List>

        
    </div>
)
}