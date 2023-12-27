export function UsersShow(props) {
  return (
    <div>
      <h2>User Information</h2>
      <p>Name: {props.user.user_name}</p>
      <p>Email: {props.user.user_email}</p>
      <p>Phone Number: {props.user.user_phn_num}</p>
      <p>Bio: {props.user.user_bio}</p>
      <p>LinkedIn URL: {props.user.user_linkedin_url}</p>
      <p>Twitter Handle: {props.user.user_twitter_handle}</p>
      <p>Website URL: {props.user.user_website_url}</p>
      <p>Resume URL: {props.user.user_resume_url}</p>
      <p>Github URL: {props.user.user_github_url}</p>
      <p>Photo_URL: {props.user.user_photo_url}</p>
    </div>
  );
}
