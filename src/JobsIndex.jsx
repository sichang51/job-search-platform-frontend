import { useState } from "react";

export function JobsIndex(props) {
  const [searchTerm, setSearchTerm] = useState("");
  console.log(props);

  return (
    <div id="jobs-index" className="container text-center">
      <h1 className="alljobs-title">All Jobs</h1>
      <div>Search Jobs: </div>
      <input type="text" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} list="job-titles" />
      <datalist id="job-titles">
        {props.myJobs.map((job) => (
          <option key={job.id}>{job.job_title}</option>
        ))}
      </datalist>
      <div className="row">
        {props.myJobs
          .filter((job) => job.job_title.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((job) => (
            <div key={job.id} className="jobs col-lg-4 col-md-6 col-12 my-3">
              <div className="company-logo">
                <img src={job.company.co_logo} alt="logo" className="company-logo" width="100" height="125" />
                <h4>{job.job_title}</h4>
                <div>Company: {job.company.co_name}</div>
                <div>Location: {job.company.co_location}</div>
              </div>
              <button className="btn btn-secondary" onClick={() => props.onShowJob(job)}>
                More info
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
