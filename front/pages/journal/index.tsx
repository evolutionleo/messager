import React from 'react';

import Journal from "@components/Journal";
import JournalList from "@components/JournalList";
import JournalLoader from "@components/JournalLoader";
import FrequencySelector from "@components/FrequencySelector";

import { api_url } from "@env";
import axios from "axios";
import { IJournalEntry } from '@_types/JournalTypes';


export interface JournalState {
    entries: IJournalEntry[],
    loading: boolean,
    frequency: string
}

export default class JournalPage extends React.Component<{}, JournalState> {
    constructor(props) {
        super(props);
        this.state = { entries: [], loading: false, frequency: '1' };

        this.updateJournal = this.updateJournal.bind(this);
        this.updateFrequency = this.updateFrequency.bind(this);
        console.log('binding complete');
    }

    updateJournal(entries) {
        this.setState({ entries: entries });
    }

    updateFrequency(frequency:string) {
        this.setState({ frequency: frequency }, () => {
            this.loadMessages();
        });
    }

    loadMessages() {
        console.log('loading messages from frequency='+this.state.frequency);
        
        this.setState({ loading: true, entries: [] });
        const query_params = "frequency="+this.state.frequency;
        axios.get(api_url+'/messages?'+query_params).then((res) => {
            var messages = res.data.messages;
            messages.map((message) => {
                message.text = message.msg;
                message.msg = null;

                return message;
            })
            this.setState({ entries: messages, loading: false });
        })
    }

    componentDidMount() {
        this.loadMessages();
    }

    render() {
        return (
            <div className="page journal-page">
                {/* <p>{this.state.frequency}</p> */}
                <FrequencySelector updateFrequency={this.updateFrequency} frequency={this.state.frequency} />
                <Journal entries={this.state.entries} loading={this.state.loading} />
            </div>
        )
    }
}


// function addJournalEntry(entry) {
//     var _entries = this.state.entries;
//     _entries.push(entry);
//     updateJournal(_entries);
// }