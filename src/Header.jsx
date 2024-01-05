import { LogoutLink } from "./LogoutLink";
import { Link } from "react-router-dom";

export function Header() {
  const headerImageUrl =
    "https://static.vecteezy.com/system/resources/thumbnails/010/789/780/small/camping-illustration-isolated-on-transparent-background-png.png";

  return (
    <header>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#407c87" }} data-bs-theme="dark">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <Link to="/" className="navbar-brand logo-container d-flex align-items-center">
            <div className="d-flex align-items-center">
              <img src={headerImageUrl} alt="Header" className="header-image me-3" />
              <div className="logo-text">
                <h4>Job Hound</h4>
              </div>
            </div>
          </Link>

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
            <ul className="navbar-nav ms-auto me-0">
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
                  Post a Job
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
