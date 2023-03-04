import React from 'react';
import ExpandPost from './ExpandPost';


class Blog extends React.Component{

    displayPosts=()=>{  
        if(this.props.posts.length < 1){
            return <h1 className="loading">Blog Posts Loading!</h1>
        }
        else {
        return this.props.posts.map(post=>{
            return <h3 className="link" key={post.id} id="post-list-title" onClick={()=>this.props.showPost(post.title)}>{post.title}</h3>
        }) 
        } 
    }

    render(){
    return(
        <React.Fragment>
        {!this.props.expandPost ? 
            <div>
                <h1 className="blog-index-heading">Blog</h1>
                <div className="container-for-blog-index">
                <p className="blog-intro">Blog posts can be found <a className="link" href="https://medium.com/@carlie.anglemire" target = "_blank" rel="noopener noreferrer">here</a></p>
                <div className="blog-list">
                {/* {this.displayPosts()} */}
                </div>      
                </div>
            </div>
        :
            <React.Fragment>
            <ExpandPost posts={this.props.posts}/>
            {/* <p className= "return-to-projects-index" onClick={this.props.returnToPosts}>Return to List of Blog Posts</p> */}
            </React.Fragment>
        }
        </React.Fragment>
    )
    }
}

export default Blog;
