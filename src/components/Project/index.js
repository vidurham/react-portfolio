import React from 'react';

function Projects(props) {
    return (
        <div className='card'>
            <div className='container'>
                <img alt={props.name} src={props.image} />
            </div>
            <div className='content'>
                <p className='card-title'>{props.name}</p>
                <div className='links'>
                    <div className='git-link'>
                        <a href={props.github}>Github</a>
                    </div>
                    <div className='web-link'>
                        <a href={props.deploy}>Website</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;