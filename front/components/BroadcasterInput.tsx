import React from 'react';

export default function BroadcasterInput(props) {

    return (
        <div className="broadcaster-input">
            <textarea className="txt-broadcast" />
            <div className="broadcaster-buttons">
                <button className="btn-broadcast-stop">E</button>
                <button className="btn-broadcast-start">S</button>
            </div>
        </div>
    )
}