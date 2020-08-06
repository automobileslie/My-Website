import React from 'react';
import NavigationBar from './NavigationBar';
import Home from './Home';
import Projects from './Projects';
import Blog from './Blog';
import About from './About';
import Publications from './Publications'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';



export default class App extends React.Component{

  state={
    projects: [],
    projectToExpand: [],
    projectExpanded: false,
    posts: [],
    expandPost: false,
    postToExpand: [],
    resumeViewing: false
  }

  componentDidMount=()=>{

    // fetch("http://localhost:3000/projects")

    fetch("https://tranquil-citadel-59605.herokuapp.com/projects")
    .then(r=>r.json())
    .then(data=>{      
      this.setState({
        projects: data
      })
    })

    // fetch("http://localhost:3000/posts")
    fetch("https://tranquil-citadel-59605.herokuapp.com/posts")
        .then(r=>r.json())
        .then(the_posts=>{
    
            this.setState({
                posts: the_posts
              })
        })
  }

  showPost=(the_post)=>{ 
    console.log(the_post);
    let postForExpanding= this.state.posts.find(post=>{
      return post.title.includes(the_post)
    })
    this.setState({
        expandPost: !this.state.expandPost,
        postToExpand: postForExpanding
    })
}

returnToPosts=()=>{
    this.setState({
    expandPost: !this.state.expandPost,
    postToExpand: []
    })
}

postsToSendDown=()=>{

  let the_posts= [...this.state.posts]

  if (this.state.expandPost){
    the_posts= [this.state.postToExpand]
    return the_posts
  }

  else {
    return the_posts
  }

}

  expandProject=(project)=>{
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

    this.setState({
      projectToExpand: [],
      projectExpanded: false,
      expandPost: false,
      postToExpand: [],
      resumeViewing: false
    })
  } 

  featuredProject=()=>{
    return this.state.projects.find(project=>{
      return project.title === "National Park Trip Planner"
  })
}

displayResume=()=>{

  this.setState({
    resumeViewing: !this.state.resumeViewing
  })

}

render() {

return (
<div className="container-for-whole-page">
  <Router>
    <NavigationBar returnToProjects={this.returnToProjects}/>
  <Switch>
  <Route exact path= '/' render={(renderProps) => <Home {...renderProps} 
   expandProject={this.expandProject}
   featuredProject={this.featuredProject()}
   projectExpanded={this.state.projectExpanded}
   projects={this.projectsToPassDown()} 
  returnToProjects={this.returnToProjects} 
  showPost={this.showPost} 
  expandPost={this.state.expandPost}
  posts={this.postsToSendDown()}
  returnToPosts={this.returnToPosts}
  postToExpand={this.state.postToExpand}
  />}/>
  <Route exact path= '/about' render={(renderProps) => <About {...renderProps}
    displayResume={this.displayResume}
    resumeViewing={this.state.resumeViewing}
  />}/>
  <Route exact path= '/projects' render={(renderProps) => <Projects {...renderProps} 
  projects={this.projectsToPassDown()}
  projectExpanded={this.state.projectExpanded}
  expandProject={this.expandProject}
  returnToProjects={this.returnToProjects}
  showPost={this.showPost}
  expandPost={this.state.expandPost}
  posts={this.postsToSendDown()}
  />}/>
  <Route exact path= '/blog' render={(renderProps) => <Blog {...renderProps} 
  showPost={this.showPost} 
  returnToPosts={this.returnToPosts}
  posts={this.postsToSendDown()}
  postToExpand={this.state.postToExpand}
  expandPost={this.state.expandPost}
  />}/>
  <Route exact path= '/publications' render={(renderProps) => <Publications {...renderProps} />}/>

  </Switch>
  </Router>
</div>
  );
}

}
