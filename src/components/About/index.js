import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

export default function About(){
    return (
        <section>
            <Typography gutterBottom variant="h2" component="div" textAlign="center">
                About Vincent Durham
            </Typography>

            <Card sx={{ display: 'flex' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography variant="h4" color="text.secondary" textAlign="center">
                        My name is Vincent Durham, and this is my professional portfolio to showcase my skills. I graduated from Davidson College in 2020 with a degree in Biology, and 
                        I was formerly the world's greatest cleaning drone pilot at Lucid Drones Technology, a start-up that built industrial cleaning drones. 
                        Now, I dabble in computer science, art, and app development. 
                    </Typography>
                </CardContent>
              </Box>
              <CardMedia
                component="img"
                sx={{ width: 600 }}
                image="https://raw.githubusercontent.com/vidurham/professional-portfolio/main/assets/images/vinny.jpg"
                alt="Picture of Vincent Durham"
              />
            </Card>
        </section>
    );
}