import { Query } from "./index";

const getAll = async () => {
  return Query("SELECT * FROM BlogTags;");
};

//I'm not currently using this function...
const getTagId = async (blogId: number) => {
  return Query("CALL spBlogTags(?);", [blogId]);
};

const createBlogTag = async (blogid: number, tagid: number) => {
  return Query("INSERT INTO blogtags (blogid,tagid) VALUES (?,?)", [
    blogid,
    tagid,
  ]);
};

const getAllBlogTagsForASpecificBlog = async (blogid: number) => {
  return Query("SELECT * FROM BlogTags WHERE blogid=?", [blogid]);
};

export default {
  getTagId,
  getAll,
  createBlogTag,
  getAllBlogTagsForASpecificBlog,
};
