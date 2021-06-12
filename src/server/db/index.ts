import * as mysql from "mysql";
import Blogs from "./blogs";
import Authors from "./Authors";
import Tags from "./Tags";
import BlogTags from "./BlogTags";
import Joins from "./Joins";

const Connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "jason",
  password: "password",
  database: "blogs",
});

export const Query = (query: string, values?: Array<string | number>) => {
  return new Promise<Array<any>>((resolve, reject) => {
    Connection.query(query, values, (err, results) => {
      if (err) return reject(err);
      return resolve(results);
    });
  });
};

export default {
  Blogs,
  Authors,
  Tags,
  BlogTags,
  Joins,
};
