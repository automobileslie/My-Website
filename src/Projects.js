import React from 'react';
import BookAndMovieMemoryBank from './BookAndMovieMemoryBank';
import PlanAGarden from './PlanAGarden';
import NationalParks from './NationalParks';



const Projects=(props)=>{

    if (props.projectExpanded) {

        if (props.projectOneExpanded){
            return <PlanAGarden returnToProjects={props.returnToProjects}/>
        }

        else if (props.projectTwoExpanded){
            return <BookAndMovieMemoryBank returnToProjects={props.returnToProjects}/>
        }

        else if (props.projectThreeExpanded===true) {
            return <NationalParks returnToProjects={props.returnToProjects}/>
        }

        else {
            return <div></div>
        }
    }

    else {

    return(
        <div className="body">

        <h1>Projects</h1>
        <div className="project-tile-container">

            <div className="project-tile" onClick={props.expandProjectOne}>

            <img className="project-tile-image" src={require("./Images/Azaleas.jpg")} alt={"drawing of azaleas"} />
            <br></br>
            <p>Plan a Garden Application</p>

            </div>

            <div className="project-tile" onClick={props.expandProjectTwo}>

            < img className="project-tile-image" src={require("./Images/Book_and_Movie_Memory_Bank.jpg")} alt={"A cat in front of a bookshelf"}/>
            <br></br>
            <p>Book and Movie Memory Bank </p>

            </div>
        
            <div className="project-tile" onClick={props.expandProjectThree}>

           < img className="project-tile-image" src={require("./Images/United_States.jpg")} alt={"Map of the United States"}/>
           <br></br>
            <p>National Parks Trip Planner</p>
            </div>

        </div>

        </div>
    )
    }
}


export default Projects;