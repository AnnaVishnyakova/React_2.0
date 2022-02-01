import React from "react";
import "./style.css";

export class Message extends React.Component {
  render() {
    const {author,text} = this.props;
    
    return (
        <div className="message-item">
            <p className = "message-author" >
                {author}
            </p>
            <p className = "message-text" >
                {text}
            </p>
        </div>
    );
  }
}