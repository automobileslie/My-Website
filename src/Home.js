import React from 'react';
import ProjectDisplay from './ProjectDisplay.js';
import ExpandPost from './ExpandPost';

export default class Home extends React.Component {

whichToRender=()=>{
    
    if(this.props.expandPost) {
        
    return <React.Fragment>
        <ExpandPost posts={this.props.posts}/>
    <p className= "return-to-projects-index" onClick={this.props.returnToPosts}>Return to Previous Page</p>
    </React.Fragment>

    }

    else if(this.props.projectExpanded){
        return <ProjectDisplay 
            project={this.props.projects} 
            returnToProjects={this.props.returnToProjects} 
            showPost={this.props.showPost} 
            expandPost={this.props.expandPost}
            posts={this.props.posts}
        />
    }

    else{

        return <div className = "container-for-home-page">

            <div className = "top-container">
            <h1 className = "home-page-heading">Carlie Anglemire</h1>
            <h2 className = "sub-heading">Full-Stack Software Engineer</h2>
            </div>

            <div className = "bottom-container">
                <div className = "featured-blog">
                <img className = "home-page-images" onClick={()=>this.props.showPost("Python")}src={require("./Images/s_bread.jpeg")} alt={"Python"}></img>
                <h2 className = "home-page-featured-blog-heading">Current Blog Post</h2>
                </div>
            <div className = "current-project">
                <img className = "home-page-images" onClick={()=>this.props.expandProject(this.props.featuredProject)} src={require("./Images/United_States.jpg")} alt={"National Parks Trip Planner"}></img>
                <h2 className = "home-page-current-project-heading">Recent Project</h2>
            </div>
        </div>

    </div>

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