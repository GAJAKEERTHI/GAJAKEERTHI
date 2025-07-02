import React from 'react';
function CompareSection() {
  const cards = Array(4).fill({
    image: '/images/dolo_650_tablet.jpg',
    title: 'Dolo 650 mg',
    generic: 'Paracetamol 650 mg',
    price: 'Rs. 34',
    rating: '★★★★☆ (4.0)',
    desc: 'Good medicine, slightly costly compared to generic.'
  });

  return (
    <section className="section compare-section">
      <h3>Compare Medicines</h3>
      <div className="compare-table">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.image} alt={card.title} />
            <h4>{card.title}</h4>
            <p><strong>Generic:</strong> {card.generic}</p>
            <p><strong>Price:</strong> {card.price} <span className="offer">(15% Off)</span></p>
            <div className="rating">{card.rating}</div>
            <p className="desc">"{card.desc}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CompareSection;
