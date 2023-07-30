import React from 'react'
import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";
import TrackList from "./components/TrackList"
import Controller from "./components/Controller"
import { styled } from "@mui/material/styles";
import { Box } from '@mui/material';
import Header from './components/Header';


const AppContainer = styled(Box)(() => ({
    backgroundColor: "#FFE6EE",
    minHeight: "100vh",
    overflow: "hidden"

}));
const MusicBox = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    textAlign: "center",
    border: "1px solid black",
    width: "100%",
    maxWidth: "350px",
    minWidth: "270px",
    margin: "auto",
    backgroundColor: "#201315",
    borderRadius: "16px",
    boxShadow: "rgba(0, 0, 0, 0.5) 2px 2px 10px 2px",
    position: "relative",
    top: "100px"
}));


const App = () => {
    return (

        <AppContainer>
            <MusicPlayerProvider >
                <MusicBox>
                    <Header />
                    <TrackList />
                    <Controller />
                </MusicBox >
            </MusicPlayerProvider>

        </AppContainer>


    );
};

export default App;