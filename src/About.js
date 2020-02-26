import React from 'react';
import Pdf from './Carlie_Anglemire_resume.pdf';



const About=()=>{



    return(
        <div className="body">
            <h1>About</h1>
            <img className="profile-photo" src={require("./Images/profile_photo.jpg")} alt={"Carlie Anglemire"}/>
            <p className="profile-description">Carlie Anglemire is a full stack web developer who graduated from the Flatiron School's Software Engineering Program.
            She enjoys creating web applications with React and Ruby on Rails that are user-friendly, fun, and informative.
            In her former life she was a Philosophy instructor, and her experiences in education inform a lot of the work she does now.
            Other than programming, some of the things that Carlie loves to do include learning languages, writing, and gardening.
            </p>
            
            <a className="link" href={Pdf} target = "_blank" rel="noopener noreferrer">Resume</a> | 
            <a className="link" href="https://github.com/automobileslie" target = "_blank" rel="noopener noreferrer"> Github</a> | 
            <a className="link" href="https://medium.com/@carlie.anglemire" target = "_blank" rel="noopener noreferrer"> Blog</a> | 
            <a className="link" href="http://www.linkedin.com/in/carlie-anglemire" target = "_blank" rel="noopener noreferrer"> LinkedIn</a>


        </div>
    )
}

export default About;