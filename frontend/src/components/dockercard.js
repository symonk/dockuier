import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function DockerCard() {
    return (
        <Card sx={{ maxWidth: '35%'}}>
            <CardMedia sx={{ height: 200 }} image="/static/images/cards/example.jpg" title="Example Docker"/>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Foo!
                </Typography>
            </CardContent>
        </Card>
    )
}
