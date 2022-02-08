import React from "react";
import "./style.css";
import PropTypes from "prop-types";

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
Message.propTypes={
  text:PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
}