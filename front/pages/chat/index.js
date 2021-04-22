import MessageList from '@components/MessageList';
import { io } from 'socket.io-client'

import { useState, useEffect } from 'react';
import React from 'react'

// I made this an ES6-style component because why not
export default class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Message!',
            messages: []
        }
        this.socket = null;
    }

    sendMessage(text) {
        this.socket.emit('chat message', text);
        // changeText('');
        this.setState({ text: '' });
    }

    addMessage(text) {
        console.log('adding message: ' + text);
        this.state.messages.push(text);
        // changeMessages(messages);
        this.setState({messages: this.state.messages});
    }

    componentDidMount() {
        this.socket = io(':8000');
        this.socket.on('chat message', (msg) => {
            console.log('chat message received! Text: '+msg);
            this.addMessage(msg);
        });
    }

    componentWillUnmount() {
        this.socket.disconnect();
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.text} onChange={(event) => {this.setState({text: event.target.value})}} />
                <button onClick={() => { this.sendMessage(this.state.text); }}>Send!</button>
                <MessageList messages={this.state.messages} />
                {/* <p>{this.state.messages.join(' ')}</p> */}
            </div>
        )
    }
}