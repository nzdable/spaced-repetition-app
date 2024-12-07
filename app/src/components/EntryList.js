import React from "react";

function EntryList({ entries, deleteEntry, editEntry }) {
  return (
    <div>
      <h2>Entries List</h2>
      <ul>
        {entries.map((entry) => (
          <li key={entry.id}>
            <p>
              <strong>Topic:</strong> {entry.topic}
            </p>
            <p>
              <strong>Description:</strong> {entry.description}
            </p>
            <p>
              <strong>Active Recall Date:</strong> {entry.activeRecallDate}
            </p>
            <p>
              <strong>Test Date:</strong> {entry.testDate}
            </p>
            <p>
              <strong>Repetitions:</strong> {entry.reps}
            </p>

            <button onClick={() => editEntry(entry)}>Edit</button>
            <button onClick={() => deleteEntry(entry.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EntryList;
