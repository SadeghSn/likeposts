import React, { Component } from "react";
import "./comment.css";

class Comments extends Component {
    constructor(props){
        super(props);

        this.createComment = this.createComment.bind(this);
    }

    delete(key){
        this.props.delete(key);
    }

    createComment(comment) {
        return <li onClick={()=>{this.delete(comment.key)}} key={comment.key}>{comment.text}</li>
      }
    render() { 
        var commentEntries = this.props.entries;
        var listItems = commentEntries.map(this.createComment);
        return ( 
            <div className="comment-list">
                <ul>
                    <p>{listItems}</p>
                </ul>
            </div>
        );
    }
}
 
export default Comments;