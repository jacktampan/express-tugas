const { query } = require("../database/Db");

const createNote = async (req, res) => {
  const { title, datetime, note } = req.body;
  try {
    await query("INSERT INTO notes (title, datetime, note) VALUES(?, ?, ?)", [
      title,
      datetime,
      note,
    ]);
    return res.status(200).json({
      pesan: "Catatan berhasil dibuat",
      data: {
        title,
        datetime,
        note,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllNotes = async (req, res) => {
  try {
    const result = await query("SELECT * FROM notes");
    return res.status(200).json({ data: result });
  } catch (error) {
    console.log(error);
  }
};

const getNoteById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await query("SELECT * FROM notes where id = ?", [id]);
    return res.status(200).json({ data: result });
  } catch (error) {
    return res.status(400).json({ pesan: "ada yg salah", error });
  }
};

const updateNote = async (req, res) => {
  const { title, datetime, note } = req.body;
  const { id } = req.params;
  try {
    await query(
      "UPDATE notes SET title = ?, datetime = ?, note = ? where id = ?",
      [title, datetime, note, id]
    );
    return res.status(200).json({
      pesan: "perubahan catatan berhasil",
      data: {
        title,
        datetime,
        note,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteNote = async (req, res) => {
  const { id } = req.params;
  try {
    await query("DELETE FROM notes where id = ?", [id]);
    return res.status(200).json({
      pesan: "hapus catatan berhasil",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createNote,
  getAllNotes,
  getNoteById,
  updateNote,
  deleteNote,
};
