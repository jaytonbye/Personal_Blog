import * as React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { IBlog } from "../types";

const IndividualBlog = (props: any) => {
  const [blog, setBlog] = React.useState([]);
  const { blogid } = useParams<{ blogid: string }>();

  React.useEffect(() => {
    fetch(`http://localhost:3000/api/blogs/${blogid}`)
      .then((res) => res.json())
      .then((results) => {
        setBlog(results);
      });
  }, []);

  //console.log(blog[0].id);
  //when I run this without the .id i get the object, wtf?

  if (blog.length > 0) {
    return (
      <>
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Blog Title: {blog[0].title}</h3>
            <h4>Blog Author: {blog[0].authorid}</h4>
            <h5>Tags: ?</h5>
            <p className="card-text">{blog[0].content}</p>
            <button className="btn btn-success">Edit Blog</button>
            <button className="btn btn-danger">Delete Blog</button>
          </div>
        </div>
      </>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};

export default IndividualBlog;
