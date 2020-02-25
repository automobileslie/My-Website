import React from 'react';
import NavigationBar from './NavigationBar';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Blog from './Blog';
import Contact from './Contact';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';


export default class App extends React.Component{

  state={
    projectOneExpanded: false,
    projectTwoExpanded: false,
    projectThreeExpanded: false,
    projectExpanded: false
  }


  expandProjectOne=()=>{

    this.setState({
      projectOneExpanded: !this.state.projectOneExpanded,
      projectTwoExpanded: false,
      projectThreeExpanded: false,
      projectExpanded: !this.state.projectExpanded
    }) 
}

  expandProjectTwo=()=>{

    this.setState({
      projectOneExpanded: false,
      projectTwoExpanded: !this.state.projectTwoExpanded,
      projectThreeExpanded: false,
      projectExpanded: !this.state.projectExpanded

    })
  }

  expandProjectThree=()=>{

    this.setState({
      projectOneExpanded: false,
      projectTwoExpanded: false,
      projectThreeExpanded: !this.state.projectThreeExpanded,
      projectExpanded: !this.state.projectExpanded

    })
  }

  returnToProjects=()=>{

    this.setState({
      projectOneExpanded: false,
      projectTwoExpanded: false,
      projectThreeExpanded: false,
      projectExpanded: false

    })
  }

render() {
  return (
<div>
  <Router>
    <NavigationBar returnToProjects={this.returnToProjects}/>
  <Switch>
  <Route exact path= '/' render={(renderProps) => <Home {...renderProps} />}/>
  <Route exact path= '/about' render={(renderProps) => <About {...renderProps} />}/>
  <Route exact path= '/projects' render={(renderProps) => <Projects {...renderProps} expandProjectOne={this.expandProjectOne}
  expandProjectTwo={this.expandProjectTwo}
  expandProjectThree={this.expandProjectThree}
  projectExpanded={this.state.projectExpanded}
  returnToProjects={this.returnToProjects}
  projectOneExpanded={this.state.projectOneExpanded}
  projectTwoExpanded={this.state.projectTwoExpanded}
  projectThreeExpanded={this.state.projectThreeExpanded}
  />}/>
  <Route exact path= '/blog' render={(renderProps) => <Blog {...renderProps} />}/>
  <Route exact path= '/contact' render={(renderProps) => <Contact {...renderProps} />}/>
  </Switch>
  </Router>
</div>
  );
}

}
