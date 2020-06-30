import React from 'react';
import PPI from '../../assets/PPI.svg';
import ImgScreen from '../../assets/screen.svg';


export default function Screen() {
  const bpp = window.screen.pixelDepth;
  const width = window.screen.width;
  const height = window.screen.height;


  return (
    <section className="container-fluid screen">
      <h2>Tela</h2>

      <div className="group-screen">
        <div className="screen-container">
          <img src={ImgScreen} alt="Dimensões de um retângulo"></img>
          <p>{`${width} X ${height} px`}</p>
        </div>
        <div className="ppi-container">
          <img src={PPI} alt="Bits por pixel"></img>
          <p>{`${bpp} BPP`}</p>
        </div>
      </div>
    </section>
  );
}