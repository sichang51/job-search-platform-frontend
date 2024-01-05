import { SavedJobsShow } from "./SavedJobsShow";
import { Modal } from "./Modal";

import { useState } from "react";

export function SavedJobsIndex(props) {
  const [searchTerm, setSearchTerm] = useState("");
  console.log("SavedJobsIndex props:", props);
  const [currentSavedJob, setCurrentSavedJob] = useState({});
  const [isSaveJobsShowVisible, setIsSaveJobsShowVisible] = useState(false);

  const handleShowJob = (job) => {
    console.log("handleShowJob", job);
    setIsSaveJobsShowVisible(true);
    setCurrentSavedJob(job);
  };
  const handleClose = () => {
    console.log("handleClose");
    setIsSaveJobsShowVisible(false);
  };

  return (
    <div id="saved-jobs-index" className="container text-center">
      <h1>Your Saved Jobs</h1>
      Search Your Jobs:{" "}
      <input
        type="text"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        list="saved-job-titles"
      />
      <datalist id="saved-job-titles">
        {props.savedJobs.map((job) => (
          <option key={job.id}>{job.job_title}</option>
        ))}
      </datalist>
      <div className="row">
        {props.savedJobs
          .filter((job) => job.job.job_title.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((job) => (
            <div key={job.id} className="jobs col-lg-4 col-md-6 col-12 my-3">
              <div className="company-logo">
                <img src={job.company.co_logo} alt="logo" className="company-logo" width="100" height="125" />
                <div>{job.company.co_name}</div>
                <div>{job.company.co_location}</div>
              </div>
              <button className="btn btn-secondary" onClick={() => handleShowJob(job)}>
                More info
              </button>
            </div>
          ))}
      </div>
      <Modal className="saved-job-modal" show={isSaveJobsShowVisible} onClose={handleClose}>
        <SavedJobsShow job={currentSavedJob} />
      </Modal>
    </div>
  );
}
