import MessageList from '@components/MessageList';
import { io } from 'socket.io-client'

import { useState, useEffect } from 'react';

export default function Chat() {
    const [text, changeText] = useState('Message!');
    const messages = [];

    function sendMessage(text) {
        socket.emit('chat message', text);
        changeText('');
    }

    function addMessage(text) {
        messages.push(text);
    }

    useEffect(() => {
        const socket = io(':8080');
        socket.on('chat message', (msg) => {
            console.log('chat message received!')
            addMessage(msg)
        });

        return () => socket.disconnect();
    })
    



    return (
        <div>
            <input type="text" value={text} onChange={(event) => {changeText(event.target.value)}} />
            <button onClick={() => { sendMessage(text); }}>Send!</button>
            <MessageList messages={messages} />
        </div>
    )
}