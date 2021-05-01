import React from 'react';

export default function JournalEntry(props) {
    return (
        <div className="journal-entry">
            <p>{props.message.text}</p>
            {/* <p>This is a message!</p> */}
        </div>
    );
}