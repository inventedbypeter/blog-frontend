import React, {useState, useEffect} from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import Blog from './Blog';
import BlogList from './BlogList';

const App = () => {
  const [blog, setBlog]  = useState(null); // first JSON in the list
  const [comments, setComments] = useState([]); // [ajkldjf]
  const [blogList, setBlogList] = useState([]); // [afhhehd]

  useEffect(() => {
    const getBlogs = async () => {
      const blogsResponse = await axios.get("http://localhost:5002/api/v1/blog/fetch/blogs")
      const commentsResponse = await axios.get(`http://localhost:5002/api/v1/blog/fetch/comments/${blogsResponse.data[0]._id}`)
      setBlog(blogsResponse.data[0])
      setComments(commentsResponse.data)
      setBlogList(blogsResponse.data)
    }
    getBlogs()
  }, [])

  const onBlogSelect = async (blogObject) => {
    const commentResponse = await axios.get(`http://localhost:5002/api/v1/blog/fetch/comments/${blogObject._id}`)
    setBlog(blogObject)
    setComments(commentResponse.data)
  }

  const isLoading = blog == null ? true : false;
  return (
      <div className = "ui container">
        <div className = "ui grid">
          <div className = "ui row">
            <div className = "eleven wide column">
              {isLoading ? <h1> Loading </h1> : <Blog
                    commentsList = {comments}
                    blogContent = {blog} /> 
              }
            </div>
            <div className = "five wide column">
              <BlogList 
                blogs = {blogList}
                onBlogSelect = {onBlogSelect}/>
            </div>
          </div>
        </div>
      </div>
  )
}

export default App;
