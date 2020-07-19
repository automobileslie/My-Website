import React from 'react';
import Resume from './Resume'

class Home extends React.Component{




render(){
    return(

        this.props.resumeViewing ?

        <Resume />

        :

        <div className="about-page">

        <h1 className="heading">Carlie Anglemire</h1>

            <div className="container-for-about-page">

            <img className="profile-photo" src={require("./Images/Profile_picture.jpeg")} alt={"Carlie Anglemire"}/>

            <div className="second-container-for-about-page">

                    <div className="profile-description">
                    <p>Carlie Anglemire is a full-stack software engineer who graduated from the Software Engineering Program at the Flatiron School.
                    She enjoys creating web applications that are user-friendly with React and Ruby on Rails. She could, and sometimes does, spend all day splitting strings.</p>
                    <p>
                    In Carlie's former life she earned a PhD in Philosophy at Stony Brook University, writing a dissertation centered on topics in Ethics and Aesthetics. A book and an essay by Jean-Luc Nancy that she translated from French into English while at Stony Brook were published by Fordham University Press. Carlie also taught Philosophy at a few universities, and her experiences as an educator inform the work she does now.</p>
                    <p>Other than programming, some of the things that Carlie loves include learning languages, writing, cooking, and gardening.</p>
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