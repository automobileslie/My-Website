import React from 'react';
import video from './videos/PlanAGardenVideo.mp4'


const PlanAGarden=(props)=>{

    return(
        <div className="body">
            <h1>Plan a Garden Application</h1>
            <br></br>
            <video src={video} width="750" height="500" controls></video>
            <br></br>
            <p className="link" onClick={props.returnToProjects}>Return to Projects Page</p>
        </div>
    )
}

export default PlanAGarden;