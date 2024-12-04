import React, { act, useState } from "react";

function CreateEntry({ addEntry }) {
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");
  const [activeRecallDate, setactiveRecallDate] = useState("");
  const [testDate, setTestDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (topic && description && activeRecallDate) {
      addEntry({
        id: Date.now(),
        topic,
        description,
        activeRecallDate,
        testDate,
      });
      setTopic("");
      setDescription("");
      setactiveRecallDate("");
      setTestDate("");
    }
  };

  return (
    <div>
      <h2>Create New Entry</h2>
      <form onSubmit={handleSubmit}>
        <p>Topic</p>
        <input
          type="text"
          placeholder="Topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          required
        />
        <p>Description</p>
        <input
          type="text"
          placeholder="Description"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          required
        />
        <p>AR Date</p>
        <input
          type="date"
          value={activeRecallDate}
          onChange={(e) => setactiveRecallDate(e.target.value)}
          required
        />
        <p>Test Date</p>
        <input
          type="date"
          value={testDate}
          onChange={(e) => setTestDate(e.target.value)}
          required
        />
        <button type="submit">Add Entry</button>
      </form>
    </div>
  );
}

export default CreateEntry;
