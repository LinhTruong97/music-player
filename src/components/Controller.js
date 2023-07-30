import { Box, Typography } from "@mui/material";
import useMusicPlayer from "../hooks/useMusicPlayer";
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import { styled } from "@mui/material/styles";

const ControllerBox = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    borderRadius: "16px",
    backgroundColor: "#FF99AA"
}));
const TrackInfo = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    padding: "5px",
    height: "80px"
}));
const ButtonBox = styled(Box)(() => ({
    display: "flex",
    justifyContent: "space-around",
    textAlign: "center",
    width: "100%",
    marginBottom: "10px"
}));




const Controller = () => {
    const { togglePlay, isPlaying, playPreviousTrack, playNextTrack, currentTrackName, currentTrackArtist } = useMusicPlayer();

    return (
        <>
            <ControllerBox>
                <TrackInfo >
                    {currentTrackName ? (
                        <>
                            <Typography variant="h6">{currentTrackName}</Typography>
                            <Typography variant="subtitle1">{currentTrackArtist}</Typography>
                        </>
                    ) : (
                        <>
                            <Typography variant="h6">Song</Typography>
                            <Typography variant="subtitle1">Artist</Typography>
                        </>
                    )}

                </TrackInfo>
                <ButtonBox>
                    <SkipPreviousIcon onClick={playPreviousTrack} fontSize="large" />
                    {isPlaying ? (
                        <PauseCircleIcon onClick={togglePlay} fontSize="large" />
                    ) : (
                        < PlayCircleIcon onClick={togglePlay} fontSize="large" />
                    )}
                    <SkipNextIcon onClick={playNextTrack} fontSize="large" />
                </ButtonBox>
            </ControllerBox >
        </>
    );
};

export default Controller;