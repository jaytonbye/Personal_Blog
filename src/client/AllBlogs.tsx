import * as React from "react";
import BlogCard from "./BlogCard";
import { useState, useEffect } from "react";

const AllBlogs = (props: any) => {
  const [blogs, setBlogs] = React.useState([]);
  const [authors, setAuthors] = React.useState([]);
  const [tags, setTags] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:3000/api/blogs")
      .then((res) => res.json())
      .then((results) => {
        setBlogs(results);
      });
  }, []);

  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="btn btn-primary" href="/NewBlog">
            Create a new blog
          </a>
        </div>
      </nav>
      {blogs.map((blog) => {
        return (
          <BlogCard
            key={blog.id}
            id={blog.id}
            title={blog.title}
            content={blog.content}
            authorid={blog.authorid}
            name={blog.name}
          />
        );
      })}
    </>
  );
};

export default AllBlogs;
