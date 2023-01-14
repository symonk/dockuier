import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';


export default function ApplicationHeader() {
    return (
        <Box sx={{ width: '100vh' }}>
            <AppBar position="sticky">
                <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
                    Dockuier
                </Typography>
            </AppBar>
        </Box>
    )
}