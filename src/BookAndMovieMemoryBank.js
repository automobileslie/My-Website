import React from 'react';


const BookAndMovieMemoryBank= (props)=>{

    return(
        <div>
            <h1>Book and Movie Memory Bank</h1>
            <br></br>
            <p className="link" onClick={props.returnToProjects}>Return to Projects Page</p>
        </div>
    )
}

export default BookAndMovieMemoryBank;