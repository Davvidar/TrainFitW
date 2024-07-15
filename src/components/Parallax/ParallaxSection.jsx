import React from 'react';
import './ParallaxSection.css';
import Features from '../Features/Features';

const ParallaxSection = () => {
    return (
        <div className="parallax-container border-top border-bottom">
            <div className="parallax-content border-top border-start ">
                <h5 className=' text-warning '>Comodidad</h5>
                <h1 className='  '>Centralizado</h1>

                <p>¡Encuentra todo lo que necesitas para tu nutrición y entrenamiento en un único lugar! Simplifica tu vida y maximiza tus resultados con nuestra plataforma.</p>
            </div>
            <div className="parallax-content border-top border-start ">
                <h5 className=' text-success '>Flexibilidad</h5>
                <h1 className='  '>Personalizable</h1>

                <p>¡Ajusta tu ingesta calórica según tus objetivos y necesidades individuales! Simplifica y maximiza tus resultados.</p>
            </div>
            <div className="parallax-content border-top border-start ">
                <h5 className=' text-info '>Variedad</h5>
                <h1 className=''>Ejercicios a tu Medida</h1>

                <p>Con <strong>Train</strong><strong className=' text-warning'>Fit</strong>, selecciona y personaliza cada ejercicio según tus necesidades y ajusta el nivel de esfuerzo con el RIR para adaptarlo a tu capacidad en cada sesión.</p>
            </div>


        </div>
    );
};

export default ParallaxSection;
