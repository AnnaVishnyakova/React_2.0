export const SEND_MESSAGE = 'MESSAGES::SEND_MESSAGE';

export const sendMessage = (text, author, chatId) => ({
    type: SEND_MESSAGE,
    payload: {
        text,
        author,
        chatId,
    },
});