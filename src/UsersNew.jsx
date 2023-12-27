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
          User Name: <input name="user_name" type="text" />
        </div>
        <div>
          User Email: <input name="user_email" type="text" />
        </div>
        <div>
          Password: <input name="password" type="password" />
        </div>
        <button type="submit">Create User</button>
      </form>
    </div>
  );
}
