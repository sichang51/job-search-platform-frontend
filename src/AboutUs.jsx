import React, { useState, useEffect } from "react";
import axios from "axios";

function AboutUs() {
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
        <h6 className="hp-line">
          <b>Looking to find and hire great talent?</b>
        </h6>
        <p className="hp-co-text">
          <b>
            Our aim is to provide best-in-class recruitment tools, processes, and automation in one complete solution.
          </b>
        </p>
        <div className="workers-image-container">
          <img src="https://www.pngmart.com/files/About-Us-PNG-Free-Download.png" alt="" className="culture-image" />
        </div>
      </div>

      {/* Second Blank Section */}
      <div className="homepage-section-2">{/* Add any content or leave it empty */}</div>

      {/* Third News API Section */}
      <div className="homepage-section mb-4"></div>

      {/* Fourth Blank Section */}
      <div className="homepage-section mb-4">{/* Add any content or leave it empty */}</div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>
              <b>Job Hound</b>
            </h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, velit vel mattis euismod.</p>
          </div>
          <div className="col-md-3"></div>
          <div className="col-md-3">
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li>
                <b>Email:</b> example@example.com
              </li>
              <li>
                <b>Phone:</b> (123) 456-7890
              </li>
              <li>
                <b>Address:</b> 123 Main St, City, Country
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Job Hound. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default AboutUs; // Make sure to have the export default statement
