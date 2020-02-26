import React from 'react';
import video from './videos/NationalParksDemo.mp4'

const NationalParks=(props)=>{
    return(
        <div className="body">
            <h1>National Parks Trip Planner</h1>
            <br></br>
            <video src={video} width="750" height="500" controls></video>
            <br></br>
            <p className="link" onClick={props.returnToProjects}>Return to Projects Page</p>
        </div>
    )
}

export default NationalParks;