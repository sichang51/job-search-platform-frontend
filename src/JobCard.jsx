// JobCard.jsx
import React from "react";

const JobCard = ({ job, onSave }) => {
  const handleSave = () => {
    onSave(job);
  };

  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <p>{job.company}</p>
      {/* Other job details */}
      <button onClick={handleSave}>Save Job</button>
    </div>
  );
};

export default JobCard;
