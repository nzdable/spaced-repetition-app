
import React, { useState } from 'react';

function CreateEntry({ addEntry }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && description) {
      addEntry({ id: Date.now(), name, description });
      setName('');
      setDescription('');
    }
  };

  return (
    <div>
      <h2>Create New Entry</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit">Add Entry</button>
      </form>
    </div>
  );
}

export default CreateEntry;
