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

    console.log(this.state.isHovering)
    return(

        this.props.resumeViewing ?

        <Resume />

        :

        <div className="about-page">

        <h1 className="heading">Carlie Anglemire</h1>

            <div className="container-for-about-page">

            <img className="profile-photo" onMouseOver= {this.changeHovering} onMouseOut = {this.changeHovering} src={require("./Images/Profile_picture.jpeg")} alt={"Carlie Anglemire"}/>

            <div className="second-container-for-about-page">

                    <div className="profile-description">
                    <p>Carlie Anglemire is a full-stack software developer passionate about exercising problem-solving skills and creativity in building applications that help users gain access to information, entertainment, resources, and social networks on-line​. 
                    With experience in HTML, CSS, JavaScript, Ruby, Java, C, React, Ruby on Rails, and SQL, she became interested in software engineering after developing her logic and critical thinking skills as a Philosophy PhD focused on topics in ethics and aesthetics.</p> 
                    <p>In other words, she could, and sometimes does, spend all day splitting strings.</p>
                    <p>In addition to being a software engineer, Carlie is a published translator and loves writing, learning languages, cooking, and gardening.</p>
                    </div>
            
                    <div className="links-on-about-page">
                    <p className="link-on-about-page" onClick={this.props.displayResume}>Resume</p>
                    <p>|</p>
                    <p className="link-on-about-page"><a className="link" href="https://github.com/automobileslie" target = "_blank" rel="noopener noreferrer"> Github</a></p> 
                    <p>|</p>
                    <p className="link-on-about-page"><a className="link" href="http://www.linkedin.com/in/carlie-anglemire" target = "_blank" rel="noopener noreferrer"> LinkedIn</a></p>                     
                    </div>


            </div>
            
            </div>

</div>
       
    )
}
}

    

export default Home;