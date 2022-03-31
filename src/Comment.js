import React from 'react';

const Comment = (props) => {
    return (
        <div className = "ui comments"> 
                <div className = "comment">
                    <a className = "avatar">
                        <img src= {props.commentElement.avatarpic}/>
                    </a>
                    <div className = "content">
                        <a className = "author">{props.commentElement.commentor}</a>
                        <div className = "metadata">
                            <span className = "date">{props.commentElement.timeStamp}</span>
                        </div>
                    </div>
                    <div class="text">
                        {props.commentElement.commentContent}
                    </div>
                </div>
        </div>
    )
}

export default Comment;