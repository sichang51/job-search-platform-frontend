import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <nav>
        <Link to="/home">Home</Link> | <Link to="/community">Community</Link> | <Link to="/jobs">Jobs</Link> |{" "}
        <Link to="/companies">Companies</Link> | <Link to="/signup">Signup</Link> | <Link to="/login">Login</Link>
      </nav>
    </header>
  );
}
