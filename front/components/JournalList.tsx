import React from 'react';
import JournalEntry from '@components/JournalEntry';

export interface JournalListProps {
    entries: []
}

const JournalList:React.FC<JournalListProps> = (props) => {
    return (
        <div className="journal-entries">
            {props.entries.length ?
                props.entries.map((entry) => {
                    return <JournalEntry content={entry} />
                })
                : <div className="journal-empty">
                    <p>The journal is empty!</p>
                </div>
            }
        </div>
    );
}

export default JournalList;