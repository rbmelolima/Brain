import React, { useState } from 'react';
import axios from 'axios';

export default function AddressIP() {
  const [IP, setIP] = useState('');
  const [org, setOrg] = useState('');
  const [connection_type, setType] = useState('');

  async function getIP() {
    const response = await axios.get('https://json.geoiplookup.io');
    const { ip, org, connection_type } = response.data;
    setIP(ip);
    setOrg(org);
    setType(connection_type);
  }

  getIP();

  return (
    <section className="container-fluid address">
      <h2 id="ip">{IP !== '' ? IP : 'Endereço IPV6'}</h2>
      <p>{org !== '' ? org : 'Provedor de internet'}</p>
      <p>{connection_type !== '' ? connection_type : 'Tipo de conexão'}</p>
    </section>
  );
}