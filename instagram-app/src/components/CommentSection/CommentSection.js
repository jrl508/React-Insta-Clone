import React from 'react'
import './CommentSection.css'
import Comment from './Comment'

function CommentSection(props){
    return(
        <div className="comment-section">
            <p> *heart and comment icons*</p>
            {props.post.comments.map(comment => <Comment comment={comment}  key={comment.id}/>)}
        </div>
    )
}

export default CommentSection;