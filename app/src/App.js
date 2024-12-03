// src/App.js
import React, { useState } from "react";
import CreateEntry from "./components/CreateEntry";
import EditEntry from "./components/EditEntry";
import EntryList from "./components/EntryList";

function App() {
  const [entries, setEntries] = useState([]);
  const [editing, setEditing] = useState(null);

  const addEntry = (entry) => {
    setEntries([...entries, entry]);
  };

  const deleteEntry = (id) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  const updateEntry = (updatedEntry) => {
    setEntries(
      entries.map((entry) =>
        entry.id === updatedEntry.id ? updatedEntry : entry
      )
    );
    setEditing(null);
  };

  const cancelEdit = () => {
    setEditing(null);
  };

  return (
    <div>
      {editing ? (
        <EditEntry
          entry={editing}
          updateEntry={updateEntry}
          cancelEdit={cancelEdit}
        />
      ) : (
        <CreateEntry addEntry={addEntry} />
      )}
      <EntryList
        entries={entries}
        deleteEntry={deleteEntry}
        editEntry={setEditing}
      />
    </div>
  );
}

export default App;
