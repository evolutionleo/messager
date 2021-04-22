export default function Message(props) {
    return (
        <li className="message">
            <div className="message-content">
                {props.text}
            </div>
        </li>
    )
}