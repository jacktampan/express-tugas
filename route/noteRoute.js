const express = require("express");
const {
  createNote,
  getAllNotes,
  getNoteById,
  updateNote,
  deleteNote,
} = require("../controller/noteController");
const route = express.Router();

route.post("/notes", createNote);
route.get("/notes", getAllNotes);
route.get("/notes/:id", getNoteById);
route.put("/notes/:id", updateNote);
route.delete("/notes/:id", deleteNote);

module.exports = route;
