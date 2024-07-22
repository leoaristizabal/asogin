import React from 'react'
import './Hero.css'
import Header from '../Header/Header'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="left-h">
        <Header />
        {/*El unico gimnasio inclusivo */}
        <div className="the-best-ad">
          <div></div>
          <span>El único gimnasio inclusivo de la ciudad</span>
        </div>
        {/*Titulo Heading */}
        <div className="hero-text">

          <div>
            <span className="stroke-text">GImnasio</span>
            <span className="stroke-text"> Inclusivo</span>
          </div>

          <div>
            <span>Para todo público</span>
          </div>

          <div>
            <span>
              Especializados en brindar un entorno accesible y adaptado para personas con todo tipo de discapacidades.
            </span>
          </div>
        </div>

        {/**Figuras Hero */}
        <div className="figures">
          <div>
            <span>+10</span>
            <span>Atletas Olímpicos</span>
          </div>

          <div>
            <span>+10</span>
            <span>Entrenadores Inclusivos</span>
          </div>

          <div>
            <span>+10</span>
            <span>Años Especializados</span>
          </div>
        </div>

        {/**Buttons */}

        <div className="hero-buttons">
          <buttons className="btn">Comenzar a Entrenar</buttons>
          <buttons className="btn">Saber Más</buttons>
        </div>

      </div> {/**end left */}
      <div className="right-h">Right Side</div>
    </div>
  )
}

export default Hero