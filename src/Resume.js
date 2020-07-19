import React from 'react';

export default class Resume extends React.Component{

 
 render(){

    return(

        <div className="resume-container">
 
<iframe title="my-resume"src={require("./Images/Carlie_Anglemire_resume.pdf")}className="resume"> </iframe>
</div>
    )
 }
}