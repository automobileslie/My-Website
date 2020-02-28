import React from 'react';


class Blog extends React.Component{

    state={
        posts: [],
        expandPosts: false
    }

    componentDidMount=()=>{
        fetch("http://localhost:3000/posts")
        .then(r=>r.json())
        .then(the_posts=>{
            console.log(the_posts)
            this.setState({
                posts: the_posts,
                expandPost: false,
                postToExpand: []
            })
        })
    }

    displayPosts=()=>{
        return this.state.posts.map(post=>{
            return <h3 className="link" key={post.id} id="post-list-title" onClick={()=>this.showPost(post)}>{post.title}</h3>
        })   
    }

    showPost=(post)=>{

        this.setState({
            expandPost: !this.state.expandPost,
            postToExpand: post
        })
    }

    returnToPosts=()=>{
        this.setState({
        expandPost: !this.state.expandPost,
        postToExpand: []
        })
    }

    expandingPost=()=>{

        return this.state.postToExpand.paragraphs.map(paragraph=>{

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

    render(){
    return(
        <div className="body">

        {!this.state.expandPost ? 
        <div>
            <h1>Blog</h1>
            {this.displayPosts()}
            </div>

            :

            <div>
            <h1>{this.state.postToExpand.title}</h1>
            <br></br>
            {this.expandingPost()}
            <p className= "link" onClick={this.returnToPosts}>Return to List of Blog Posts</p>
            </div> 
        }
            </div>
    )
    }
}

export default Blog;