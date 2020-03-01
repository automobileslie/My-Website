import React from 'react';

export default class ExpandPost extends React.Component{

    expandingPost=()=>{

        if (this.props.posts) {

            return this.props.posts.map(post=>{
                let changeToArrays=post.paragraphs.split("newpar,")
                let changeTheseArrays=changeToArrays.filter(description=>{
                    return description !=="newpar" 
                })

                return changeTheseArrays.map(paragraph=>{

                    if (paragraph.includes("{")) {

                    if (paragraph.includes("/n")) {

                        let newParagraphArray= paragraph.split("/n")

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
                    <p>{paragraph}</p>
                    </div>
                    }   
            }

            else if (paragraph.includes("SCREENSHOT")) {
                let aNewParagraph= paragraph.split(" SCREENSHOT")

                    let newArray=aNewParagraph.filter(description=>{
                        return description !==" SCREENSHOT"
                    })

                   return <div> {newArray.map(line=>{
                       console.log(line)
                        return <img src={require(`./Images/${line}`)} alt={line} />

                        
                    })}
                    <br></br>
                    </div>

            }

            else if (paragraph.includes("/anchor")) {

                    let aNewParagraphArray= paragraph.split("/anchor")

                    let aNewArray=aNewParagraphArray.filter(description=>{
                        return description !=="/anchor"
                    })

                   return <div className= "anchor-tag"> {aNewArray.map(line=>{
                        return <a className= "link" href={line} target = "_blank" rel="noopener noreferrer">{line}</a>
                    })}
                    <br></br>
                    </div>
            }

            else if (paragraph.includes("/heading")) {

                let thisNewParagraphArray= paragraph.split("/heading")

                let thisNewArray=thisNewParagraphArray.filter(description=>{
                    return description !=="/heading"
                })

               return <div> {thisNewArray.map(line=>{
                    return <h2 className="blog-heading">{line}</h2>
                })}
                </div>
        }
            

            else {
                return <div><p className= "blog-content"> {paragraph} </p>
                </div>
            }
        })
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