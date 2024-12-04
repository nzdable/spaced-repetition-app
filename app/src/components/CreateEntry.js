import React, { act, useState } from "react";

function CreateEntry({ addEntry }) {
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");
  const [activeRecallDate, setactiveRecallDate] = useState("");
  const [testDate, setTestDate] = useState("");
  const [reps, setReps] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (topic && description && activeRecallDate && testDate && reps) {
      addEntry({
        id: Date.now(),
        topic,
        description,
        activeRecallDate,
        testDate,
        reps,
      });
      setTopic("");
      setDescription("");
      setactiveRecallDate("");
      setTestDate("");
      setReps("");
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
        <p>Desired # of Reps</p>
        <input
          type="number"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
          required
        />
        <br></br>
        <br></br>
        <button type="submit">Add Entry</button>
      </form>
    </div>
  );
}

export default CreateEntry;
