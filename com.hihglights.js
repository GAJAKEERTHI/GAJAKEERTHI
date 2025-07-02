import React from 'react';

function Highlights() {
  const items = [
    { img: '/images/payment.png', text: 'Safe & Secured Payment' },
    { img: '/images/authentic.png', text: '100% Authentic Products' },
    { img: '/images/happy.png', text: '6 lac+ Happy Customers' }
  ];

  return (
    <section className="section highlights">
      {items.map((item, i) => (
        <div key={i}>
          <img src={item.img} alt={item.text} />
          <p>{item.text}</p>
        </div>
      ))}
    </section>
  );
}

export default Highlights;
