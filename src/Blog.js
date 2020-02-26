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
            return <h2 className="link" key={post.id} id="post-list-title" onClick={()=>this.showPost(post)}>{post.title}</h2>
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
                return <div>
                    <p className= "blog-content"> {paragraph.description} </p>
                    <br></br>
                    </div>
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