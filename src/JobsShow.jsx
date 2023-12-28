export function JobsShow(props) {
  console.log(props);
  return (
    <div className="modal-user-info">
      <h1>Job Details</h1>
      <p>Company ID: {props.job.company_id}</p>
      <p>Job Title: {props.job.job_title}</p>
      <p>Location: {props.job.job_location}</p>
      <p>Job Type: {props.job.job_type}</p>
      <p>Salary: {props.job.job_salary_range}</p>
      <form>
        <div>
          Job Title: <input defaultValue={props.job.job_title} name="job-title" type="text" />
        </div>
        <div>
          Url: <input defaultValue={props.job.job_location} name="job-location" type="text" />
        </div>
        <div>
          Width: <input defaultValue={props.job.job_type} name="job-title" type="text" />
        </div>
        <div>
          Height: <input defaultValue={props.job.job_salary_range} name="job-salary-title" type="text" />
        </div>
        <button type="submit">Update Job</button>
      </form>
    </div>
  );
}
