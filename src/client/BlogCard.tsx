import * as React from "react";
import { Link } from "react-router-dom";

const BlogCard = (props: any) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <p>Blog ID: {props.id}</p>
          <h3 className="card-title">{props.title}</h3>
          <h4>author: {props.name}</h4>
          <h5>Tags: {props.tags}</h5>
          <button className="btn btn-primary">
            <Link to={`/${props.id}`}>View Blog</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
