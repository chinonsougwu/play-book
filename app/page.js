"use client";
import { useState } from "react";
export default function Home() {
  const [entries, setEntries] = useState([
    { text: "Sample Entry", date: "Jan 1, 2026" },
  ]);
  const [draft, setDraft] = useState("");
  const [selected, setSelected] = useState(null);

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
            onClick={() => {
              setEntries([
                ...entries,
                { text: draft, date: new Date().toLocaleDateString("en-GB") },
              ]);
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
