// SavedJobsIndex.jsx
import React from "react";

const SavedJobsIndex = ({ savedJobs, onRemove }) => {
  return (
    <div>
      <h2>Saved Jobs</h2>
      <ul>
        {savedJobs.map((job) => (
          <li key={job.id}>
            <strong>{job.title}</strong> - {job.company} <button onClick={() => onRemove(job.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SavedJobsIndex;
