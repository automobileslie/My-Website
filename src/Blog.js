import React from 'react';
import ExpandPost from './ExpandPost';


class Blog extends React.Component{


    displayPosts=()=>{  
        return this.props.posts.map(post=>{
            return <h3 className="link" key={post.id} id="post-list-title" onClick={()=>this.props.showPost(post.title)}>{post.title}</h3>
        })  
    }


    render(){
    return(
        <div className="body">

        {!this.props.expandPost ? 
        <div>
            <h1>Blog</h1>
            {this.displayPosts()}
            </div>

            :
            <React.Fragment>
        <ExpandPost posts={this.props.posts}/>
        <p className= "link" onClick={this.props.returnToPosts}>Return to List of Blog Posts</p>
        </React.Fragment>
        }
            </div>
    )
    }
}

export default Blog;