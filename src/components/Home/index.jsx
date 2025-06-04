import React from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "./index.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="banner-img">
        <div className="title">
          <h3>
            Find the <span>Right Job</span> In the
            <br />
            <span> Right Companies</span>
          </h3>
          <div className="small-tagline">
            <p>Got fired..!! Get Ready to be hired</p>
          </div>
        </div>
        <div className="button" data-testid="btn">
          <Link to="/Jobs">Browse Jobs</Link>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="social-media" data-testid="images">
        <a href="https://www.linkedin.com/in/chandrub1128" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} color="#0e76a8" />
        </a>
        <a href="https://github.com/chandru-1104" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} color="#333" />
        </a>
        <a href="mailto:chandrub11062004@gmail.com">
          <FaEnvelope size={30} color="#d93025" />
        </a>
      </div>
    </>
  );
};

export default Home;
