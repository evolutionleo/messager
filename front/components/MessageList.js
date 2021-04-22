import Message from '@components/Message';
import { useEffect } from 'react';

export default function MessageList(props) {
    return (
        <div>
            This is a list of messages:
            <ul>
                {props.messages.map((message, id) => <Message key={id} text={message} />)}
            </ul>
        </div>
    )
}