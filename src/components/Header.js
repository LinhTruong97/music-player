import { Box, Typography } from '@mui/material'
import React from 'react'

import { styled } from "@mui/material/styles";

const HeaderBox = styled(Box)(() => ({
    margin: "auto",
    padding: "15px",
}));

function Header() {
    return (
        <HeaderBox>
            <Typography variant='h4' sx={{ color: "#FF99AA" }}>What's your choice</Typography>
        </HeaderBox>

    )
}

export default Header
