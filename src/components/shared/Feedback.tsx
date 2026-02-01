import React from 'react';
import './Feedback.css';

// Dados de exemplo para os feedbacks
const feedbackData = [
  {
    id: 1,
    name: 'Carlos Silva',
    comment: 'Atendimento incrível e o corte ficou exatamente como eu queria. Virei cliente fiel!',
    avatar: 'https://i.pravatar.cc/150?img=11' 
  },
  {
    id: 2,
    name: 'Roberto Almeida',
    comment: 'A melhor barbearia da cidade. Profissionais de primeira e um ambiente muito agradável.',
    avatar: 'https://i.pravatar.cc/150?img=32'
  },
  {
    id: 3,
    name: 'Juliano Costa',
    comment: 'Barba, cabelo e bigode no capricho! Recomendo a todos que procuram um serviço de qualidade.',
    avatar: 'https://i.pravatar.cc/150?img=60'
  }
];

const Feedback: React.FC = () => {
  return (
    <section id="feedbacks" className="feedbacks-section">
      <div className="container">
        <h2 className="feedbacks-title">O que nossos clientes dizem</h2>
        <div className="feedback-list">
          {feedbackData.map(fb => (
            <div key={fb.id} className="feedback-card">
              <img src={fb.avatar} alt={fb.name} className="feedback-avatar" />
              <p className="feedback-comment">"{fb.comment}"</p>
              <h4 className="feedback-name">- {fb.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feedback;
