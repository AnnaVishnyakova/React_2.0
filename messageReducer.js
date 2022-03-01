import {
    ADD_MESSAGE,
    DELETE_MESSAGE
}
from './messageActions'
import {
    ADD_CHAT,
    DELETE_CHAT
} from '../chats/chatsActions'

const initialState = {}

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                [action.payload.chatId]: [
                    ...state[action.payload.chatId],
                    action.payload.newMsg,
                ],
            }
        }
        case ADD_CHAT: {
            return {
                ...state,
                [action.payload.id]: [],
            }
        }
        case DELETE_CHAT: {
            const newMgs = {
                ...state
            }
            delete newMgs[action.payload]
            return newMgs
        }
        default:
            return state
    }
}