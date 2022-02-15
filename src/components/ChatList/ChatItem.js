import { ListItem, ListItemButton, ListItemText } from "@mui/material"
import { Link } from "react-router-dom"

export const ChatItem =({chat,delChat})=>{
    return (
        <Link key={chat.id} to={`/chats/${chat.id}`}>
                 < ListItem disablePadding >
                    <ListItemButton>
                        <ListItemText primary={chat.nameChat} />
                        <button onClick={()=>delChat(chat.id)}>del</button>
                    </ListItemButton>
                </ListItem>
        </Link>
    )
}