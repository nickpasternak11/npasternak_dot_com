import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/nickpasternak11" target="_blank" rel="noreferrer"><GitHubIcon /></a>
        <a href="https://www.linkedin.com/in/nick-pasternak-b48388164/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
      </div>
    </footer>
  );
}

export default Footer;