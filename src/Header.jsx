import { Link } from "react-router-dom";

export function Header(props) {
  function closeNav() {
    document.getElementById("sidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
  return (
    <header>
      {props.show ? (
        <div className="wrapper">
          <nav id="sidebar">
            <div className="sidebar-header">
              <h3>
                <b>JOB HOUND</b>
              </h3>
            </div>

            <ul className="list-unstyled components">
              <p>Dummy Heading</p>
              <li className="active">
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

            <ul className="list-unstyled CTAs">
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
      ) : (
        <></>
      )}
    </header>
  );
}
