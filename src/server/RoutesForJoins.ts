import { Router } from "express";
import db from "./db";

const router = Router();

router.get("/:id?", async (req, res) => {
  let id = Number(req.params.id);
  try {
    if (id) {
      res.json(await db.Joins.individualFullBlog(id));
    } else {
      res.json(await db.Joins.allFullBlogs());
    }
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

export default router;
