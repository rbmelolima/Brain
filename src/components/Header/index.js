import React from 'react';

import Brain from '../../assets/brain.svg'

export default function Header() {
  return (
    <header>
      <div className="logo-container">
        <img src={Brain} alt="Logo do site - Ilustração de um cérebro" className="pulse" />
      </div>

      <div className="header-content">
        <h1>Brain</h1>
        <p>Extraia todas as informações do seu navegador aqui!</p>
        <small>Navegador - Rede - Tela - Localização </small>
      </div>

    </header>
  );
}