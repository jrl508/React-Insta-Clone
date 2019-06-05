import React, {Component} from 'react'
import './PostContainer.css'
import CommentSection from '../CommentSection/CommentSection';
class PostContainer extends Component{
    render(){
        return(
            <div className="post-container">
                {this.props.filteredPosts.length === 0 ? this.props.posts.map(post=>{
                    return(
                        <div key={post.id} className="post">
                            <div className="post-header">
                                <img src={post.thumbnailUrl}
                                alt="thumbnail"
                                className="thumbnail">
                                </img>
                                <strong>{post.username}</strong>
                            </div>
                            <img src={post.imageUrl} alt="post-img" className="post-img"></img>
                        
                            <CommentSection 
                                comments={post.comments} 
                                timestamp={post.timestamp} 
                                likes={post.likes}
                            />
                        </div>
                    )
                }) : this.props.filteredPosts.map(post=>{
                return(
                    <div key={post.id} className="post">
                        <div className="post-header">
                            <img src={post.thumbnailUrl}
                            alt="thumbnail"
                            className="thumbnail">
                            </img>
                            <strong>{post.username}</strong>
                        </div>
                        <img src={post.imageUrl} alt="post-img" className="post-img"></img>
                    
                        <CommentSection 
                            comments={post.comments} 
                            timestamp={post.timestamp} 
                            likes={post.likes}
                        />
                    </div>
                )
                })
        
            }
            </div>
        )
    }
}

export default PostContainer;