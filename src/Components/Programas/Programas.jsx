import React from 'react'
import './programas.css'
import { programsData } from '../../../data/programsData'
import RightArrow from '../../../assets/rightArrow.png'

const Programas = () => {
    return (
        <div className="Programas" id='programas'>
            {/*Header*/}
            <div className="header-programas">
                <span className='stroke-text'>Explora Nuestros</span>
                <span>Programas</span>
                <span>Para ti</span>
            </div>

            <div className="categorias-programas">
                {programsData.map((programa) => (
                    <div className="category" >
                       {programa.image} 
                        <span>{programa.heading}</span>
                        <span>{programa.details}</span>
                        <div className="saber-mas">
                            <span>
                                Saber Más
                            </span>
                            <img src={RightArrow} alt="" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Programas