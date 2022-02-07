import { Message } from "../Message";

export const MessageList = ({ messages }) => {
  console.log(messages[0]?.athuor);
  return messages.map((message) => (
    
      <Message key={message.id} text={message.text} author={message.author} />
    
  ));
};