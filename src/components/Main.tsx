import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import headshot from '../assets/images/headshot.jpg';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={headshot} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/nickpasternak11" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/nick-pasternak-b48388164/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
          <h1>Nick Pasternak</h1>
          <p>Machine Learning Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/nickpasternak11" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/nick-pasternak-b48388164/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;