import { Router } from "express";
import db from "./db";
const router = Router();

router.get("/:id?", async (req, res) => {
  let id = Number(req.params.id);
  try {
    if (id) {
      res.json(await db.Authors.individualAuthor(id));
    } else {
      res.json(await db.Authors.all());
    }
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.post("/", async (req, res) => {
  try {
    res.json(await db.Authors.createAuthor(req.body));
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.put("/", async (req, res) => {
  try {
    console.log("attempting");
    res.json(await db.Authors.updateAuthor(req.body));
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
    res.json(await db.Authors.deleteAuthor(id));
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

export default router;
