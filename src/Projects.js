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

    whichToRender=()=>{
        if(this.props.projectExpanded){
            return <ProjectDisplay project={this.props.projects} 
            returnToProjects={this.props.returnToProjects} 
            showPost={this.props.showPost} 
            expandPost={this.props.expandPost}
            posts={this.props.posts}/>

        }
        else if(this.props.landingPageProjectExpanded){
            return <ProjectDisplay project={this.props.projectOnLandingPage} 
            returnToProjects={this.props.returnToProjects} 
            showFeaturedProjectPost={this.props.showFeaturedProjectPost} 
            expandPost={this.props.expandPost}
            landingPageProjectExpanded={this.props.landingPageProjectExpanded}
            landingPageProjectPostExpanded={this.props.landingPageProjectPostExpanded}
            postForFeaturedProject={this.props.postForFeaturedProject}
            />
        }
        else{
            if(this.props.projects.length < 1){
                return <React.Fragment>
                <h1 className= "loading">Projects Loading</h1>
                </React.Fragment>
            }
            else{
                return <React.Fragment>
                <div className="project-index-container">
                <h1 className="messages-for-loading">Projects</h1>
                <div className="project-tile-container">
                {this.displayProjectTiles()}
                </div>
                </div>
                </React.Fragment>
            }
        }
    }

    render(){

       console.log(this.props.landingPageProjectExpanded)

        return(
            this.whichToRender()      
        )
    }    
}


export default Projects;
