import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      {/* <nav>
        <Link to="/home">Home</Link> | <Link to="/community">Community</Link> | <Link to="/jobs">Jobs</Link> |{" "}
        <Link to="/companies">Companies</Link> | <Link to="/signup">Signup</Link> | <Link to="/login">Login</Link>
      </nav> */}

      <div class="wrapper">
        <nav id="sidebar">
          <div class="sidebar-header">
            <h3>
              <b>JOB HOUND</b>
            </h3>
          </div>

          <ul class="list-unstyled components">
            <p>Dummy Heading</p>
            <li class="active">
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/community">Community</Link>
            </li>
            <li>
              <Link to="/jobs">Jobs</Link>
            </li>
            <li>
              <Link to="/companies">Companies</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>

          <ul class="list-unstyled CTAs">
            <li>
              <a href="https://bootstrapious.com/tutorial/files/sidebar.zip" class="download">
                Download source
              </a>
            </li>
            <li>
              <a href="https://bootstrapious.com/p/bootstrap-sidebar" class="article">
                Back to article
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
