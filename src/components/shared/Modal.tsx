// src/components/shared/Modal.tsx
import React, { useState } from 'react';
import './Modal.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  const horarios = [
    '09:00', '10:00', '11:00', '12:00', '13:00', '14:00',
    '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'
  ];

  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Agendar Horário</h2>
        <form>
          <label htmlFor="name">Nome Completo</label>
          <input type="text" id="name" />

          <label htmlFor="date">Selecione a Data</label>
          <input type="date" id="date" />

          <label htmlFor="unit">Selecione a Unidade</label>
          <select id="unit">
            <option>Unidade Principal</option>
            <option>Unidade Filial</option>
          </select>

          <label>Selecione o Horário</label>
          <div className="time-selection">
            {horarios.map(horario => (
              <button
                key={horario}
                type="button"
                className={`time-slot ${selectedTime === horario ? 'selected' : ''}`}
                onClick={() => setSelectedTime(horario)}
              >
                {horario}
              </button>
            ))}
          </div>

          <div className="modal-actions">
            <button type="submit" className="agendar-btn">Agendar</button>
            <button type="button" onClick={onClose} className="fechar-btn">Fechar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
