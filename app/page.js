"use client";
import { useState } from "react";
export default function Home() {
  const [entries, setEntries] = useState([
    "A Day in the life", // index 0
  ]);
  const [draft, setDraft] = useState("");
  const [selected, setSelected] = useState(null);

  return (
    <>
      <h1>Play Book</h1>
      <ul>
        {entries.map((entry, index) => (
          <li key={index} onClick={() => setSelected(entry)}>{entry}</li>
        ))}
      </ul>
      <textarea value={draft} onChange={(e) => setDraft(e.target.value)} placeholder="Write today's entry..." />
      <button
        onClick={() => {
          setEntries([...entries, draft]);
          setDraft("");
        }}
      >
        Save entry
      </button>
      {selected && (
        <div>
          <h2>Selected entry:</h2>
          <p>{selected}</p>
        </div>
      )}
    </>
  );
}