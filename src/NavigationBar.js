import React from 'react';
import {NavLink} from 'react-router-dom';
import './NavBar.css'


    const NavigationBar =(props)=> {

       return <nav className="navbar">
          <NavLink
           onClick={props.returnToProjects}
            exact
            activeClassName="navbar-link-active"
            className="navbar-link"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
          onClick={props.returnToProjects}
            activeClassName="navbar-link-active"
            className="navbar-link"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            activeClassName="navbar-link-active"
            className="navbar-link"
            to="/projects"
          >
            Projects
          </NavLink>
          <NavLink
           onClick={props.returnToProjects}
            activeClassName="navbar-link-active"
            className="navbar-link"
            to="/Blog"
          >
            Blog
          </NavLink>
          <NavLink
           onClick={props.returnToProjects}
            activeClassName="navbar-link-active"
            className="navbar-link"
            to="/Publications"
          >
            Publications
          </NavLink>
        </nav>  
}

export default NavigationBar;
