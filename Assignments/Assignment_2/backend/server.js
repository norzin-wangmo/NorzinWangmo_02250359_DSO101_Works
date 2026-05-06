const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { Pool } = require("pg");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false,
});

app.get("/", (req, res) => {
  res.send("Todo Backend API is running successfully");
});

app.get("/todos", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM todos ORDER BY id DESC");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch todos" });
  }
});

app.post("/todos", async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }

    const result = await pool.query(
      "INSERT INTO todos (title, completed) VALUES ($1, false) RETURNING *",
      [title]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: "Failed to create todo" });
  }
});

app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, completed } = req.body;

    const result = await pool.query(
      "UPDATE todos SET title = $1, completed = $2 WHERE id = $3 RETURNING *",
      [title, completed, id]
    );

    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: "Failed to update todo" });
  }
});

app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await pool.query("DELETE FROM todos WHERE id = $1", [id]);

    res.json({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete todo" });
  }
});

const createTable = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS todos (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      completed BOOLEAN DEFAULT false
    );
  `);
};

const PORT = process.env.PORT || 5050;

createTable()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Backend running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
  });