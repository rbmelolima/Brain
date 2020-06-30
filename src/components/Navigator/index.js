import React from 'react';
import Card from './card';

export default function Navigator() {

  const userAgent = navigator.userAgent;
  const name = navigator.appName;
  const code = navigator.appCodeName;
  const version = navigator.appVersion;
  const plataform = navigator.platform;
  const language = navigator.language;
  const isOnline = navigator.onLine;
  const cookies = navigator.cookieEnabled;
  const colorDepth = window.screen.colorDepth;

  return (
    <section className="container-fluid navigator">
      <h2>Navegador</h2>

      <div className="card-group">
        <Card
          title={"Agente de usuário"}
          content={userAgent}
        />
        <Card
          title={"Nome"}
          content={name}
        />
        <Card
          title={"Código"}
          content={code}
        />
        <Card
          title={"Versão"}
          content={version}
        />
        <Card
          title={"Plataforma"}
          content={plataform}
        />
        <Card
          title={"Linguagem"}
          content={language}
        />
        <Card
          title={"Status"}
          content={isOnline === true ? "Online" : "Offline"}
        />  
        <Card
          title={"Cookies"}
          content={cookies === "true" ? "Ativo" : "Inativo"}
        />
        <Card
          title={"Profundidade de cores"}
          content={`${colorDepth} bits`}
        />  
      </div>
    </section>
  );
}