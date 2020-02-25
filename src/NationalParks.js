import React from 'react';

const NationalParks=(props)=>{
    return(
        <div>
            <h1>National Parks Trip Planner</h1>
            <br></br>
            <p className="link" onClick={props.returnToProjects}>Return to Projects Page</p>
        </div>
    )
}

export default NationalParks;