import React from 'react';
import video from './videos/BookandMovieMemoryBankVideo.mp4'


const BookAndMovieMemoryBank= (props)=>{

    return(
        <div className="body">
            <h1>Book and Movie Memory Bank</h1>
            <br></br>
            <video src={video} width="750" height="500" controls></video>
            <br></br>
            <p className="link" onClick={props.returnToProjects}>Return to Projects Page</p>
        </div>
    )
}

export default BookAndMovieMemoryBank;