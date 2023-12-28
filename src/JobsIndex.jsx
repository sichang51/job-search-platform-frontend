export function JobsIndex(props) {
  const { jobs = [], onShowJob } = props;

  return (
    <div>
      {/* <h1>All Jobs</h1> */}
      {jobs.map((job) => (
        <div key={job.id}>
          <h2>{job.job_title}</h2>
          <h3>{job.company_id}</h3>
          <h3>{job.job_description}</h3>
          <h3>{job.job_location}</h3>
          <button onClick={() => props.onShowJob(job)}>More Info</button>
        </div>
      ))}
    </div>
  );
}
