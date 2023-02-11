import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/material/Menu';
import Button from '@mui/material/Button';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';



export default function ApplicationHeader() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2}}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography alight="left" variant="h6" component="div" sx={{ flexGrow: 1}}>
                        Dockuier
                    </Typography>
                    <Badge badgeContent={15} color="error">
                        <NotificationsIcon/>
                    </Badge>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
