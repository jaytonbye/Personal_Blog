import { Query } from "./index";

interface IBlog {
  id?: number;
  title: string;
  content: string;
  authorid: number;
}

const all = async () => {
  return Query("SELECT * FROM blogs");
};

const individualBlogPost = async (id: number) => {
  return Query(`SELECT * FROM blogs WHERE id=${id}`);
};

const createBlogPost = async (blog: IBlog) => {
  return Query(
    `INSERT INTO blogs (title, content, authorid) VALUES (${blog.title},${blog.content},${blog.authorid})`
  );
};

const updateBlogPost = async (blog: IBlog) => {
  return Query(
    `UPDATE blogs SET title=${blog.title} content=${blog.content} WHERE id=${blog.id}`
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
