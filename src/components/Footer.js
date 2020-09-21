import React, { memo } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FormattedMessage } from "react-intl";



const Footer = () => {
  return (
    <footer className="py-4">
      <p className="mb-0 text-center">
      <FormattedMessage id="developed" /> {" "}
         <a target="_blank" rel="noopener noreferrer">Ritesh Suryavanshi</a> <span>&nbsp; </span>
        {"   "} | <span>&nbsp;</span> <a href="https://github.com/rksury/ReactWeb-Covid.git" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub}/></a>
          <span>&nbsp; All rights reserved ® 2020</span>
      </p>
    </footer>
  );
};

export default memo(Footer);
