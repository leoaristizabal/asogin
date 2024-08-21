import React from 'react'
import "./razones.css"
import image1 from "../../../assets/image1.png"
import image2 from "../../../assets/image2.png"
import image3 from "../../../assets/image3.png"
import image4 from "../../../assets/image4.png"
import nb from "../../../assets/nb.png"
import adidas from "../../../assets/adidas.png"
import nike from "../../../assets/nike.png"
import tick from "../../../assets/tick.png"

const Razones = () => {
  return (
    <div className="razones" id="razones">
      <div className="left-raz">
        {/**Fotos en el gimnasio */}
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      <div className="right-raz">

        <span>Algunas Razones</span>
        <div>
          <span className='stroke-text'>Por qué </span>
          <span>escogernos?</span>

        </div>

        <div className='details-r'>
          <div>
            <img src={tick} alt=""></img>
            <span>Gimnasio inclusivo</span>
          </div>
          <div>
            <img src={tick} alt=""></img>
            <span>Entrenamiento Personalizado</span>
          </div>
          <div>
            <img src={tick} alt=""></img>
            <span>Deporte Unificado</span>
          </div>
          <div>
            <img src={tick} alt=""></img>
            <span>Bailoterapia + Funcionales</span>
          </div>
          </div>
          <span style={{
            color: "var(--gray)",
            fontWeight: "normal",
          }}
          >
            Nuestras Alianzas
          </span>

          <div className="partners">
            <img src={nb} alt="" />
            <img src={adidas} alt="" />
            <img src={nike} alt="" />
          </div>
        
      </div>
    </div >
  );
};

export default Razones