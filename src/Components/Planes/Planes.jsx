import React from 'react'
import './planes.css'
import {plansData} from '../../../data/plansData.jsx'
import whiteTick from '../../../assets/whiteTick.png'
const Planes = () => {
    return (
        <div className="planes-container">
            <div className="header-programas" >
                <span className='stroke-text'>Conoce</span>
                <span>Nuestros</span>
                <span className='stroke-text'>Planes</span>
            </div>

            {/*TArjeta de planes*/}

            <div className="plans">
                {plansData.map((plan, i) => (
                    <div className="plan" key={i}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>$ {plan.price}</span>

                        <div className="features">
                            {plan.features.map((feature, i)=>(
                                <div className="feature">
                                    <img src={whiteTick} alt=''/>
                                    <span key={i}>{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div className="">
                            <span>Ver Mas...</span>
                        </div>

                        <button className='btn'> Inscribirme</button>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Planes