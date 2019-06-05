import React from 'react'
import './PostContainer.css'
import CommentSection from '../CommentSection/CommentSection';
function PostContainer(props){
    return(
        <div className="post-container">
            {props.posts.map(post=>(
                <div key={post.id} className="post">
                    <div className="post-header"><img src={post.thumbnailUrl} alt="thumbnail" className="thumbnail"></img><strong>{post.username}</strong></div>
                    <img src={post.imageUrl} alt="post-img" className="post-img"></img>
                
                    <CommentSection comments={post.comments} timestamp={post.timestamp} likes={post.likes}/>
                </div>

            ))}
        </div>
    )
}

export default PostContainer;