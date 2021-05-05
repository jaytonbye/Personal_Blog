import * as express from "express";
import db from "./db";
const router = express.Router();

router.get("/api/hello", (req, res, next) => {
  res.json("World");
});

router.get("/api/blogs/:id?", async (req, res) => {
  let id = Number(req.params.id);
  try {
    if (id) {
      res.json(await db.Blogs.individualBlogPost(id));
    } else {
      res.json(await db.Blogs.all());
    }
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.post("/api/blogs/", async (req, res) => {
  try {
    res.json(await db.Blogs.createBlogPost(req.body));
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.put("api/blogs/", async (req, res) => {
  try {
    res.json(await db.Blogs.updateBlogPost(req.body));
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.delete("api/blogs/:id", async (req, res) => {
  let id = Number(req.params.id);
  try {
    res.json(await db.Blogs.deleteBlogPost(id));
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});
export default router;
