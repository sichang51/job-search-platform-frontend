import { LogoutLink } from "./LogoutLink";
import { Link } from "react-router-dom";

export function Header() {
  const headerImageUrl =
    "https://static.vecteezy.com/system/resources/thumbnails/010/789/780/small/camping-illustration-isolated-on-transparent-background-png.png";

  return (
    <header>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#407c87" }} data-bs-theme="dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand logo-container">
            <img src={headerImageUrl} alt="Header" className="header-image" />
            <div className="logo-text">
              <h4>Job Hound</h4>
            </div>
            <div>
              <h6>Providing employment solutions for everyone </h6>
            </div>
          </Link>
          {/* <a className="navbar-brand" href="#">
            Job Hound
          </a> */}

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/jobs">
                  All Jobs
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/users">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/saved-jobs">
                  Saved Jobs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/jobs/new">
                  Add New Job
                </Link>
              </li>
              {localStorage.jwt === undefined ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signup">
                      Signup
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <LogoutLink />
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
