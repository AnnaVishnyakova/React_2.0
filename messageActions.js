export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';
export const DELETE_MESSAGE = 'MESSAGES::DELETE_MESSAGE';

export const addMessage = (newMsg, chatId) => ({
    type: ADD_MESSAGE,
    payload: {
        chatId,
         newMsg,
    },
});

// export const deleteMessage = (id) => ({
//     type: DELETE_MESSAGE,
//     payload: {
       
//         id,
//     },
// });