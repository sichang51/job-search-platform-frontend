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
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Terms from "./Terms";
import { SavedJobsIndex } from "./SavedJobsIndex";
import { SavedJobsShow } from "./SavedJobsShow";

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
  // Jobs -----------------------------------------
  const [jobs, setJobs] = useState([]);
  const [isJobsShowVisible, setIsJobsShowVisible] = useState(false);
  const [currentJob, setCurrentJob] = useState({});
  // Users------------------------------------------
  const [users, setUsers] = useState([]);
  const [isUsersShowVisible, setIsUsersShowVisible] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  // SavedJobs------------------------------------------
  const [savedJobs, setSavedJobs] = useState([]);
  const [isSaveJobsShowVisible, setIsSaveJobsShowVisible] = useState(false);
  const [currentSavedJob, setCurrentSavedJob] = useState([]);

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

  const handleShowUser = () => {
    axios.get(`http://localhost:3000/current_user.json`).then((response) => {
      console.log(response.data, "hello");
      setCurrentUser(response.data);
      setSavedJobs(response.data.carted_jobs);
      setIsUsersShowVisible(false);
    });
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsUsersShowVisible(false);
    setIsJobsShowVisible(false);
  };

  const handleUpdateUser = (id, params) => {
    console.log("handleUpdateUser", params);
    axios
      .patch(`http://localhost:3000/users/${id}.json`, params)
      .then((response) => {
        console.log("User updated successfully:", response.data);
        setUsers(
          users.map((user) => {
            if (user.id === response.data.id) {
              return response.data;
            } else {
              return user;
            }
          })
        );
        setCurrentUser(response.data);
        setIsUsersShowVisible(false);
        handleClose();
        // force refresh-----------------------------
        location.reload();
      })
      .catch((error) => {
        console.error("Error updating user:", error);
        console.log("Detailed error response:", error.response); // Log detailed error response
      });
  };

  const handleDestroyUser = (user) => {
    axios.delete(`http://localhost:3000/users/${user.id}.json`).then((response) => {
      console.log(response.data);
      setUsers(users.filter((r) => r.id !== user.id));
      handleClose();
    });
  };
  // cart----------------------

  const handleSaveJob = (job) => {
    const updatedSavedJobs = [...savedJobs, job];
    setSavedJobs(updatedSavedJobs);
    localStorage.setItem("savedJobs", JSON.stringify(updatedSavedJobs));

    // Include company_id in the data
    const data = {
      job_id: job.id,
      company_id: job.company.id, // Make sure this property exists in your job object
    };

    // Post the saved job to the server
    axios
      .post("http://localhost:3000/carted_jobs.json", data)
      .then((response) => {
        console.log("Job saved successfully to server:", response.data);
      })
      .catch((error) => {
        console.error("Error saving job to server:", error);
      });
  };

  // session--------------------

  useEffect(handleIndexJobs, []);
  useEffect(handleIndexUsers, []);
  useEffect(handleShowUser, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<JobsNew onCreateJob={handleCreateJob} />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/signup" element={<UsersNew onCreateUser={handleCreateUser} />} /> */}
        <Route path="/login" element={<Login />} />
        <Route
          path="/jobs/new"
          element={localStorage.jwt ? <JobsNew onCreateJob={handleCreateJob} /> : <Navigate to="/login" replace />}
        />

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

        <Route
          path="/users"
          element={
            localStorage.jwt ? (
              <UsersIndex
                user={currentUser}
                onShowUser={handleShowUser}
                onUpdateUser={handleUpdateUser}
                onDestroyUser={handleDestroyUser}
              />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        <Route
          path="/saved-jobs"
          element={
            localStorage.jwt ? (
              <SavedJobsIndex savedJobs={savedJobs} onSaveJob={handleSaveJob} onUpdateJob={handleUpdateJob} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>

      <Modal className="job-modal" show={isJobsShowVisible} onClose={handleClose}>
        <JobsShow
          job={currentJob}
          onShowJob={handleShowJob}
          onUpdateJob={handleUpdateJob}
          onDestroyJob={handleDestroyJob}
          onSaveJob={handleSaveJob}
        />
      </Modal>

      <Modal className="user-modal" show={isUsersShowVisible} onClose={handleClose}>
        <UsersShow
          user={currentUser}
          onShowUser={handleShowUser}
          onUpdateUser={handleUpdateUser}
          onDestroyUser={handleDestroyUser}
        />
      </Modal>
    </div>
  );
}
