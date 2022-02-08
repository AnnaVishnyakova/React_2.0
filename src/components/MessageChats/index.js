import {
    List,
     ListItem,
     ListItemButton,
     ListItemText,
   
} from '@mui/material';
import './chats.css';



export const MessageChats =()=>{
    const chats=[
        {
            id:1,
            nameChat:'first chat'
        },
        {
            id:2,
            nameChat: 'second chat'
        }
    ];

return(
    <div>
        < List >
            {chats.map((chat)=>(
                <ListItem disablePadding key={chat.id}>
                    <ListItemButton>
                        <ListItemText primary={chat.nameChat} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>

        
    </div>
)
}