import React from 'react';
import {NavLink} from 'react-router-dom';
import './NavBar.css'

    const NavigationBar =(props)=> {
       return <nav className="navbar">
         {/* <NavLink
           onClick={props.returnToProjects}
            exact
            activeClassName="navbar-link-active"
            className="navbar-link"
            to="/"
          >
            Home
          </NavLink> */}
          <NavLink
           onClick={props.clickOnAboutOrPublicationsTab}
            exact
            activeClassName="navbar-link-active"
            className="navbar-link"
            to="/about"
          >
            About
          </NavLink>
          {/* <NavLink
          onClick={props.clickOnProjectTab}
            activeClassName="navbar-link-active"
            className="navbar-link"
            to="/projects"
          >
            Projects
          </NavLink> */}
          {/* <NavLink
           onClick={props.clickOnBlogTab}
            activeClassName="navbar-link-active"
            className="navbar-link"
            to="/Blog"
          >
            Blog
          </NavLink> */}
           <NavLink
           onClick={props.clickOnAResumeTab}
            activeClassName="navbar-link-active"
            className="navbar-link"
            to="/Resume"
          >
            Resume
          </NavLink>
          <NavLink
           onClick={props.clickOnAboutOrPublicationsTab}
            activeClassName="navbar-link-active"
            className="navbar-link"
            to="/Publications"
          >
            Publications
          </NavLink>
        </nav>  
}

export default NavigationBar;
