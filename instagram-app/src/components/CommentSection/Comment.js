import React from 'react'

function Comment(props){
    return(
        <div>
            <strong>{props.comment.username}</strong> 
            <span className="comment-text">{props.comment.text}</span>
        </div>
        
    )
}

export default Comment;