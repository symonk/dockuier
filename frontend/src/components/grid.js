import React, {useState, useEffect} from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ApplicationHeader from './header';
import Container from '@mui/material/Container';
import DockerCard from './dockercard';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: 'center',
    height: '33vh',
    color: theme.palette.text.secondary,
}));

export default function CoreLayout() {
    const [containers, setContainers] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8080/api/containers`)
        .then((response) => console.log(response));
    }, []);

    return (
        <Box sx= {{width: '100vw', height: '100vh'}}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <ApplicationHeader></ApplicationHeader>
                </Grid>
                <Grid item xs={4}>
                    <DockerCard/>
                </Grid>
            </Grid>
        </Box>
    );
}
