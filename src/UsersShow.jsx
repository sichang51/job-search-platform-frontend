import { useState } from "react";

export function UsersShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateUser(props.user.id, params);
    event.target.reset();
  };

  const handleClick = () => {
    props.onDestroyUser(props.user);
  };
  console.log(props);

  return (
    <div className="user-profile">
      <h2>Your Profile</h2>
      <p>
        Photo:{" "}
        <img
          src={props.user.user_photo_url}
          alt="User Photo"
          style={{ width: "150px", height: "150px", borderRadius: "50%", objectFit: "cover" }}
        />
      </p>
      <p>Name: {props.user.user_name}</p>
      <p>Email: {props.user.user_email}</p>
      <p>Phone Number: {props.user.user_phn_num}</p>
      <p>Bio: {props.user.user_bio}</p>
      <p>LinkedIn URL: {props.user.user_linkedin_url}</p>
      <p>Twitter Handle: {props.user.user_twitter_handle}</p>
      <p>Website URL: {props.user.user_website_url}</p>
      <p>Resume URL: {props.user.user_resume_url}</p>
      <p>Github URL: {props.user.user_github_url}</p>

      <button className="update-profile-button" onClick={() => props.onShowUser(props.user)}>
        Update Profile
      </button>

      <form onSubmit={handleSubmit}>
        <div className="modal-update-section">
          <div>
            Name: <input defaultValue={props.user.user_name} name="name" type="string" />
          </div>
          <div>
            Email: <input defaultValue={props.user.user_email} name="email" type="string" />
          </div>
          <div>
            Phone Number: <input defaultValue={props.user.user_phn_num} name="phone number" type="string" />
          </div>
          <div>
            Bio: <input defaultValue={props.user.user_bio} name="bio" type="text" />
          </div>
          <div>
            Linkedin URL: <input defaultValue={props.user.user_linkedin_url} name="linkedin url" type="string" />
          </div>
          <div>
            Twitter Handle: <input defaultValue={props.user.user_twitter_handle} name="twitter handle" type="string" />
          </div>
          <div>
            Website URL: <input defaultValue={props.user.user_website_url} name="website url" type="string" />
          </div>
          <div>
            Resume URL: <input defaultValue={props.user.user_resume_url} name="resume url" type="string" />
          </div>
          <div>
            GitHub URL: <input defaultValue={props.user.user_github_url} name="github url" type="string" />
          </div>
          <div>
            Photo URL: <input defaultValue={props.user.user_photo_url} name="photo url" type="string" />
          </div>
        </div>
        <div className="modal-button-container">
          <button className="modal-update-button" type="submit">
            Update User
          </button>
          <button className="modal-destroy-button" onClick={handleClick}>
            Destroy User
          </button>
        </div>
      </form>
    </div>
  );
}
