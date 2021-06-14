import { Query } from "./index";
import { IBlog } from "../../types";

const all = async () => {
  return Query(
    "select blogs.*, authors.name from blogs join authors on authors.id = blogs.authorid;"
  );
};

const individualBlogPost = async (id: number) => {
  return Query(
    "select blogs.*, authors.name from blogs join authors on authors.id = blogs.authorid WHERE blogs.id=?;",
    [id]
  );
};

const createBlogPost = async (blog: IBlog) => {
  return Query(`INSERT INTO blogs (title, content, authorid) VALUES (?,?,?)`, [
    blog.title,
    blog.content,
    blog.authorid,
  ]);
};

const updateBlogPost = async (blog: IBlog) => {
  return Query(`UPDATE blogs SET title=?, content=? WHERE id=?`, [
    blog.title,
    blog.content,
    blog.id,
  ]);
};

const deleteBlogPost = async (id: number) => {
  return Query(`DELETE FROM blogs WHERE id=?`, [id]);
};

export default {
  all,
  individualBlogPost,
  createBlogPost,
  updateBlogPost,
  deleteBlogPost,
};
