import React from 'react';
import videoOne from './videos/PlanAGardenVideo.mp4';
import videoTwo from './videos/BookandMovieMemoryBankVideo.mp4';
import videoThree from './videos/NationalParksDemo.mp4'




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

    render(){
        console.log(this.props)
    return(
        <div className="body">
            <h1>{this.props.project.title}</h1>
            <br></br>
            <p className="project-description">{this.props.project.description}</p>
            <br></br>
            <video src={this.videoToRender()} width="750" height="500" controls></video>
            <br></br>
            <p className="link" onClick={this.props.returnToProjects}>Return to Projects Page</p>
        </div>
    )
    }
}

export default ProjectDisplay;