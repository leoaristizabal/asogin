import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from '../../../assets/hero_image.png'
import hero_image_back from '../../../assets/hero_image_back.png'
import Heart from '../../../assets/heart.png'
import Calories from '../../../assets/calories.png'

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
            <span >GImnasio</span>
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



      <div className="right-h">
        <button className='btn'>Únete Ahora</button>


      <div className="heart-rate">
        <img src={Heart} alt="" />
        <span>Ritmo Cardiaco</span>
        <span>116 bpm</span>
      </div>

      {/**Hero Imagenes */}
      <img src={hero_image} className='hero_image' alt=''/>
      <img src={hero_image_back} className='hero_image_back' alt=''/>
      {/**Calories imagen */}
      <div className="calories">
        <img src={Calories} alt="" />
        <div className="">

        <span>Calorias:</span><span>220 Kcal</span>
        </div>
      </div>



      </div>
    </div>
  )
}

export default Hero