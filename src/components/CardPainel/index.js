import React from 'react';
import './Card.css';  // Certifique-se de criar este arquivo CSS para estilizar o card

const Card = () => {
  return (
    <div className="intro-card-container">
      <div className="intro-card">
        <div className="intro-content">
 
          <p>Bem-vindo(a) ao nosso portal de história, onde as páginas do passado se abrem para revelar os segredos e as narrativas que moldaram o mundo em que vivemos hoje. Neste espaço virtual, convidamos você a embarcar em uma jornada fascinante pelos corredores do tempo, explorando civilizações antigas, eventos históricos marcantes, figuras lendárias e momentos que mudaram o curso da humanidade.</p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1589519160142-7d1a51b43eaf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Imagem Legal"
          className="intro-image"
        />
      </div>
    </div>
  );
};

export default Card;
