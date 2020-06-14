import React from 'react';
import PublicationShowPage from './PublicationShowPage';

export default class Publications extends React.Component{

state={
    expandBook: false,
    bookExpanded: [],
    books: [{title: "Being Nude: The Skin of Images", image: "./Images/Being_Nude.jpg", url: "https://www.fordhampress.com/9780823256204/being-nude/", description: "Being Nude: The Skin of Images /title by Jean-Luc Nancy and Federico Ferrari is a Philosophy book that I co-translated with /title Anne O'Byrne. /title  It has nudity in different works of art as its subject matter and focuses on what these works reveal about intersubjectivity and identity. /title"}, {title: "Carnal Hermeneutics", image: "./Images/Carnal_Hermeneutics.jpg", url: 'https://www.fordhampress.com/9780823265893/carnal-hermeneutics/', description: 'For this volume, I contributed a translation of an essay by Jean-Luc Nancy entitled "Rethinking Corpus: Essential Skin." Skin is described as a site of vulnerability where we are exposed both to danger and to the joy of contact with others. The essay includes reflections on love and maternity, with the marks that our bodies bear testifying to our interconnectedness. Nancy also considers the relationship between several idiomatic phrases containing the word "skin," exploring its multiple meanings in different contexts to trace various degrees and types of touch.'}]
}

displayBooks=()=>{
    return this.state.books.map(book=>{
        return <div className="publication-book-tile">
        <img onClick={()=> this.clickBook(book)} className="book-image" src={require(`${book.image.trim()}`)} alt={book.title} />
        </div>
   
    })
}

clickBook=(book)=>{
    this.setState({
        expandBook: !this.state.expandBook,
        bookExpanded: book
    })
}

returnToPublicationsPage=()=>{
    this.setState({
        expandBook: !this.state.expandBook,
        bookExpanded: []
    })
}

    whichToDisplay=()=>{
        if (!this.state.expandBook){
            return <React.Fragment>
            <h1 className="heading-for-publication-page">Publications</h1>
            <div className="publications-book-container">
            {this.displayBooks()}
            </div>
            </React.Fragment>
        }

        else {
            return <PublicationShowPage bookExpanded={this.state.bookExpanded} returnToPublicationsPage={this.returnToPublicationsPage}/>
        }
    }

    render(){
        return(
            <div className="container-for-publication-index">
                {this.whichToDisplay()}
                
            </div>
        )
    }
}