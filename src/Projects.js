import React from 'react';
import ProjectDisplay from './ProjectDisplay';

class Projects extends React.Component{

    displayProjectTiles=()=>{

        return this.props.projects.map(project=>{
            return <React.Fragment>
                    <div className="project-tile" onClick={()=>this.props.expandProject(project)}>
                    <img className="project-tile-image" src={require(`${project.image}`)} alt={project.title} />
                    <p key={project.id} className="link">{project.title}</p>
                    </div>
                    <br></br>
                    </React.Fragment>

        })
    }

    render(){
        return(
            <React.Fragment>

                {this.props.projectExpanded ? 

                    <ProjectDisplay project={this.props.projects} returnToProjects={this.props.returnToProjects}/>
                :
                    <React.Fragment>
                    <div className="body">
                    <h1>Projects</h1>
                    <div className="project-tile-container">
                    {this.displayProjectTiles()}
                    </div>
                    </div>
                    </React.Fragment>
                }
            </React.Fragment>
        )
    }    
}


export default Projects;