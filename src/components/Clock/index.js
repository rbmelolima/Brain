import React, {useState} from 'react';
import { FiClock } from 'react-icons/fi';


export default function Clock() {
  const [datetime, setDatetime] = useState(new Date());

  setInterval(()=>{
    let newDate = new Date();
    setDatetime(newDate);
  }, 1000)


  return (
    <section className="container-fluid clock">
      <FiClock size={138}></FiClock>
      <article className="clock-content">
        <h2>{datetime.toLocaleTimeString()}</h2>
        <p>{datetime.toLocaleDateString()}</p>
      </article>
    </section>
  );
}