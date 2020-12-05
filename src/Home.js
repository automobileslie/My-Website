import React from 'react';
import ProjectDisplay from './ProjectDisplay.js';
import ExpandPost from './ExpandPost';

export default class Home extends React.Component {

whichToRender=()=>{
    if(this.props.expandPost) {
        return <React.Fragment>
            <ExpandPost posts={this.props.postOnLandingPage}/>
            <p className= "return-to-projects-index" onClick={this.props.returnToPosts}>Return to Previous Page</p>
            </React.Fragment>
    }
    else if(this.props.landingPageProjectExpanded){
        return <ProjectDisplay 
            project={this.props.projectOnLandingPage} 
            returnToProjects={this.props.returnToProjects} 
            showFeaturedProjectPost={this.props.showFeaturedProjectPost} 
            expandPost={this.props.expandPost}
            landingPageProjectExpanded={this.props.landingPageProjectExpanded}
            landingPageProjectPostExpanded={this.props.landingPageProjectPostExpanded}
            postForFeaturedProject={this.props.postForFeaturedProject}/>
    }
    else{
        if(!this.props.initialLoadDone){
            return <div className = "container-for-home-page">
            <div className = "top-container-loading">
            <h1 className = "home-page-heading">Carlie Anglemire</h1>
            <h2 className = "sub-heading">Full-Stack Software Engineer</h2>
            </div>
            </div>
        }
        else{
            return <div className = "home-page">
            <div className = "top-container">
            <h1 className = "home-page-heading">Carlie Anglemire</h1>
            <h2 className = "sub-heading">Full-Stack Software Engineer</h2>
            </div>
            <div className = "container-for-the-features">
                <div className = "featured-blog">
                <img className = "home-page-images" onClick={()=>this.props.showLandingPagePost("Are We There Yet?")}src={require("./Images/flatten_arrays.png")} alt={"Python"}/>
                <h2 className = "home-page-featured-blog-heading">Current Blog Post</h2>
                </div>
            <div className = "current-project">
                <img className = "home-page-images" onClick={()=>this.props.expandLandingPageProject(this.props.projectOnLandingPage)} src={require("./Images/United_States.jpg")} alt={"National Parks Trip Planner"}/>
                <h2 className = "home-page-current-project-heading">Recent Project</h2>
            </div>
        </div>
        </div>
        }
}
}








render(){

return (

    <React.Fragment>

        {this.whichToRender()}

    </React.Fragment>

)     

}
}