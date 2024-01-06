export function SavedJobsShow(props) {
  console.log(props, "SaveJobsShow page alert");

  const handleClick = () => {
    props.onRemove(props.job.id);
  };

  return (
    <div className="modal-savedjob-info">
      <h1>Job Details</h1>
      <img src={props.job.company.co_logo} alt="logo" className="company-logo" width="100" height="125" />
      <p>Company ID: {props.job.company.id}</p>
      <p>Company Name: {props.job.company.co_name}</p>
      <p>Job Title: {props.job.job.job_title}</p>
      <p>Job Description: {props.job.job.job_description}</p>
      <p>Location: {props.job.job.job_location}</p>
      <p>Job Type: {props.job.job.job_type}</p>
      <p>Salary: {props.job.job.job_salary_range}</p>

      <button onClick={handleClick} className="modal-remove-button" type="submit">
        Remove Job
      </button>
    </div>
  );
}
