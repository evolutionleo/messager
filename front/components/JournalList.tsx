import React from 'react';
import JournalEntry from '@components/JournalEntry';

export default function JournalList(props) {
    return (
        <div className="journal-entries">
            {props.entries.map((entry) => {
                return <JournalEntry content={entry} />
            })}
        </div>
    );
}