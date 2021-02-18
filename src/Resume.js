import React from 'react';


export default class Resume extends React.Component{

 
 render(){

    return(

        <div className="resume-container">
 
 <iframe title="resume" src={require("./Copy of Carlie Anglemire resume.pdf")} className="resume"/>
</div>
    )
 }
}