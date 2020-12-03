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
    resumeViewing: false,
    initialLoadDone: false,
    projectOnLandingPage: [],
    postOnLandingPage: [],
    landingPageProjectExpanded: false,
    landingPagePostExpanded: false,
    postForFeaturedProject: [],
    landingPageProjectPostExpanded: false
  }

  componentDidMount=()=>{

    // fetch("http://localhost:3000/projects/141")

    fetch("https://tranquil-citadel-59605.herokuapp.com/projects/141")
    .then(r=>r.json())
    .then(the_project=>{      
      this.setState({
        projectOnLandingPage: the_project,
        initialLoadDone: true
      })
    })

    // fetch("http://localhost:3000/posts/1399")
    fetch("https://tranquil-citadel-59605.herokuapp.com/posts/1399")
        .then(r=>r.json())
        .then(the_post=>{
            this.setState({
                postOnLandingPage: [the_post],
                initialLoadDone: true
              })
        })

        // fetch("http://localhost:3000/posts/1430")
        fetch("https://tranquil-citadel-59605.herokuapp.com/posts/1430")
            .then(r=>r.json())
            .then(the_post=>{
                this.setState({
                    postForFeaturedProject: [the_post],
                    initialLoadDone: true
                  })
            })

    // fetch("http://localhost:3000/projects")

    fetch("https://tranquil-citadel-59605.herokuapp.com/projects")
    .then(r=>r.json())
    .then(data=>{      
      this.setState({
        projects: data,
      })
    })

    // fetch("http://localhost:3000/posts")
    fetch("https://tranquil-citadel-59605.herokuapp.com/posts")
        .then(r=>r.json())
        .then(the_posts=>{
    
            this.setState({
                posts: the_posts,
              })
        })
  }

  showPost=(the_post)=>{ 
    let postForExpanding= this.state.posts.find(post=>{
      return post.title.includes(the_post)
    })

    this.setState({
        expandPost: !this.state.expandPost,
        postToExpand: postForExpanding
    })
}

showFeaturedProjectPost=()=>{
  this.setState({
      landingPageProjectPostExpanded: true,
      postToExpand: this.state.postForFeaturedProject
  })
}

showLandingPagePost=(the_post)=>{
  this.setState({
    expandPost: !this.state.expandPost,
    postToExpand: the_post
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

  expandLandingPageProject=(project)=>{
    this.setState({
      landingPageProjectExpanded: true,
      projectToExpand: project,
      projectExpanded: false
    })
  }

  projectsToPassDown=()=>{

    let the_projects= [...this.state.projects]

    if (this.state.projectExpanded){
      the_projects= this.state.projectToExpand
      return the_projects
    }

    else if(this.state.landingPageProjectExpanded){
      the_projects = this.state.projectOnLandingPage
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
      resumeViewing: false,
      landingPageProjectExpanded: false,
      landingPagePostExpanded: [],
      landingPageProjectPostExpanded: false
    })
  } 

//   featuredProject=()=>{
//     return this.state.projects.find(project=>{
//       return project.title === "National Park Trip Planner"
//   })
// }

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
  initialLoadDone={this.state.initialLoadDone}
   expandProject={this.expandProject}
   featuredProject={this.projectOnLandingPage}
   projectExpanded={this.state.projectExpanded}
   projects={this.projectsToPassDown()} 
  returnToProjects={this.returnToProjects} 
  showPost={this.showPost} 
  expandPost={this.state.expandPost}
  posts={this.postsToSendDown()}
  returnToPosts={this.returnToPosts}
  postToExpand={this.state.postToExpand}
  postOnLandingPage={this.state.postOnLandingPage}
  projectOnLandingPage={this.state.projectOnLandingPage}
  expandLandingPageProject={this.expandLandingPageProject}
  landingPageProjectExpanded={this.state.landingPageProjectExpanded}
  landingPagePostExpanded={this.state.landingPagePostExpanded}
  showLandingPagePost={this.showLandingPagePost}
  postForFeaturedProject={this.state.postForFeaturedProject}
  landingPageProjectPostExpanded={this.state.landingPageProjectPostExpanded}
  showFeaturedProjectPost={this.showFeaturedProjectPost}
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
  projectOnLandingPage={this.state.projectOnLandingPage}
  landingPageProjectExpanded={this.state.landingPageProjectExpanded}
  projectToExpand={this.state.projectToExpand}
  landingPageProjectPostExpanded={this.state.landingPageProjectPostExpanded}
  showFeaturedProjectPost={this.showFeaturedProjectPost}
  postForFeaturedProject={this.state.postForFeaturedProject}
  showLandingPagePost={this.state.showLandingPagePost}
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
