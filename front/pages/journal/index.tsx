import React from 'react';

import Journal from "@components/Journal";
import JournalList from "@components/JournalList";
import JournalLoader from "@components/JournalLoader";

import { api_url } from "@env";
import axios from "axios";

export interface JournalState {
    entries: [],
    loading: boolean
}

export default class JournalPage extends React.Component<{}, JournalState> {
    constructor(props) {
        super(props);
        this.state = { entries: [], loading: false };

        updateJournal.bind(this);
        addJournalEntry.bind(this);
    }

    componentDidMount() {
        this.setState({ loading: true, entries: [] });
        axios.get(api_url+'/messages').then((res) => {
            var messages = res.data.messages;
            this.setState({ entries: messages, loading: false });
        })
    }

    render() {
        return <Journal entries={this.state.entries} loading={this.state.loading} />
    }
}


export function addJournalEntry(entry) {
    var _entries = this.state.entries;
    _entries.push(entry);
    updateJournal(_entries);
}

export function updateJournal(entries) {
    this.setState({ entries: entries });
}