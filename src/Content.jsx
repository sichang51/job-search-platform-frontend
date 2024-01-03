import axios from "axios";
import { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { JobsIndex } from "./JobsIndex";
import { JobsNew } from "./JobsNew";
import { JobsShow } from "./JobsShow";
import { UsersIndex } from "./UsersIndex";
import { UsersNew } from "./UsersNew";
import { UsersShow } from "./UsersShow";
import { Modal } from "./Modal";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Signup } from "./Signup";
import { Login } from "./Login";
// Import the new component
import { Homepage } from "./Homepage.jsx";
import JobCard from "./JobCard";
import SavedJobsIndex from "./SavedJobsIndex";

const getAuthToken = () => {
  return axios
    .get("http://localhost:3000/auth_token")
    .then((response) => response.data.auth_token)
    .catch((error) => {
      console.error("Error fetching authentication token:", error);
      return null;
    });
};

export function Content() {
  const [jobs, setJobs] = useState([]);
  const [isJobsShowVisible, setIsJobsShowVisible] = useState(false);
  const [currentJob, setCurrentJob] = useState({});
  // Users------------------------------------------
  const [users, setUsers] = useState([]);
  const [isUsersShowVisible, setIsUsersShowVisible] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  // Jobs Functions----------------------------------

  const handleIndexJobs = () => {
    console.log("handleIndexJobs");
    axios.get("http://localhost:3000/jobs.json").then((response) => {
      console.log(response.data);
      setJobs(response.data);
    });
  };

  const handleCreateJob = (params, successCallback) => {
    console.log("handleCreateJob", params);
    axios
      .post("http://localhost:3000/jobs.json", params)
      .then((response) => {
        setJobs([...jobs, response.data]);
        successCallback();
        window.location.href = "/jobs";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleShowJob = (job) => {
    console.log("handleShowJob", job);
    setIsJobsShowVisible(true);
    setCurrentJob(job);
  };

  const handleUpdateJob = (id, params, successCallback) => {
    console.log("handleUpdateJob", params);
    axios.patch(`http://localhost:3000/jobs/${id}.json`, params).then((response) => {
      setJobs(
        jobs.map((job) => {
          if (job.id === response.data.id) {
            return response.data;
          } else {
            return job;
          }
        })
      );
      successCallback();
      handleClose();
    });
  };

  const handleDestroyJob = (job) => {
    console.log("handleDestroyJob", job);
    axios.delete(`http://localhost:3000/jobs/${job.id}.json`).then((response) => {
      setJobs(jobs.filter((p) => p.id !== job.id));
      handleClose();
    });
  };

  // Users Functions----------------------------------------------------
  const handleIndexUsers = () => {
    console.log("handleIndexUsers");
    axios.get("http://localhost:3000/users.json").then((response) => {
      console.log(response.data);
      setUsers(response.data);
    });
  };

  const handleCreateUser = (params, successCallback) => {
    console.log("handleCreateUser", params);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log("Create user success:", response.data);
        setUsers([...users, response.data]);
        successCallback();
      })
      .catch((error) => {
        console.error("Create user error:", error);

        console.log("Request Config:", error.config);

        if (error.response) {
          console.log("Error Response Data:", error.response.data);
          console.log("Error Response Status:", error.response.status);
          console.log("Error Response Headers:", error.response.headers);
        }
      });
  };

  const handleShowUser = (id, user) => {
    console.log("handleShowUser", user);
    axios.get(`http://localhost:3000/current_user.json`).then((response) => {
      // setIsUsersShowVisible(true);
      setCurrentUser(response.data);
    });
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsUsersShowVisible(false);
    setIsJobsShowVisible(false);
  };

  const handleUpdateUser = (id, params, successCallback) => {
    console.log("handleUpdateUser", params);
    axios.patch(`http://localhost:3000/users/${id}.json`, params).then((response) => {
      setUsers(
        users.map((user) => {
          if (user.id === response.data.id) {
            return response.data;
          } else {
            return user;
          }
        })
      );
      successCallback();
      handleClose();
    });
  };

  const handleDestroyUser = (user) => {
    console.log("handleDestroyUser", user);
    axios.delete(`http://localhost:3000/users/${user.id}.json`).then((response) => {
      setUsers(users.filter((u) => u.id !== user.id));
    });
  };
  // cart----------------------

  // session--------------------

  useEffect(handleIndexJobs, []);
  useEffect(handleIndexUsers, []);
  useEffect(handleShowUser, []);

  return (
    <div>
      <Routes>
        <Route path="/home" element={<JobsNew onCreateJob={handleCreateJob} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/jobs/new"
          element={localStorage.jwt ? <JobsNew onCreateJob={handleCreateJob} /> : <Navigate to="/login" replace />}
        />

        {/* <Route path="/jobs/new" element={<JobsNew onCreateJob={handleCreateJob} />} /> */}
        {/* used for the homepage below */}
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/" element={<JobsIndex myJobs={jobs} onShowJob={handleShowJob} />} /> */}
        <Route
          path="/jobs"
          element={
            <JobsIndex
              myJobs={jobs}
              isJobsShowVisible={isJobsShowVisible}
              onShowJob={handleShowJob}
              onClose={handleClose}
            />
          }
        />
        <Route path="/signup" element={<UsersNew onCreateUser={handleCreateUser} />} />

        <Route
          path="/users"
          element={
            localStorage.jwt ? (
              <UsersShow user={currentUser} onUpdateUser={handleUpdateUser} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* <Route
          path="/carted_jobs"
          element={
            localStorage.jwt ? <JobCard job={currentJob} onSaveJobs={handleSave} /> : <Navigate to="/login" replace />
          }
        /> */}
      </Routes>
      <Modal className="job-modal" show={isJobsShowVisible} onClose={handleClose}>
        <JobsShow job={currentJob} onUpdateJob={handleUpdateJob} onDestroyJob={handleDestroyJob} />
      </Modal>
      <Modal className="user-modal" show={isUsersShowVisible} onClose={handleClose}>
        <UsersShow user={currentUser} onUpdateUser={handleUpdateUser} onDestroyUser={handleDestroyUser} />
      </Modal>
    </div>
  );
}
