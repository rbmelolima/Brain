import React from 'react';
import { FiGithub, FiMail, FiLinkedin } from 'react-icons/fi';
import './style.scss';

export default function Footer () {
  return (
    <footer>
      <div className="links">
        <a href="https://github.com/rbmelolima" title="Ir para github" target="blank">
          <FiGithub size={ 24 } color="000000" />
        </a>
        <a href="mailto:rbmelolima@gmail.com" title="Ir para email" target="blank">
          <FiMail size={ 24 } color="000000" />
        </a>
        <a href="https://www.linkedin.com/in/rbmelolima/" title="Ir para linkedin" target="blank">
          <FiLinkedin size={ 24 } color="000000" />
        </a>
      </div>
    </footer>
  )
}