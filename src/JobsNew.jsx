export function JobsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateJob(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Job</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Job Name: <input name="job_title" type="string" />
        </div>
        <div>
          Job Description: <input name="job_description" type="text" />
        </div>
        <div>
          Job URL: <input name="job_url" type="string" />
        </div>
        <div>
          Job Type: <input name="job_type" type="string" />
        </div>
        <div>
          Years Experience: <input name="job_yrs_exp" type="string" />
        </div>
        <div>
          Job Location: <input name="job_location" type="string" />
        </div>
        <div>
          Salary Range: <input name="job_salary_range" type="string" />
        </div>
        <button type="submit">Create Job</button>
      </form>
    </div>
  );
}
