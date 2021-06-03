import * as express from "express";
import routesForBlogs from "./routesForBlogs";
import routesForAuthors from "./routesForAuthors";
import routesForTags from "./routesForTags";
import routesForBlogTags from "./routesForBlogTags";

const router = express.Router();

router.get("/hello", (req, res, next) => {
  res.json("World");
});

router.use("/blogs", routesForBlogs);
router.use("/authors", routesForAuthors);
router.use("/tags", routesForTags);
router.use("/BlogTags", routesForBlogTags);

export default router;
