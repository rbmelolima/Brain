import React from 'react';

import Brain from '../../assets/brain.svg';
import './style.scss';

export default function Header () {
  return (
    <header>
      <div className="header-content">
        <h1>Brain</h1>
        <p>Extraia informações úteis de sua tela e seu navegador</p>
      </div>

      <div className="logo-container">
        <img src={ Brain } alt="Logo do site - Ilustração de um cérebro" className="pulse" />
      </div>
    </header>
  );
}