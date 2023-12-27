import axios from "axios";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { UsersIndex } from "./UsersIndex";
import { UsersNew } from "./UsersNew";
import { UsersShow } from "./UsersShow";
import { Modal } from "./Modal";
// import { UsersRoute } from "./UsersRoute";

export function Content() {
  const [users, setUsers] = useState([]);
  const [isUsersShowVisible, setIsUsersShowVisible] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

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

  const handleShowUser = (user) => {
    console.log("handleShowUser", user);
    setIsUsersShowVisible(true);
    setCurrentUser(user);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsUsersShowVisible(false);
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

  useEffect(handleIndexUsers, []);

  return (
    <div>
      <Routes>
        <Route path="/signup" element={<UsersNew onCreateUser={handleCreateUser} />} />
        <Route
          path="/users"
          element={
            <UsersIndex
              users={users}
              isUsersShowVisible={isUsersShowVisible}
              currentUser={currentUser}
              onClose={handleClose}
              onCreateUser={handleCreateUser}
              onShowUser={handleShowUser}
              onUpdateUser={handleUpdateUser}
              onDestroyUser={handleDestroyUser}
            />
          }
        />
      </Routes>

      <Modal show={isUsersShowVisible} onClose={handleClose}>
        <UsersShow user={currentUser} onUpdateUser={handleUpdateUser} onDestroyuser={handleDestroyUser} />
      </Modal>
    </div>
  );
}
