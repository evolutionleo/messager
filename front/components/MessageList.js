import Message from '@components/Message';

export default function(props) {
    var messages = [];
    for(let i = 0; i < props.messages.length; ++i) {
        messages.push(<Message text={props.messages[i]} />)
    }

    return (
        <div>
            This is a list of messages:
            <ul>
                {messages}
            </ul>
        </div>
    )
}