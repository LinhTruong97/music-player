import React, { useState } from "react";
import Track1 from "./Track1.mp3";
import Track2 from "./Track2.mp3";
import Track3 from "./Track3.mp3";
import Track4 from "./Track4.mp3";
import Track5 from "./Track5.mp3";
import Track6 from "./Track6.mp3";

const MusicPlayerContext = React.createContext();


const defaultValues = {
    audioPlayer: new Audio(),
    tracks: [
        {
            name: "Aesthetics",
            artist: "SoulProdMusic",
            file: Track1,
            id: 1
        },
        {
            name: "Let it go",
            artist: "ItsWatR",
            file: Track2,
            id: 2
        },
        {
            name: "Sweet on me",
            artist: "Prazkhanal",
            file: Track3,
            id: 3
        },
        {
            name: "Milk Shake",
            artist: "Coma-Media",
            file: Track4,
            id: 4
        },
        {
            name: "Summer Walk",
            artist: "Olexy",
            file: Track5,
            id: 5
        },
        {
            name: "Tokyo Cafe",
            artist: "Tvari",
            file: Track6,
            id: 6
        },
    ],
    currentTrackIndex: null,
    isPlaying: false,
}


const MusicPlayerProvider = ({ children }) => {
    const [state, setState] = useState(defaultValues);
    return (
        <MusicPlayerContext.Provider value={{ state, setState }}>
            {children}
        </MusicPlayerContext.Provider>
    );
};

export { MusicPlayerContext, MusicPlayerProvider };