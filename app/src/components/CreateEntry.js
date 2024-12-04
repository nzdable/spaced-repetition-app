import React, { useState } from "react";

function CreateEntry({ addEntry }) {
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");
  const [activeRecallDate, setActiveRecallDate] = useState("");
  const [activeRecallTime, setActiveRecallTime] = useState("");
  const [testDate, setTestDate] = useState("");
  const [testTime, setTestTime] = useState("");
  const [reps, setReps] = useState("");
  const [schedule, setSchedule] = useState([]);

  const calculateSchedule = () => {
    if (!activeRecallDate || !testDate || reps <= 0) return [];

    const startTime = activeRecallTime || "00:00";
    const endTime = testTime || "00:00";

    try {
      const start = new Date(`${activeRecallDate}T${startTime}`);
      const end = new Date(`${testDate}T${endTime}`);
      const totalDurationMs = end - start; // Duration in milliseconds

      if (totalDurationMs <= 0) {
        alert(
          "Test date and time must be later than Active Recall date and time."
        );
        return [];
      }

      const reviewDates = [];

      const formatTimeTo12hr = (date) => {
        return date.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        });
      };

      if (totalDurationMs < 24 * 60 * 60 * 1000) {
        // Less than 24 hours: use hours
        const intervals = totalDurationMs / (reps - 1);
        for (let i = 0; i < reps; i++) {
          const nextDate = new Date(start.getTime() + i * intervals);
          const formattedTime = formatTimeTo12hr(nextDate);
          reviewDates.push(
            `${nextDate.toISOString().slice(0, 10)} ${formattedTime}`
          ); // Format: YYYY-MM-DD hh:mm AM/PM
        }
      } else {
        // 24 hours or more: use days
        const totalDurationDays = totalDurationMs / (1000 * 60 * 60 * 24);
        const intervals = totalDurationDays / (reps - 1);
        for (let i = 0; i < reps; i++) {
          const nextDate = new Date(start);
          nextDate.setDate(start.getDate() + i * intervals);
          const formattedTime = formatTimeTo12hr(nextDate);
          reviewDates.push(
            `${nextDate.toISOString().slice(0, 10)} ${formattedTime}`
          ); // Format: YYYY-MM-DD hh:mm AM/PM
        }
      }

      return reviewDates;
    } catch (error) {
      console.error("Error calculating schedule:", error);
      alert("Invalid date or time format. Please check your inputs.");
      return [];
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSchedule = calculateSchedule(); // Get schedule directly
    addEntry({
      id: Date.now(),
      topic,
      description,
      activeRecallDate: `${activeRecallDate} ${activeRecallTime}`,
      testDate: `${testDate} ${testTime}`,
      reps,
      schedule: newSchedule, // Include calculated schedule
    });
    setSchedule(newSchedule); // For display in the form
    // Clear form fields
    setTopic("");
    setDescription("");
    setActiveRecallDate("");
    setActiveRecallTime("");
    setTestDate("");
    setTestTime("");
    setReps("");
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
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <p>AR Date</p>
        <input
          type="date"
          value={activeRecallDate}
          onChange={(e) => setActiveRecallDate(e.target.value)}
          required
        />
        <p>AR Time</p>
        <input
          type="time"
          value={activeRecallTime}
          onChange={(e) => setActiveRecallTime(e.target.value)}
          required
        />
        <p>Test Date</p>
        <input
          type="date"
          value={testDate}
          onChange={(e) => setTestDate(e.target.value)}
          required
        />
        <p>Test Time</p>
        <input
          type="time"
          value={testTime}
          onChange={(e) => setTestTime(e.target.value)}
          required
        />
        <p>Desired # of Reps</p>
        <input
          type="number"
          value={reps}
          min="1"
          onChange={(e) => setReps(e.target.value)}
          required
        />
        <br />
        <br />
        <button type="submit">Add Entry</button>
      </form>

      {schedule.length > 0 && (
        <div>
          <h3>Spaced Repetition Schedule:</h3>
          <ul>
            {schedule.map((date, index) => (
              <li key={index}>{`Review ${index + 1}: ${date}`}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default CreateEntry;
