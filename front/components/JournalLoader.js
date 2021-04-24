import React from 'react';
import { useState, useEffect } from "react"

export default function JournalLoader(props) {
    var points = 1;
    useEffect(() => {
        points++;
        if (points > 3)
            points = 1;
    })

    return (
        <div className="journal-loader">
            {/* <p>Journal is loading</p><span>{getPoints(points)}</span> */}
            <p>Journal is loading<span>{'.' * points}</span></p>
        </div>
    )
}

// function getPoints(number) {
//     var ans = '';
//     for(var i = 0; i < number; ++i) {
//         ans += '.';
//     }

//     return ans;
// }