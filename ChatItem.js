import { ListItem, ListItemButton, ListItemText } from "@mui/material"
import { Link } from "react-router-dom"
import { DeleteButton } from "./DeleteButton"

export const ChatItem =({chat,delChat})=>{
    return (
        <Link key={chat.id} to={`/chats/${chat.id}`}>
                 <ListItem disablePadding >
                    <ListItemButton>
                        <ListItemText primary={chat.nameChat} />
                        <DeleteButton id={chat.id} onClick={delChat}>del</DeleteButton>
                    </ListItemButton>
                </ListItem>
        </Link>
    )
}