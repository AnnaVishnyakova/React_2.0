
import { ADD_CHAT,DELETE_CHAT } from "./chatsActions";
// import { SEND_MESSAGE,DELETE_MESSAGE } from "../messages/messageActions";

const initialState = [
    
];
export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
       case ADD_CHAT:{
           return [...state,{
               nameChat: action.payload.nameChat,
               id: action.payload.id
            }]
       }
       case DELETE_CHAT: {
           return state.filter(({id})=>id !== action.payload.id)
       }


       
        default:
            return state;
    }
}