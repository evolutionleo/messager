import React from 'react';
import BroadcasterInput from '@components/BroadcasterInput';

export default function Broadcaster(props) {

    return (
        <div className="broadcaster">
            <div className="broadcaster-title">
                <h1>This is broadcaster!</h1>
            </div>
            <div className="broadcaster-content">
                <BroadcasterInput />
            </div>
        </div>
    )
}