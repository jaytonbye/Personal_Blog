import * as React from "react";
import { useState, useEffect } from "react";

//todo: make the CSS much better, it looks like shit.

const NewBlog = (props: any) => {
  return (
    <>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h1>Add a new blog!</h1>
          <form>
            <label>Blog Title</label>
            <input type="text" />
            <br></br>
            <label>Blog Author</label>
            <input type="text" />
            <br></br>
            <label>Blog Tags</label>
            <input type="text" />
            <br></br>
            <label>Blog Text</label>
            <textarea></textarea>
          </form>
          <button id="submitButton" className="btn btn-success">
            Submit New Blog
          </button>
        </div>
      </div>
    </>
  );
};

export default NewBlog;
