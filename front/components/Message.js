export default function(props) {

    return (
        <li className="message">
            <div className="message-content">
                {props.text}
            </div>
        </li>
    )
}