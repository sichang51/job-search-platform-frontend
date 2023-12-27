export function UsersShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateUser(props.user.id, params, () => event.target.reset());
  };

  return (
    <div>
      <h2>User Information</h2>
      <p>
        First Name: {props.user.user_fname} Last Name: {props.user.user_lname}
      </p>
      <p>Email: {props.user.user_email}</p>
      <p>Phone Number: {props.user.user_phn_num}</p>
      <p>Bio: {props.user.user_bio}</p>
      <p>LinkedIn URL: {props.user.user_linkedin_url}</p>
      <p>Twitter Handle: {props.user.user_twitter_handle}</p>
      <p>Website URL: {props.user.user_website_url}</p>
      <p>Resume URL: {props.user.user_resume_url}</p>
      <p>Github URL: {props.user.user_github_url}</p>
      <p>Photo_URL: {props.user.user_photo_url}</p>
      <form onSubmit={handleSubmit}>
        <div>
          First Name: <input defaultValue={props.user.user_fname} name="name" type="string" />
          Last Name: <input defaultValue={props.user.user_lname} name="name" type="string" />
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
      </form>
    </div>
  );
}
