import React from 'react';


export default class Resume extends React.Component{

 
 render(){

    return(

        <div className="resume-container">
 
 <iframe title="resume" src={require("./Carlie_Anglemire_resume_for_website.pdf")} className="resume"/>
</div>
    )
 }
}