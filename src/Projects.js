import React from 'react';
import ProjectDisplay from './ProjectDisplay';

class Projects extends React.Component{

    displayProjectTiles=()=>{

        return this.props.projects.map(project=>{
            return <React.Fragment>
                    <div className="project-tile" onClick={()=>this.props.expandProject(project)}>
                    <img className="project-tile-image" src={require(`${project.image}`)} alt={project.title} />
                    <p key={project.id} className="titles-for-project-index">{project.title}</p>
                    </div>
                    </React.Fragment>

        })
    }

    render(){
        return(
            <React.Fragment>

                {this.props.projectExpanded ? 

                    <ProjectDisplay project={this.props.projects} 
                    returnToProjects={this.props.returnToProjects} 
                    showPost={this.props.showPost} 
                    expandPost={this.props.expandPost}
                    posts={this.props.posts}/>
                :
                <React.Fragment>
                {this.props.projects.length < 1 ?
                    <React.Fragment>
                    <h1>Projects Loading</h1>
                    </React.Fragment>
                    : 
                    <React.Fragment>
                    <div className="project-index-container">
                    <h1 className="messages-for-loading">Projects</h1>
                    <div className="project-tile-container">
                    {this.displayProjectTiles()}
                    </div>
                    </div>
                    </React.Fragment>
                }
                </React.Fragment>
            }
            </React.Fragment>
        )
    }    
}


export default Projects;
