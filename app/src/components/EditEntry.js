// src/components/EditEntry.js
import React, { useState, useEffect } from 'react';

function EditEntry({ entry, updateEntry, cancelEdit }) {
  const [name, setName] = useState(entry.name);
  const [description, setDescription] = useState(entry.description);

  useEffect(() => {
    setName(entry.name);
    setDescription(entry.description);
  }, [entry]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEntry({ ...entry, name, description });
  };

  return (
    <div>
      <h2>Edit Entry</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit">Update</button>
      </form>
      <button onClick={cancelEdit}>Cancel</button>
    </div>
  );
}

export default EditEntry;
