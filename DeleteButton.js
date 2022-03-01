import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { deleteChat } from "../../store/chats/chatsActions";

export const DeleteButton =({id})=>{
    
    const dispatch = useDispatch();

    const handleDeleteChat = () => {
        dispatch(deleteChat(id));
    };

    return(
        <div onClick={handleDeleteChat}>del</div>
    )
}