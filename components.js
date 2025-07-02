import React from 'react';

function FAQSection() {
  const questions = [
    "What if I vomit after taking Paracetamol?",
    "When will I feel better after taking it?",
    "Can I take it with ibuprofen?",
    "Does it make babies sleepy?",
    "Is it safe for children?"
  ];

  return (
    <section className="section faq-section">
      <h3>Frequently Asked Questions</h3>
      <ul>
        {questions.map((q, i) => <li key={i}>{q}</li>)}
      </ul>
    </section>
  );
}

export default FAQSection;
