import React from "react";

export function Footer() {
  return (
    <div className="footer-wrapper">
      <footer className="page-footer font-small blue pt-4">
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <h5 className="footer-logo-name">Job Hound</h5>
              <img
                className="footer-logo"
                src="https://static.vecteezy.com/system/resources/thumbnails/010/789/780/small/camping-illustration-isolated-on-transparent-background-png.png"
              />
            </div>

            <hr className="clearfix w-100 d-md-none pb-0" />

            <div className="col-md-3 mb-md-0 mb-3">
              <ul className="list-unstyled">
                <li>
                  <a href="#!">About Us</a>
                </li>
                <li>
                  <a href="#!">Employers Account</a>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
              <ul className="list-unstyled">
                <li>
                  <a href="#!">Help / Contact Us</a>
                </li>
                <li>
                  <a href="#!">Terms of Use</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3">
          Copyright © 2023, Job Found LLC, "Job Hound" and logo are registered trademarks of Job Hound LLC.
        </div>
      </footer>
    </div>
  );
}
