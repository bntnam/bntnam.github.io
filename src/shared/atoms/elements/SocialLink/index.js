import React from "react";

import { ExternalLink } from "./style";

const SocialLink = ({ url, icon, text }) => (
  <li>
    <ExternalLink
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`icon fa-${icon}`}
    >
      <span className="label">{text}</span>
    </ExternalLink>
  </li>
);

export default SocialLink;
