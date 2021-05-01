import { useState, useEffect, Component } from "react";
import JournalList from "@components/JournalList";
import JournalLoader from "@components/JournalLoader";
import { IJournalEntry } from "@_types/JournalTypes";


export interface JournalProps {
    entries: IJournalEntry[],
    loading: boolean
}

export default class Journal extends Component<JournalProps, {}> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            // <div className="journal">
            <div className="journal">
                <div className="journal-title">
                    <h1>Journal:</h1>
                </div>
                <div className="journal-content">
                    { this.props.loading ? <JournalLoader /> : <JournalList entries={this.props.entries} /> }
                </div>
            </div>
        );
    }
}
