export function UsersNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateUser(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          User First Name: <input name="user_fname" type="string" />
        </div>
        <div>
          User Last Name: <input name="user_lname" type="string" />
        </div>
        <div>
          User Email: <input name="user_email" type="string" />
        </div>
        <div>
          Password: <input name="password" type="password" />
        </div>
        <button type="submit">Create User</button>
      </form>
    </div>
  );
}
