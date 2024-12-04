// src/components/EditEntry.js
import React, { useState, useEffect } from "react";

function EditEntry({ entry, updateEntry, cancelEdit }) {
  const [topic, setTopic] = useState(entry.topic);
  const [description, setDescription] = useState(entry.description);
  const [date, setDate] = useState(entry.date || "");

  useEffect(() => {
    setTopic(entry.topic);
    setDescription(entry.description);
    setDate(entry.date || "");
  }, [entry]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEntry({ ...entry, topic, description, date });
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
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <button type="submit">Update</button>
      </form>
      <button onClick={cancelEdit}>Cancel</button>
    </div>
  );
}

export default EditEntry;
