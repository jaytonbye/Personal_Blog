import { Router } from "express";
import db from "./db";
const router = Router();

router.get("/:id?", async (req, res) => {
  let id = Number(req.params.id);
  try {
    if (id) {
      res.json(await db.Tags.individualTag(id));
    } else {
      res.json(await db.Tags.all());
    }
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.post("/", async (req, res) => {
  try {
    res.json(await db.Tags.createTag(req.body));
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.put("/", async (req, res) => {
  try {
    res.json(await db.Tags.updateTag(req.body));
  } catch (error) {
    console.log(error);
    console.log("somethings fucking up here");
    res.sendStatus(500);
  }
});

router.delete("/:id", async (req, res) => {
  let id = Number(req.params.id);
  try {
    res.json(await db.Tags.deleteTag(id));
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

export default router;
