import React from 'react';
import PublicationShowPage from './PublicationShowPage';

export default class Publications extends React.Component{

state={
    expandBook: false,
    bookExpanded: [],
    books: [{title: "Being Nude: The Skin of Images", image: "./Images/Being_Nude.jpg", url: "https://www.fordhampress.com/9780823256204/being-nude/", description: "This is a book by Jean-Luc Nancy and Federico Ferrari that I co-translated with Anne O'Byrne. It is a philosophy book that has nudity in artwork as its subject matter while focusing on what interpretations of these works reveal about intersubjectivity and identity."}, {title: "Carnal Hermeneutics", image: "./Images/Carnal_Hermeneutics.jpg", url: 'https://www.fordhampress.com/9780823265893/carnal-hermeneutics/', description: 'For this volume, I contributed a translation of an essay by Jean-Luc Nancy entitled "Rethinking Corpus: Essential Skin." It considers skin as a site of vulnerability where we are both exposed to danger and to the joy of contact with others. It is partly a reflection on love and maternity, with the marks that our bodies bear testifying to our interconnectedness. It also considers the relationship between several idiomatic phrases containing the word "skin," exploring multiple meanings of it in different contexts to trace various degrees and types of touch.'}]
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
            <h1>Publications</h1>
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
        console.log(this.state.bookExpanded)
        return(
            <div className="body">
                {this.whichToDisplay()}
                
            </div>
        )
    }
}