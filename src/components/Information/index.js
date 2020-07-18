import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../Card';

export default function Information () {
  const [ IP, setIP ] = useState( '' );
  const [ org, setOrg ] = useState( '' );
  const [ connection_type, setType ] = useState( '' );

  const userAgent = navigator.userAgent;
  const name = navigator.appName;
  const code = navigator.appCodeName;
  const version = navigator.appVersion;
  const plataform = navigator.platform;
  const language = navigator.language;
  const isOnline = navigator.onLine;
  const cookies = navigator.cookieEnabled;

  const colorDepth = window.screen.colorDepth;
  const bpp = window.screen.pixelDepth;
  const width = window.screen.width;
  const height = window.screen.height;
  const orientation = window.screen.orientation;

  useEffect( () => {
    getIP();
  }, [] )

  async function getIP () {
    const response = await axios.get( 'https://json.geoiplookup.io' );
    const { ip, org, connection_type } = response.data;
    setIP( ip );
    setOrg( org );
    setType( connection_type );
  }

  return (
    <section className="container-fluid">
      <div className="card-group">
        <Card
          title={ "Agente de usuário" }
          content={ userAgent }
        />
        <Card
          title={ "Versão" }
          content={ version }
        />
        <Card
          title={ "Nome" }
          content={ name }
        />
        <Card
          title={ "Código" }
          content={ code }
        />
        <Card
          title={ "Plataforma" }
          content={ plataform }
        />
        <Card
          title={ "Linguagem" }
          content={ language }
        />
        <Card
          title={ "Status" }
          content={ isOnline === true ? "Online" : "Offline" }
        />
        <Card
          title={ "Cookies" }
          content={ cookies === "true" ? "Ativo" : "Inativo" }
        />
        <Card
          title={ "Profundidade de cores" }
          content={ `${ colorDepth } bits` }
        />
        <Card
          title={ "Tamanho da tela" }
          content={ `${ width } X ${ height } px` }
        />
        <Card
          title={ "Bits por Pixel" }
          content={ `${ bpp } BPP` }
        />
        <Card
          title={ "IPV6" }
          content={ IP }
        />
        <Card
          title={ "Provedor" }
          content={ org }
        />
        <Card
          title={ "Conexão" }
          content={ connection_type }
        />
        <Card
          title={ "Orientação de tela" }
          content={ orientation.type }
        />
      </div>
    </section>
  );
}