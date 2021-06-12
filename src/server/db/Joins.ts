import { Query } from "./index";

const allFullBlogs = async () => {
  //  return Query("SELECT * FROM blogs");
  return Query(
    "SELECT blogs.*, authors.name, authors.email, BlogTags.*, tags.name FROM blogs JOIN authors ON authors.id = blogs.authorid JOIN BlogTags ON Blogs.id=BlogTags.blogid JOIN Tags ON BlogTags.tagid=Tags.id;"
  );
};

//Todo: make the rest safe from sql injections like this one:
const individualFullBlog = async (id: number) => {
  return Query(
    "SELECT blogs.*, authors.name, authors.email, BlogTags.*, tags.name FROM blogs JOIN authors ON authors.id = blogs.authorid JOIN BlogTags ON Blogs.id=BlogTags.blogid JOIN Tags ON BlogTags.tagid=Tags.id WHERE Blogs.id=?",
    [id]
  );
};

export default {
  allFullBlogs,
  individualFullBlog,
};
