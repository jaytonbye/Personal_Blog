import * as React from "react";
import { useState, useEffect } from "react";

//todo: make the CSS much better, it looks like shit.

const NewBlog = (props: any) => {
  const [blogTitle, setBlogTitle] = React.useState("");
  const [blogAuthor, setBlogAuthor] = React.useState("");
  const [blogTags, setBlogTags] = React.useState("");
  const [blogContent, setBlogContent] = React.useState("");

  const onBlogTitleChange = (event: any) => {
    setBlogTitle(event.target.value);
  };
  const onBlogAuthorChange = (event: any) => {
    setBlogAuthor(event.target.value);
  };
  const onBlogTagsChange = (event: any) => {
    setBlogTags(event.target.value);
  };
  const onBlogContentChange = (event: any) => {
    setBlogContent(event.target.value);
  };

  const onSubmitBlog = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: blogTitle,
        content: blogContent,
        authorid: 1, //jason is the author
      }),
    };
    fetch("http://localhost:3000/api/blogs", requestOptions);
    alert("blog submitted");
  };

  return (
    <>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h1>Add a new blog!</h1>
          <form>
            <label>Blog Title</label>
            <input type="text" onChange={onBlogTitleChange} />
            <br></br>
            <label>Blog Author</label>
            <input type="text" onChange={onBlogAuthorChange} />
            <br></br>
            <label>Blog Tags</label>
            <input type="text" onChange={onBlogTagsChange} />
            <br></br>
            <label>Blog Text</label>
            <textarea onChange={onBlogContentChange} />
          </form>
          <button
            id="submitButton"
            className="btn btn-success"
            onClick={onSubmitBlog}
          >
            Submit New Blog
          </button>
        </div>
      </div>
    </>
  );
};

export default NewBlog;
