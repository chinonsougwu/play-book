import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function POST(request) {
  const body = await request.json();
  const { text, date } = body;

  await pool.query("INSERT INTO entries (text, entry_date) VALUES ($1, $2)", [
    text,
    date,
  ]);

  return Response.json({ success: true });
}

export async function GET() {
  const result = await pool.query("SELECT * FROM entries ORDER BY id ASC");
  return Response.json(result.rows);
}
