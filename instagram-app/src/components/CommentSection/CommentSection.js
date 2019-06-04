import React from 'react'
import './CommentSection.css'
import Comment from './Comment'

function CommentSection(props){
    return(
        <div className="comment-section">
            <div className="comment-dash">
                <p> <i className="far fa-heart icon"></i> <i className="far fa-comment icon"></i></p>
                {props.post.comments.map(comment => <Comment comment={comment}  key={comment.id}/>)}
                <div className="timestamp">{props.post.timestamp}</div>
            </div>

            <form className="add-comment">
                <input type="text" className="comment-box" placeholder="Add a comment..."/>
                <button className="comment-btn">Post</button>
            </form>
        </div>
    )
}

export default CommentSection;