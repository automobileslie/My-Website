import React from 'react';


const PlanAGarden=(props)=>{

    return(
        <div>
            <h1>Plan a Garden Application</h1>
            <br></br>
            <p className="link" onClick={props.returnToProjects}>Return to Projects Page</p>
        </div>
    )
}

export default PlanAGarden;