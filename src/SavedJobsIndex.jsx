import React, { useState } from "react";

export function SavedJobsIndex(props) {
  const [searchTerm, setSearchTerm] = useState("");
  console.log("SavedJobsIndex props:", props);
  const [savedJobs, setSavedJobs] = useState([]);

  return (
    <div id="saved-jobs-index" className="container text-center">
      <h1>Your Saved Jobs</h1>
      Search Jobs:{" "}
      <input
        type="text"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        list="saved-job-titles"
      />
      <div className="row">
        {props.savedJobs.map((job) => (
          <div>
            <h4>{job.company.co_name}</h4>
            <h6>{job.company.co_location}</h6>
          </div>
        ))}
      </div>
    </div>
  );
}
