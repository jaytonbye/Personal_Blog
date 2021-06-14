import * as React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { IBlog } from "../types";

const IndividualBlog = (props: any) => {
  const [blog, setBlog] = React.useState([]);
  const { blogid } = useParams<{ blogid: string }>();

  const deleteButton = () => {
    fetch(`http://localhost:3000/api/blogs/${blogid}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: blogid }),
    });
    alert("blog deleted");
    window.location.reload();

    //how do I rerender the page after the deletion? Or I could just navigate back to the homepage, either would work, i'd like to know how to do both.

    //how do I use error handling here for when there is a mistake?
  };

  React.useEffect(() => {
    fetch(`http://localhost:3000/api/blogs/${blogid}`)
      .then((res) => res.json())
      .then((results) => {
        setBlog(results);
      });
  }, []);

  //console.log(blog[0].id);
  //when I run this without the .id i get the object, wtf?

  //The reason this was happening is that blog is an emptry array when it first loads. It uses useEffect after the initial rendering. To get around this issue, we just use an if statement as seen below:

  if (blog.length > 0) {
    return (
      <>
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Blog Title: {blog[0].title}</h3>
            <h4>Blog Author: who knows</h4>
            <h5>Tags: ?</h5>
            <p className="card-text">{blog[0].content}</p>

            <button className="btn btn-success">
              <Link to={`/editblog/${blog[0].id}`}>Edit Blog</Link>
            </button>
            <button className="btn btn-danger" onClick={deleteButton}>
              Delete Blog
            </button>
          </div>
        </div>
      </>
    );
  } else {
    return <h1>There is no blog here...</h1>;
  }
};

export default IndividualBlog;
