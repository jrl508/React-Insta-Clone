import React from 'react'
import './PostContainer.css'
import CommentSection from '../CommentSection/CommentSection';
function PostContainer(props){
    return(
        <div>
            {props.posts.map(post=>(
                <div key={post.id} className="post">
                    <div className="post-header"><img src={post.thumbnailUrl} alt="thumbnail" className="thumbnail"></img> {post.username}</div>
                    <img src={post.imageUrl} alt="post-img"></img>
                
                <CommentSection post={post}/>
                {post.timestamp}
                </div>
            ))}
        </div>
    )
}

export default PostContainer;