import React from 'react';
import JournalEntry from '@components/JournalEntry';
import { IJournalEntry } from '../types/JournalTypes';

export interface JournalListProps {
    entries: []
}

const JournalList:React.FC<JournalListProps> = (props) => {
    return (
        <div className="journal-entries">
            {props.entries.length ?
                props.entries.map((entry:IJournalEntry) => {
                    return <JournalEntry content={entry} key={entry.id} />
                })
                : <div className="journal-empty">
                    <p>The journal is empty!</p>
                </div>
            }
        </div>
    );
}

export default JournalList;