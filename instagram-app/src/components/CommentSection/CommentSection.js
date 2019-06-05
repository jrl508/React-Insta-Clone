import React, {Component} from 'react'
import './CommentSection.css'
import Comment from './Comment'

class CommentSection extends Component{

    state = {
        comments: this.props.comments,
        newComment:''
    }

    changeHandler = e =>{
        console.log(e.target.value)
        e.preventDefault();
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }

    addComment = e =>{
        e.preventDefault();
        const newComment={
            username: "that_guy_ricky",
            text: this.state.newComment
        }
        this.setState({
            comments:[...this.state.comments, newComment], newComment:''
        })
    }
    render(){

        return(
            <div className="comment-section">
                <div className="comment-dash">
                    {this.props.likes}
                    <p> <i className="far fa-heart icon"></i> <i className="far fa-comment icon"></i></p>
                    {this.state.comments.map(comment => <Comment comment={comment}  key={comment.id}/>)}
                    <div className="timestamp">{this.props.timestamp}</div>
                </div>
    
                <form className="add-comment"  onSubmit={this.addComment}>
                    <input type="text" className="comment-box" placeholder="Add a comment..." onChange={this.changeHandler} name="newComment" value={this.state.newComment}/>
                    <button className="comment-btn">Post</button>
                </form>
            </div>
        )
    }
}

export default CommentSection;