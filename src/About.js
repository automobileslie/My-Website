import React from 'react';
import Pdf from './Carlie_Anglemire_resume.pdf';



const About=()=>{



    return(
        <div className="body">
            <h1>About</h1>
            <img className="profile-photo" src={require("./Images/profile_photo.jpg")} alt={"Carlie Anglemire"}/>
            <p>Carlie Anglemire is a software developer who graduated from the Flatiron School.</p>
            <a className="link" href={Pdf} target = "_blank" rel="noopener noreferrer">Resume</a>

        </div>
    )
}

export default About;