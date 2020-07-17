import React from 'react';
import ProjectDisplay from './ProjectDisplay.js';

export default class Home extends React.Component {










render(){

return (

    <React.Fragment>

        {this.props.projectExpanded ?

<ProjectDisplay 
project={this.props.projects} 
returnToProjects={this.props.returnToProjects} 
showPost={this.props.showPost} 
expandPost={this.props.expandPost}
posts={this.props.posts}
/>

        :

    

    <div className = "container-for-home-page">

    <div className = "top-container">
            <h1 className = "home-page-heading">Carlie Anglemire</h1>
            <h2 className = "sub-heading">Full-Stack Software Engineer</h2>
        </div>

        <div className = "bottom-container">
            <div className = "featured-blog">
                <img className = "home-page-images" src={require("./Images/On_A_Witch_Hunt_Image.jpg")} alt={"On A Witch Hunt"}></img>
                <h2 className = "home-page-featured-blog-heading">Current Blog Post</h2>

            </div>
            <div className = "current-project">
            <img className = "home-page-images" onClick={()=>this.props.expandProject(this.props.featuredProject)} src={require("./Images/United_States.jpg")} alt={"National Parks Trip Planner"}></img>
                <h2 className = "home-page-current-project-heading">Recent Project</h2>
            </div>

        </div>

    </div>
}
    </React.Fragment>

)

}

}