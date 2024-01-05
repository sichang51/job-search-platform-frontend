export function UsersIndex(props) {
  return (
    <div>
      <h1>All users</h1>
      {props.users.map((user) => (
        <div key={user.id}>
          <h2>{user.user_name}</h2>
          <h2>{user.user_email}</h2>
          <h2>{user.password}</h2>
          <div className="more-info-button-container">
            <button onClick={() => props.onShowUser(user)} className="all-jobs-info-button">
              <b className="more-info-text">More Info</b>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
