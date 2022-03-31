import React from 'react'

const BlogItem = (props) => {
    return (
        <div onClick = {() => props.onBlogSelect(props.blogJSON)}>
            <img 
                alt = {props.blogJSON.title}
                className = "ui image"
                src = {props.blogJSON.picture}/>
            <div className = "content"> 
                <div className = "header">
                    {props.blogJSON.title}
                </div>
            </div>
        </div>
    )
}

export default BlogItem;