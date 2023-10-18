import React from 'react';
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (
    <div className="blog-card">
        <div className="card-image">
            <img src="images/blog-1.jpg" className="img-fluid blog-img w-100" alt="blog" />
        </div>
        <div className="blog-content">
            <p className='date'>1 Dec, 2024</p>
            <h5 className="title text-wrap">A beautiful sunday morning</h5>
            <p className="desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam est ullam a nulla earum iusto.</p>
            <Link className='button' to="/blog">Read More</Link>
        </div>
    </div>
  )
}

export default BlogCard;