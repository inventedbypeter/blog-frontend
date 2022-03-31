import React from 'react';
import Comment from './Comment';

const Blog = (props) => {
    const commentList = props.commentsList.map(comment => {
        return <Comment commentElement = {comment} />
    })
    return (
        <div>
            <h1 className = "ui header"> {props.blogContent.title} </h1>
            <h2 className = "ui header"> Author: {props.blogContent.author} </h2>
            <h2 className = "ui header"> Time: {props.blogContent.timeStamp} </h2>
            <img className = "ui fluid image" src= {props.blogContent.image}/>
            <br/>
            <p> {props.blogContent.content} </p>
            <br/>
            <h3 className = "ui dividing header">Comments</h3>
            {commentList}
        </div>
    )
}

export default Blog;