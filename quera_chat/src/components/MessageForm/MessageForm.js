import React from 'react';
import './MessageForm.css';
import { useState, useRef, useEffect } from 'react';

function MessageForm({ onMessageSend }) {
  const [message, setmessage] = useState('')
  const refContainer = useRef(null);
  function handleFormSubmit(event) {
    event.preventDefault()

    if (message.match(/^\s+$/) !== null || message === '') {

    } else {
      onMessageSend(message)
    }
    setmessage('')
  }
  const messageInput = (event) => {
    setmessage(event.target.value)

  }
  useEffect(() => {
    refContainer.current.focus()
  }, [])
  return (
    <form
      className="MessageForm"
      onSubmit={handleFormSubmit}
      data-testid="submit-message"
    >
      <div className="input-container">
        <input ref={refContainer}
          data-testid="input-message"
          type="text"
          onChange={messageInput}
          value={message}
          placeholder="پیام خود را اینجا بنویسید..."
        />
      </div>
      <div className="button-container">
        <button type="submit">ارسال</button>
      </div>
    </form>
  );
}

export default MessageForm;
