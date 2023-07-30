import { Box, Typography } from "@mui/material";
import useMusicPlayer from "../hooks/useMusicPlayer";
import NightlifeIcon from '@mui/icons-material/Nightlife';
import { styled } from "@mui/material/styles";
import AlbumIcon from '@mui/icons-material/Album';

const TrackBox = styled(Box)(() => ({
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    border: "1px solid black",
    width: "100%",
    margin: "auto",
    padding: "5px",
    gap: "30px",
}));

const TrackListBox = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    paddingBottom: "10px"
}));

const TrackList = () => {
    const { trackList, currentTrackName, playTrack, isPlaying, togglePlay } = useMusicPlayer();

    return (
        <>
            <TrackListBox>
                {trackList.map((track, index) => (
                    <TrackBox key={track.id}>
                        {currentTrackName === track.name && isPlaying ? (
                            <NightlifeIcon fontSize="large" onClick={() => togglePlay()} sx={{ color: "#FF99AA" }} />
                        ) : (
                            <AlbumIcon fontSize="large" onClick={() => playTrack(index)} sx={{ color: "#FF99AA" }} />
                        )}
                        <Typography variant="subtitle1" sx={{ color: "#FF99AA" }}>{track.name}</Typography>
                    </TrackBox>
                ))}
            </TrackListBox >

        </>
    );
};

export default TrackList;