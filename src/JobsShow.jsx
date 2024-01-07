export function JobsShow(props) {
  console.log(props, "jobs show page alert");

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateJob(props.job.id, params, () => event.target.reset());
  };

  const handleSave = () => {
    props.onSaveJob(props.job);
  };

  const handleClick = () => {
    props.onRemove(props.job.id);
  };

  return (
    <div className="modal-user-info">
      <h1>Job Details</h1>
      <img src={props.job.company.co_logo} alt="logo" className="company-logo" width="100" height="125" />
      <p>Company ID: {props.job.company_id}</p>
      <p>Company Name: {props.job.co_name}</p>
      <p>Job Title: {props.job.job_title}</p>
      <p>Job Description: {props.job.job_description}</p>
      <p>Location: {props.job.job_location}</p>
      <p>Job Type: {props.job.job_type}</p>
      <p>Salary: {props.job.job_salary_range}</p>
      {/* <form onSubmit={handleSubmit}>
        <div>
          Job Title: <input defaultValue={props.job.job_title} name="job-title" type="text" />
        </div>
        <div>
          Location: <input defaultValue={props.job.job_location} name="job-location" type="text" />
        </div>
        <div>
          Job Title: <input defaultValue={props.job.job_type} name="job-title" type="text" />
        </div>
        <div>
          Salary Range: <input defaultValue={props.job.job_salary_range} name="job-salary-title" type="text" />
        </div> */}
      <button onClick={handleSave} className="modal-SaveJob-button" type="submit">
        Save Job
      </button>
      {/* <div className="modal-button-container">
          <button className="modal-update-button" type="submit">
            Update Job
          </button>
          <button onClick={handleClick} className="modal-remove-button" type="button">
            Remove Job
          </button>
        </div> */}
      {/* </form> */}
    </div>
  );
}
