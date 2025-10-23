// server.js
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import pkg from "pg";
const { Pool } = pkg;

const app = express();
app.use(cors());
app.use(bodyParser.json());

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "search_app",
  password: "Tube@2025",
  port: 5432,
});

// Endpoint to save queries
app.post("/save-queries", async (req, res) => {
  const { queries } = req.body;
  try {
    const values = queries.map((q) => `('${q}')`).join(",");
    await pool.query(`INSERT INTO search_queries (query) VALUES ${values}`);
    res.status(200).json({ message: "Queries saved!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});

// Optional endpoint to fetch all queries
app.get("/get-queries", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM search_queries ORDER BY id DESC");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: "Error fetching data" });
  }
});

app.listen(5000, () => console.log("✅ Backend running on port 5000"));
