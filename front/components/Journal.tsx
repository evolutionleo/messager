import { useState, useEffect, Component } from "react";
import JournalList from "@components/JournalList";
import JournalLoader from "@components/JournalLoader";

export interface JournalProps {
    entries: [],
    loading: boolean
}

export default class Journal extends Component<JournalProps, {}> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="journal">
                { this.props.loading ? <JournalLoader /> : <JournalList entries={this.props.entries} /> }
            </div>
        );
    }
}
