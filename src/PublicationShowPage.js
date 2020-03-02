import React from 'react';

export default class PublicationShowPage extends React.Component{










    render(){
        return(
        <div>
            <h1>{this.props.bookExpanded.title}</h1>
            <br></br>
        <a target="_blank" rel="noopener noreferrer" href={this.props.bookExpanded.url}> <img className="book-image-on-show-page" src={require(`${this.props.bookExpanded.image.trim()}`)} alt={this.props.bookExpanded.title}/> </a>
            <p className="book-description">{this.props.bookExpanded.description}</p>
            <p onClick={this.props.returnToPublicationsPage}>Return to Publications Page</p>
        </div>
        )
    }
}