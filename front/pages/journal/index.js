import { useState } from "react";
import axios from "axios";
import JournalList from "@components/JournalList";
import JournalLoader from "@components/JournalLoader";
// this doesn't work btw
import { getLocationOrigin } from "next/dist/next-server/lib/utils";
import { api_url } from "@env";


export default function Journal(props) {
    var [entries, setEntries] = useState([]);
    var [loading, setLoading] = useState(false);

    updateJournal.bind(this);
    addJournalEntry.bind(this);

    useState(() => {
        setLoading(true);
        axios.get(api_url+'/messages').then((res) => {
            const messages = res.data;
            setLoading(false);
            setEntries(messages);
        })
    }, [setLoading]); // updates the state when "loading" changes

    return (
        <div className="journal">
            {/* Some other stuff */}
            {loading ? <JournalList entries={entries} /> : <JournalLoader />}
        </div>
    );
}

export function addJournalEntry(entry) {
    var _entries = entries;
    _entries.push(entry);
    updateJournal(_entries);
}

export function updateJournal(entries) {
    setEntries(entries);
}