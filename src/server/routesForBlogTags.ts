import { Router } from "express";
import db from "./db";
const router = Router();

router.get("/:id?", async (req, res) => {
  let id = Number(req.params.id);
  try {
    if (id) {
      res.json(await db.BlogTags.getAllBlogTagsForASpecificBlog(id));
    } else {
      res.json(await db.BlogTags.getAll());
    }
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.post("/", async (req, res) => {
  try {
    res.json(await db.BlogTags.createBlogTag(req.body.blogid, req.body.tagid));
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

//I haven't added Put or Delete routes as I don't think i'll need them

/*
router.put("/", async (req, res) => {
  try {
    console.log("attempting");
    res.json(await db.Tags.updateTag(req.body));
  } catch (error) {
    console.log(error);
    console.log("somethings fucking up here");
    res.sendStatus(500);
  }
});

router.delete("/:id", async (req, res) => {
  let id = Number(req.params.id);
  console.log("hello");
  try {
    res.json(await db.Tags.deleteTag(id));
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});
*/

export default router;
