import React, { useState, useEffect } from "react";
import axios from "axios";

function ContactUs() {
  return (
    <footer className="footer">
      {/* Big Blue Header Section */}
      <div className="big-blue-header">
        {/* <h5>4536+ Jobs listed</h5>
        <h3>Find your Dream Job</h3>
        <p>We provide online instant cash loans with quick approval that suit your term length</p> */}
        <div className="slider_btn"></div>
      </div>

      {/* Header Component */}
      {/* First Blank Section */}
      <div className="homepage-section-1 mb-4 pt-4 pb-4">
        <h2 className="hp-title">{/* <b>Job Hound</b> */}</h2>
        <h6 className="contactus-title">
          <b>Contact us</b>
        </h6>
        <p className="hp-co-text">
          <b>
            Our aim is to provide best-in-class recruitment tools, processes, and automation in one complete solution.
          </b>
        </p>
        <div className="contactus-image-container">
          <img
            src="https://libraagencyco.com/wp-content/uploads/2022/07/contact-us-vector.png"
            alt=""
            className="contact-us-img"
          />
        </div>
      </div>

      <div className="homepage-section mb-4">{/* Add any content or leave it empty */}</div>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="contactus-logo-img-title-container">
              <img
                className="contactus-logo-img"
                src="https://static.vecteezy.com/system/resources/thumbnails/010/789/780/small/camping-illustration-isolated-on-transparent-background-png.png"
              />

              <h4>
                <b className="contactus-logo-title">Job Hound</b>
              </h4>
            </div>
          </div>
          <div className="col-md-3"></div>
          <div className="col-md-3">
            <h4>
              <b>Contact</b>
            </h4>
            <div className="contact-info-section">
              <ul className="list-unstyled">
                <li>
                  <b>Email:</b> example@example.com
                </li>
                <li>
                  <b>Phone:</b> (123) 456-7890
                </li>
                <br></br>
                <li>
                  <b>Address:</b> 555 Test Ave, Los Angeles, CA 55555
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="copyright">&copy; 2024 Job Hound. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default ContactUs; // Make sure to have the export default statement
