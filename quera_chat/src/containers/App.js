import React, { useState } from 'react';
import MessageForm from '../components/MessageForm/MessageForm';
import MessageList from '../components/MessageList/MessageList';
import './App.css';

function App() {

  const [messages, setmessages] = useState([]);

  const onMessageSend = (value) => {
    console.log(value)
    const newmessage = {
      me: true,
      body: value
    }
    setmessages([...messages, newmessage])
    getResopnse(value)

  }
  const getResopnse = async (value) => {
    const response = await (await fetch(`http://localhost:3001/message/${value}`)).json()
    const newmessageResponse = {
      me: false,
      body: await response.message

    }
    console.log(messages)
    setmessages(prevState => {
      return [...prevState, newmessageResponse]
    })

  }

  return (
    <>
      <div className="App">
        <MessageList messages={messages} />
        <MessageForm onMessageSend={onMessageSend} />

      </div>

    </>

  );
}


export default App;
