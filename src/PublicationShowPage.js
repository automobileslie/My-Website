import React from 'react';

export default class PublicationShowPage extends React.Component{

italicizeTheTitle=()=>{
    if (this.props.bookExpanded.description.includes("/title")) {
    let newDescription= this.props.bookExpanded.description.split("/title")
        let changeTheDescription=newDescription.filter(description=>{
                            return description !=="/title"
                        })
                       return <React.Fragment>
                           <p>
                            <i>{changeTheDescription[0]}</i>
                           {changeTheDescription[1]}
                           <a className="link" target="_blank" rel="noopener noreferrer" href="https://www.stonybrook.edu/commcms/philosophy/people/_faculty/byrne.php">{changeTheDescription[2]}</a>
                           {changeTheDescription[3]}
                           </p>
                           </React.Fragment>   
                    }
    else {
        return  <p>
        {this.props.bookExpanded.description}
      </p>
    }
}

    render(){
        return(
        <React.Fragment>
            <h1 className="heading-for-publication-showpage">{this.props.bookExpanded.title}</h1>
            <div className="book-container-on-show-page">
            <a target="_blank" rel="noopener noreferrer" href={this.props.bookExpanded.url}> <img className="book-image-on-show-page" src={require(`${this.props.bookExpanded.image.trim()}`)} alt={this.props.bookExpanded.title}/> </a>
            <div div className="book-description">
                <div>
                {this.italicizeTheTitle()}
                </div>
                <div className="return-to-publications-link">
                <p className="link" onClick={this.props.returnToPublicationsPage}>Return to Publications Page</p>
                </div>
            </div>
            </div>
            </React.Fragment>
        )
    }
}