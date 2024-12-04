// src/components/EditEntry.js
import React, { useState, useEffect } from "react";

function EditEntry({ entry, updateEntry, cancelEdit }) {
  const [topic, setTopic] = useState(entry.topic);
  const [description, setDescription] = useState(entry.description);
  const [activeRecallDate, setactiveRecallDate] = useState(
    entry.activeRecallDate || ""
  );
  const [testDate, setTestDate] = useState(entry.testDate || "");
  const [reps, setReps] = useState(entry.reps || "");

  useEffect(() => {
    setTopic(entry.topic);
    setDescription(entry.description);
    setactiveRecallDate(entry.activeRecallDate || "");
    setTestDate(entry.testDate);
    setReps(entry.reps);
  }, [entry]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEntry({
      ...entry,
      topic,
      description,
      activeRecallDate,
      testDate,
      reps,
    });
  };

  return (
    <div>
      <h2>Edit Entry</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="date"
          value={activeRecallDate}
          onChange={(e) => setactiveRecallDate(e.target.value)}
          required
        />
        <input
          type="date"
          value={testDate}
          onChange={(e) => setTestDate(e.target.value)}
          required
        />
        <input
          type="number"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
          required
        />
        <button type="submit">Update</button>
      </form>
      <button onClick={cancelEdit}>Cancel</button>
    </div>
  );
}

export default EditEntry;
