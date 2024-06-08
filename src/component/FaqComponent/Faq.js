import React, { useState } from 'react';
import './Faq.css';

const Faq = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-container">
      <div className="faq-question-container">
        <span className="faq-question">{question}</span>
        <button onClick={toggleAnswer} className="faq-button">
          {isOpen ? '-' : '+'}
        </button>
      </div>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

export default Faq;