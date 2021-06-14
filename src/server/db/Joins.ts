import { Query } from "./index";

const allFullBlogs = async () => {
  //  return Query("SELECT * FROM blogs");
  return Query(
    "SELECT blogs.*, authors.name AS authorName, authors.email AS authorEmail FROM blogs JOIN authors ON authors.id = blogs.authorid;"
  );
};

//Todo: make the rest safe from sql injections like this one:
const individualFullBlog = async (id: number) => {
  return Query(
    "SELECT blogs.*, authors.name AS authorName, authors.email AS authorEmail FROM blogs JOIN authors ON authors.id = blogs.authorid WHERE Blogs.id=?;",
    [id]
  );
};

export default {
  allFullBlogs,
  individualFullBlog,
};
