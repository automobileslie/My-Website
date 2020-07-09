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

                        if (paragraph.includes("'{}'")){
                            let splittingNewPar= paragraph.split("'{}'")
    
                            let filteringSplittingNewPar=splittingNewPar.filter(description=>{
                                return description !=="'{}'"
                            })
    
                           return <div className="container-for-code-blocks">

                           <div className="coding-in-blog">{filteringSplittingNewPar.map(line=>{
                                return <p className="lines-of-code">{line}</p>
                            })}
                            </div>
                            </div>
                        }

                    else if (paragraph.includes("\n")) {

                        let newParagraphArray= paragraph.split("\n")

                        let newArray=newParagraphArray.filter(description=>{
                            return description !=="\n"
                        })

                       return <div className="container-for-code-blocks">

                       <div className="coding-in-blog">{newArray.map(line=>{
                            return <p className="lines-of-code">{line}</p>
                        })}
                        </div>
                        </div>
                    }

                    else {
                    return <div className="container-for-code-blocks">

                    <div className="coding-in-blog">
                    <p className="lines-of-code">{paragraph}</p>
                    </div>
                    </div>
                    }   
            }

            else if (paragraph.includes("this-is-code-in-blog")) {

            if (paragraph.includes("\n")) {

                let thisArray=paragraph.split("this-is-code-in-blog")

                let anotherNewArray= thisArray.filter(description=>{
                    return description !== "this-is-code-in-blog"
                })

                let newParagraphArray= anotherNewArray.join("").split("\n")

                let newArray=newParagraphArray.filter(description=>{
                    return description !=="\n"
                })

               
               return <div className="container-for-code-blocks">

               <div className="coding-in-blog">{newArray.map(line=>{
                    return <p className="lines-of-code">{line}</p>
                })}
                </div>
                </div>
            }

            else {

            return <div className="container-for-code-blocks">

            <div className="coding-in-blog">
            <p className="lines-of-code">{paragraph}</p>
            </div>
            </div>
            }   
    }


            else if (paragraph.includes("embed")){
                
                return <div className="video-container-for-blog">
                <iframe className="video-for-blog-post" width='680' height='382' src= {`${paragraph}`} title= {paragraph} frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
                </div>
             }

            else if (paragraph.includes("this-is-an-image")) {

                // if (post.title === "Time and Greetings in a JavaScript Function") {
                //     return <img className="other-screenshots-for-blog"src={require(`${paragraph.trim()}`)} alt={paragraph} />
                // }

                // else if (post.title === "The Split Method and the Power of Punctuation"){
                //     return <img className="other-screenshots-for-blog"src={require(`${paragraph.trim()}`)} alt={paragraph} />
                // }

                let paragraphArray= paragraph.trim().split("this-is-an-image")

                console.log(paragraphArray);

                let newArrayForImage=paragraphArray.filter(description=>{
                    return description !=="this-is-an-image" || description !== ""
                })

                console.log(newArrayForImage);

            //    return <div> {newArrayForImage.map(line=>{
                return <img className="screenshots-for-blog"src={require(`${newArrayForImage[0].trim()}`)} alt={newArrayForImage[0]} />

                // })
            // }
                // </div>

                
                
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
                    return <h3 className="blog-heading">{line}</h3>
                })}
                </div>
        }
            

            else {
                return <p className= "blog-content"> {paragraph} </p>
                
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
            <div className="expanded-blog-post">
            <h1 className="heading-for-blog-expanded">{this.props.posts[0].title}</h1>
            
            {this.expandingPost()}
             </div>
        )
    }
}