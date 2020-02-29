import React from 'react';

export default class ExpandPost extends React.Component{

    expandingPost=()=>{

        if (this.props.posts) {

        return this.props.posts[0].paragraphs.map(paragraph=>{

            if (paragraph.description.includes("{")) {

                    if (paragraph.description.includes("/n")) {

                        let newParagraphArray= paragraph.description.split("/n")

                        let newArray=newParagraphArray.filter(description=>{
                            return description !=="/n"
                        })

                       return <div className="coding-in-blog">{newArray.map(line=>{
                            return <p >{line}</p>
                        })}
                        </div>
                    }

                    else {
                    return <div className="coding-in-blog">
                    <p>{paragraph.description}</p>
                    </div>
                    }   
            }

            else if (paragraph.description.includes("/anchor")) {

                    let aNewParagraphArray= paragraph.description.split("/anchor")

                    let aNewArray=aNewParagraphArray.filter(description=>{
                        return description !=="/anchor"
                    })

                   return <div className= "anchor-tag"> {aNewArray.map(line=>{
                        return <a className= "link" href={line} target = "_blank" rel="noopener noreferrer">{line}</a>
                    })}
                    <br></br>
                    </div>
            }

            else if (paragraph.description.includes("/heading")) {

                let thisNewParagraphArray= paragraph.description.split("/heading")

                let thisNewArray=thisNewParagraphArray.filter(description=>{
                    return description !=="/heading"
                })

               return <div> {thisNewArray.map(line=>{
                    return <h2 className="blog-heading">{line}</h2>
                })}
                </div>
        }
            

            else {
                return <div><p className= "blog-content"> {paragraph.description} </p>
                </div>
            }
        })

        }
        else {
            return <div></div>
        }
    }


    render(){
        return(
            <div className="body">
            <h1>{this.props.posts[0].title}</h1>
            <br></br>
            {this.expandingPost()}
            </div>
        )
    }
}