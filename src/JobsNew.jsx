import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";

export function JobsNew(props) {
  const [loading, setLoading] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();

    const params = new FormData(event.target);
    setLoading(true);

    props.onCreateJOb(params, () => {
      setLoading(false);
      event.target.reset();
    });
    // props.onCreateJob(params, () => event.target.reset());
  };

  // Conditional rendering based on user login status
  return (
    <div>
      <div>
        <h2>New Job</h2>
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
    </div>
  );
}
