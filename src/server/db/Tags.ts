import { Query } from "./index";
import { ITag } from "../../types";

const all = async () => {
  return Query("SELECT * FROM tags");
};

const individualTag = async (id: number) => {
  return Query(`SELECT * FROM tags WHERE id=${id}`);
};

const createTag = async (tag: ITag) => {
  return Query(`INSERT INTO tags (name) VALUES (${tag.name})`);
};

const updateTag = async (tag: ITag) => {
  return Query(`UPDATE tags SET name=${tag.name} WHERE id=${tag.id}`);
};

const deleteTag = async (id: number) => {
  return Query(`DELETE FROM tags WHERE id=${id}`);
};

export default {
  all,
  individualTag,
  createTag,
  updateTag,
  deleteTag,
};
