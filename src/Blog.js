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
            this.setState({
                posts: the_posts,
                expandPost: false,
                postToExpand: []
            })
        })
    }

    displayPosts=()=>{
        return this.state.posts.map(post=>{
            return <h2 className="link" id="post-list-title" onClick={()=>this.showPost(post)}>{post.title}</h2>
        })   
    }

    showPost=(post)=>{
        console.log(post)

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

    render(){
    return(
        <div className="body">

        {!this.state.expandPost ? 
        <div>
            <h1>Blogs</h1>
            {this.displayPosts()}
            </div>

            :

            <div>
                <h1>{this.state.postToExpand.title}</h1>
                <br></br>
                <p className= "blog-content">{this.state.postToExpand.description}</p>
                <br></br>
                <p className= "link" onClick={this.returnToPosts}>Return to List of Blog Posts</p>
            </div>
        }
            </div>

        

       
    )
    }
}

export default Blog;