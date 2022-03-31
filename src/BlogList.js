import React from 'react';
import BlogItem from './BlogItem'

const BlogList = (props) => {
    const blogList = props.blogs.map(blog => {
        return <BlogItem blogJSON = {blog} onBlogSelect = {props.onBlogSelect}/>
    })

    return <div className = "ui relaxed divided list"> {blogList} </div>
}

export default BlogList;