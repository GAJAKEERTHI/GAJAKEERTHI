import React from 'react';

function MedicineDetails({ data }) {
  return (
    <div>
      <h2>{data.name}</h2>
      <p><strong>About:</strong> {data.description}</p>
      <p><strong>Uses:</strong> {data.usage}</p>
      <p><strong>How It Works:</strong> {data.mechanism}</p>
      <p><strong>Side Effects:</strong> {data.side_effects}</p>

      <h3>Alternatives</h3>
      <ul>
        {data.alternatives.map((alt, i) => (
          <li key={i}>
            {alt.name} - {alt.salt_content} - ₹{alt.price}
          </li>
        ))}
      </ul>

      <h3>Reviews</h3>
      <ul>
        {data.reviews.map((rev, i) => (
          <li key={i}>
            {rev.content} - ⭐ {rev.rating}/5
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MedicineDetails;

