import React from 'react'; 
import Project from '../Project'
import projects from '../Project/projects.json'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function Works () {  

    return (
        <section className="container">
          <Typography gutterBottom variant="h2" component="div" textAlign="center">
          BootCamp Work
          </Typography>

          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            >
            {projects.map((work) => (
              <Project key={work.id} image={work.image} name={work.name} github={work.github} deploy={work.deploy}/>
            ))}
           </Grid>
        </section>
    
    );
  }

export default Works;