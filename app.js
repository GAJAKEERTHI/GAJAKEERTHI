import React, { useEffect, useState } from 'react';
import MedicineDetails from './components/MedicineDetails';
import './index.css';

function App() {
  const [medicine, setMedicine] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/medicine/1')
      .then(res => res.json())
      .then(data => setMedicine(data))
      .catch(err => console.error('Error:', err));
  }, []);

  if (!medicine) return <p>Loading...</p>;

  return (
    <div className="container">
      <MedicineDetails data={medicine} />
    </div>
  );
}

export default App;
