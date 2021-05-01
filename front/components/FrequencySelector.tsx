import React from 'react';

interface FrequencySelectorProps {
    updateFrequency: (frequency: string) => void,
    frequency: string
}

export default class FrequencySelector extends React.Component<FrequencySelectorProps> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="frequency-selector">
                <input type="text" className="frequency-input" onChange={(event) => this.props.updateFrequency(event.target.value)}></input>
            </div>
        )    
    }
}