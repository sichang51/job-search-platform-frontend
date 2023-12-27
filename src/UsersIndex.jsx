export function UsersIndex(props) {
  return (
    <div>
      <h1>All users</h1>
      {props.users.map((user) => (
        <div key={user.id}>
          <h2>
            {user.user_fname} {user.user_lname}
          </h2>
          <h2>{user.user_email}</h2>
          <h2>{user.password}</h2>
          <button onClick={() => props.onShowUser(user)}>More Info</button>
        </div>
      ))}
    </div>
  );
}
