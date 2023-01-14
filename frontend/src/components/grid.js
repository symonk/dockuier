import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ApplicationHeader from './header';
import Container from '@mui/material/Container';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function CoreLayout() {
    return (
        <Container maxWidth={false} disableGutters>
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <ApplicationHeader></ApplicationHeader>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>Two</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>Three</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>Four</Item>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}