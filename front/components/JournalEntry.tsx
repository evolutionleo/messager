import React from 'react';

export default function JournalEntry(props) {
    return (
        <div className="journal-entry">
            <p>{props.msg}</p>
        </div>
    );
}