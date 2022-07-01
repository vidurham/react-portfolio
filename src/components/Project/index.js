import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Project(props) {
  return (
    <Card sx={{ maxWidth: 365, margin: 5 }}>
      <CardMedia
        component="img"
        height="140"
        image={props.image}
        alt={props.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" textAlign="center">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "center"}}>
        <Button size="small" href={props.deploy}>Website</Button>
        <Button size="small" href={props.github}>Github</Button>
      </CardActions>
    </Card>
  );
}
