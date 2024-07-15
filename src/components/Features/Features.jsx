import React from 'react';
import Feature from './Feature';
import './Features.css';
function Features() {
  const features = [
    {
      title: "Fácil de Usar",
      description: "Interfaz intuitiva y amigable para todos los usuarios.",
    },
    {
      title: "Segura",
      description: "Tus datos están protegidos con la máxima seguridad.",
    },
    {
      title: "Eficiente",
      description: "Optimiza tu tiempo y alcanza tus metas más rápido.",
    }
  ];

  return (
    <div className="features">
      {features.map((feature, index) => (
        <Feature key={index} title={feature.title} description={feature.description} />
      ))}
    </div>
  );
}

export default Features;
