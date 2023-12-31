import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        localStorage.setItem("flashMessage", "User created!");
        window.location.href = "/login"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="signup">
      <h1 className="signup-title">Signup</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div className="user-signup-container">
          <div>
            Name: <input name="user_name" type="text" />
          </div>
          <div>
            Email: <input name="user_email" type="email" />
          </div>
          <div>
            Password: <input name="password" type="password" />
          </div>
          <div>
            Password confirmation: <input name="password_confirmation" type="password" />
          </div>
          <button className="button-signup" type="submit">
            Signup
          </button>
        </div>
      </form>
    </div>
  );
}
