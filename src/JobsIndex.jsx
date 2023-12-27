export function JobsIndex(props) {
  return (
    <div>
      <h1>All Jobs</h1>
      {props.jobs.map((job) => (
        <div key={job.id}>
          <h2>{job.job_name}</h2>
          <h3>{job.job_description}</h3>
          <h3>{job.job_location}</h3>
        </div>
      ))}
    </div>
  );
}
