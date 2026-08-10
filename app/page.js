"use client";
import { useState } from "react";
export default function Home() {
  const [entries, setEntries] = useState([
    "Task 1: A Day in the life", // index 0
    "Task 2: A Personal expierence", // index 1
    "Task 3: A Bad day", // index 2
    "Task 4: A Happy day", // index 3
    "Task 5: A Brunch date", // index 4
  ]);
  return (
    <>
      <h1>Play Book</h1>
      <ul>
        {entries.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul>
      <button
        onClick={() =>
          setEntries([...entries, "TODO(you): pick a short test entry"])
        }
      >
        Add test entry
      </button>
    </>
  );
}
