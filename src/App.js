import React from 'react';
import NavigationBar from './NavigationBar';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Blog from './Blog';
import Publications from './Publications'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';


export default class App extends React.Component{

  state={
    projects: [],
    projectToExpand: [],
    projectExpanded: false
  }

  componentDidMount=()=>{
    fetch("http://localhost:3000/projects")
    .then(r=>r.json())
    .then(data=>{
      this.setState({
        projects: data
      })
    })
  }

  expandProject=(project)=>{
    console.log(project)
    this.setState({
      projectToExpand: project,
      projectExpanded: !this.state.projectExpanded
    })
  }

  projectsToPassDown=()=>{

    let the_projects= [...this.state.projects]

    if (this.state.projectExpanded){
      the_projects= this.state.projectToExpand
      return the_projects
    }

    else {
      return the_projects
    }

  }

  returnToProjects=()=>{
    console.log("clicked")

    this.setState({
      projectToExpand: [],
      projectExpanded: false

    })
  }

render() {
  console.log(this.state.projects)
  return (
<div>
  <Router>
    <NavigationBar returnToProjects={this.returnToProjects}/>
  <Switch>
  <Route exact path= '/' render={(renderProps) => <Home {...renderProps} />}/>
  <Route exact path= '/about' render={(renderProps) => <About {...renderProps} />}/>
  <Route exact path= '/projects' render={(renderProps) => <Projects {...renderProps} 
  projects={this.projectsToPassDown()}
  projectExpanded={this.state.projectExpanded}
  expandProject={this.expandProject}
  returnToProjects={this.returnToProjects}
  
  />}/>
  <Route exact path= '/blog' render={(renderProps) => <Blog {...renderProps} />}/>
  <Route exact path= '/publications' render={(renderProps) => <Publications {...renderProps} />}/>

  </Switch>
  </Router>
</div>
  );
}

}
