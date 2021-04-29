import React from 'react';
import { useState, useEffect } from "react"

export default class JournalLoader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {points: '.'}
        this.inteval = null;
    }

    componentDidMount() {
        this.inteval = setInterval(() => {
            this.setState((prev_state) => {
                var new_points = this.state.points + '.';
                if (new_points.length > 3) {
                    new_points = '.'
                }

                return { points: new_points }
            })
        }, 300)
    }

    componentWillUnmount() {
        clearInterval(this.inteval);
    }

    render() {
        return (
            <div className="journal-loader">
                <p>Journal is loading<span>{this.state.points}</span></p>
            </div>
        )
    }
    
}

// function getPoints(number) {
//     var ans = '';
//     for(var i = 0; i < number; ++i) {
//         ans += '.';
//     }

//     return ans;
// }