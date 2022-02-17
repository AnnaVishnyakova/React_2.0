import { ADD_CHAT,DELETE_CHAT } from "./chatsActions";
import {SEND_MESSAGES} from '../messages/messageActions';

export {
   ADD_CHAT
}
from "./chatsActions";

const initialState = {
    chats: ['chat 1', 'chat 2', 'chat 3'],
    messages: {
        0: [{
                text: 'Hello world',
                author: 'me'
            },
            {
                text: 'Как дела у тебя?',
                author: 'me'
            },
        ],
        1: [{
            text: "Привет! Это второй чат!",
            author: 'me'
        }],
        2: [{
            text: "Привет! это третий чат!",
            author: 'me'
        }],
    },
};

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
    //    case SEND_MESSAGE: {
           
    //        return {
    //            ...state,
    //            messages: {
    //                ...store.messages,
    //                [chatId]: [...prevMessages, {
    //                    text,
    //                    author
    //                }],
    //            },
    //        };
    //    }
        default:
            return state;
    }
}