import React from 'react';
import JournalEntry from '@components/JournalEntry';
import { IJournalEntry } from '../types/JournalTypes';

export interface JournalListProps {
    entries: IJournalEntry[]
}

const JournalList:React.FC<JournalListProps> = (props) => {
    return (
        <div className="journal-entries">
            {props.entries.length ?
                props.entries.map((entry:IJournalEntry) => {
                    return <JournalEntry message={entry} key={entry.id} />
                    // return <JournalEntry {...entry} />
                })
                : <div className="journal-empty">
                    <p>The journal is empty!</p>
                </div>
            }
        </div>
    );
}

export default JournalList;