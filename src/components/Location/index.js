import React, { useEffect, useState } from 'react';


export default function Location() {
  const [location, setLocation] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;     
      setLocation([
        latitude, longitude
      ]);         
    });
  }, []);  

  return (
    <section className="container-fluid location">
      <h2>Localização</h2>

    </section>
  );
}