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
            <div className="blog-container">
            <div className="blog-list">
            {this.displayPosts()}
            </div>
            <div className="blog-intro">
                <p>These posts can also be found at <a className="link" href="https://medium.com/@carlie.anglemire" target = "_blank" rel="noopener noreferrer">https://medium.com/@carlie.anglemire</a></p>
                </div>
           
            </div>
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