import React from 'react';
import videoOne from './videos/PlanAGardenVideo.mp4';
import videoTwo from './videos/BookandMovieMemoryBankVideo.mp4';
import videoThree from './videos/NationalParksDemo.mp4';
import ExpandPost from './ExpandPost';




class ProjectDisplay extends React.Component {
    videoToRender=()=>{
       if (this.props.project.title=== "Plan a Garden") {
            return videoOne
        }
        else if (this.props.project.title==="Book and Movie Memory Bank") {
            return videoTwo
        }
        else if (this.props.project.title==="National Park Trip Planner"){
            return videoThree
        }
    }

    showingBlog=()=>{

        if (this.props.expandPost) {
            return <div></div>
        }
        else if(this.props.landingPageProjectExpanded){
                return <p className="link" onClick={()=>this.props.showFeaturedProjectPost(this.props.postForFeaturedProject)}>Go to the Blog Post about this project</p>
        }
            else {
                let thisVariable= this.props.posts.filter(post=>{
                    return post.title.includes(this.props.project.title)
                })
                   
                if (thisVariable.length > 0) { 
                    return <p className="link" onClick={()=>this.props.showPost(this.props.project.title)}>Go to the Blog Post about this project</p>
                } 
            }
        }

    render(){
    return(
        <div className="project-show-pages"> {(!this.props.expandPost && !this.props.landingPageProjectPostExpanded) && this.props.project ?
        <div className="container-for-project-display">
            <h1>{this.props.project.title}</h1>
            <br></br>
            <p className="project-description">{this.props.project.description}</p>
            <br></br>
            <div className="github-links-for-projects">
            <a className="github-link" href={this.props.project.frontend} target = "_blank" rel="noopener noreferrer">Github: Front End</a>
            <br></br>
            <a className= "github-link" href={this.props.project.backend} target = "_blank" rel="noopener noreferrer">Github: Back End</a>
            </div>
            <br></br>
            <video className="project-demo" src={this.videoToRender()} width="750" height="500" controls></video>
            <br></br>
            {this.showingBlog()}
            <br></br>
            <p className="return-to-projects-index" onClick={this.props.returnToProjects}>Return to Previous Page</p>
        </div>
        :
        this.props.landingPageProjectPostExpanded ?
        <React.Fragment>
        <ExpandPost  posts={this.props.postForFeaturedProject} returnToPosts={this.props.returnToProjects}/>
        <p className="return-to-projects-index" onClick={this.props.returnToProjects}>Return to Previous Page</p>
        </React.Fragment>
        :
        <React.Fragment>
        <ExpandPost  posts={this.props.posts} returnToPosts={this.props.returnToProjects}/>
        <p className="return-to-projects-index" onClick={this.props.returnToProjects}>Return to Previous Page</p>
        </React.Fragment>
            }
        </div>
    )
    }
}

export default ProjectDisplay;