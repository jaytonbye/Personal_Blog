import { Query } from "./index";
import { IBlog } from "../../types";

const all = async () => {
  //  return Query("SELECT * FROM blogs");
  return Query(
    "select blogs.*, authors.name from blogs join authors on authors.id = blogs.authorid;"
  );
};

//Todo: make the rest safe from sql injections like this one:
const individualBlogPost = async (id: number) => {
  return Query(
    "select blogs.title, authors.name from blogs join authors on authors.id = blogs.authorid WHERE blogs.id=?;",
    [id]
  );
};

const createBlogPost = async (blog: IBlog) => {
  return Query(
    `INSERT INTO blogs (title, content, authorid) VALUES (${blog.title},${blog.content},${blog.authorid})`
  );
};

const updateBlogPost = async (blog: IBlog) => {
  return Query(
    `UPDATE blogs SET title=${blog.title}, content=${blog.content} WHERE id=${blog.id}`
  );
};

const deleteBlogPost = async (id: number) => {
  return Query(`DELETE FROM blogs WHERE id=${id}`);
};

export default {
  all,
  individualBlogPost,
  createBlogPost,
  updateBlogPost,
  deleteBlogPost,
};
