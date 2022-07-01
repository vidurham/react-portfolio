import React from 'react'; 
import Project from '../Project'
import projects from '../Project/projects.json'

function Wrapper(props) {
    return <div className="wrapper">{props.children}</div>;
}

function Works () {  

    return (
        <section className="container">
          <div className="project">
            <h2 className="top-title">Bootcamp Work</h2>
            <hr></hr>
          </div>

          <Wrapper id="card-data">
            {projects.map((work) => (
              <Project key={work.id} image={work.image} name={work.name} github={work.github} deploy={work.deploy}/>
            ))}
          </Wrapper>
        </section>
    
    );
  }

export default Works;