"use client";
import { useState, useEffect } from "react";
export default function Home() {
  const [entries, setEntries] = useState([]);
  const [draft, setDraft] = useState("");
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    async function loadEntries() {
      const res = await fetch("/api/entries");
      const data = await res.json();
      const formatted = data.map((row) => ({
        text: row.text,
        date: row.entry_date,
      }));
      setEntries(formatted);
    }
    loadEntries();
  }, []);

  return (
    <>
      <h1>Play Book</h1>
      <div className="container">
        <div className="list-section">
          <ul>
            {entries.map((entry, index) => (
              <li key={index} onClick={() => setSelected(entry)}>
                {entry.text} <br />
                <small>{entry.date}</small>
              </li>
            ))}
          </ul>
          <textarea
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="whats on your mind..."
          />
          <button
            onClick={async () => {
              const newEntry = {
                text: draft,
                date: new Date().toLocaleDateString("en-GB"),
              };

              await fetch("/api/entries", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newEntry),
              });

              setEntries([...entries, newEntry]);
              setDraft("");
            }}
          >
            Save entry
          </button>
        </div>

        <div className="detail-section">
          {selected ? (
            <div>
              <h2>Selected entry:</h2>
              <p className="detail-date">{selected.date}</p>
              <p>{selected.text}</p>
            </div>
          ) : (
            <p className="placeholder">Nothing selected.</p>
          )}
        </div>
      </div>
    </>
  );
}
