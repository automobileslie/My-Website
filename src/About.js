import React from 'react';
import Resume from './Resume'

class Home extends React.Component{

state={
    isHovering: false
}

changeHovering = () =>{
    this.setState({
        isHovering: !this.state.isHovering

    })
}


render(){

    return(

        this.props.resumeViewing ?

        <Resume />

        :

        <div className="about-page">

        <h1 className="heading">Carlie Anglemire</h1>

            <div className="container-for-about-page">

            {!(this.state.isHovering) ? 

            <img className="profile-photo" onMouseOver= {this.changeHovering} onMouseOut = {this.changeHovering} src={require("./Images/Profile_picture.jpeg")} alt={"Carlie Anglemire"}/>

            :

            <img className="profile-photo" onMouseOver= {this.changeHovering} onMouseOut = {this.changeHovering} src={require("./Images/Hover_Picture.jpg")} alt={"Carlie Anglemire"}/>
                    
            }

            <div className="second-container-for-about-page">

                    <div className="profile-description">
                    <p>I am a full-stack software developer who enjoys exercising problem-solving skills and creativity while working for a software company centered on women's health and prenatal care​. 
                    With experience in a variety of languages and frameworks, I became interested in software engineering after developing logic and critical thinking skills as a Philosophy PhD focused on topics in ethics and aesthetics.</p> 
                    <p>In other words, I could, and sometimes do, spend all day splitting strings.</p>
                    <p>In addition to being a software engineer, I am a published translator and love writing, singing and playing the guitar, biking, learning languages, cooking, and gardening.</p>
                    </div>
            
                    <div className="links-on-about-page">
                    <p className="link-on-about-page"><a className="link" href="https://github.com/automobileslie" target = "_blank" rel="noopener noreferrer"> Github</a></p> 
                    <p>| </p>
                    <p className="link-on-about-page"><a className="link" href="http://www.linkedin.com/in/carlie-anglemire" target = "_blank" rel="noopener noreferrer"> LinkedIn</a></p>  
                    <p>| </p>
                    <p className="link-on-about-page"><a className="link" href="https://medium.com/@carlie.anglemire" target = "_blank" rel="noopener noreferrer">Blog</a></p>
                   
                    </div>


            </div>
            
            </div>

</div>
       
    )
}
}

    

export default Home;