// src/components/EntryList.js
import React from "react";

function EntryList({ entries, deleteEntry, editEntry }) {
  return (
    <div>
      <h2>Entries List</h2>
      <ul>
        {entries.map((entry) => (
          <li key={entry.id}>
            <h3>{entry.topic}</h3>
            <p>{entry.description}</p>
            <p>{entry.date}</p>
            <button onClick={() => editEntry(entry)}>Edit</button>
            <button onClick={() => deleteEntry(entry.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EntryList;
