export function UsersShow(props) {
  return (
    <div>
      <h2>User Information</h2>
      <p>Name: {props.user.user_name}</p>
      <p>Url: {props.user.user_email}</p>
      {/* <p>Width: {props.user.width}</p>
      <p>Height: {props.user.height}</p>  */}
    </div>
  );
}
