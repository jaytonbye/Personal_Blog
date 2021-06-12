import { Query } from "./index";
import { IAuthor } from "../../types";

const all = async () => {
  return Query("SELECT * FROM authors");
};

const individualAuthor = async (id: number) => {
  return Query(`SELECT * FROM authors WHERE id=${id}`);
};

const createAuthor = async (author: IAuthor) => {
  return Query(
    `INSERT INTO authors (name, email) VALUES (${author.name},${author.email})`
  );
};

const updateAuthor = async (author: IAuthor) => {
  return Query(
    `UPDATE blogs SET name=${author.name}, email=${author.email} WHERE id=${author.id}`
  );
};

const deleteAuthor = async (id: number) => {
  return Query(`DELETE FROM authors WHERE id=${id}`);
};

export default {
  all,
  individualAuthor,
  createAuthor,
  updateAuthor,
  deleteAuthor,
};
