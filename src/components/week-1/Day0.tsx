import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ListItems = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const items = ['Apple', 'Banana', 'Grapes', 'Orange'];

  return (
    <div className="container mt-5">
      <h1 className="mb-4">List Items</h1>
      <div className="row">
        {items.map((item, index) => (
          <div className="col-md-3 mb-3" key={index}>
            <div
              className={`card ${index === activeIndex ? 'bg-info text-white' : ''}`}
              onClick={() => setActiveIndex(index)}
              style={{
                cursor: 'pointer',
                height: '150px'
              }}
            >
              <div className="card-body text-center d-flex align-items-center justify-content-center">
                <h5>{item}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
      {activeIndex !== null && (
        <div className="alert alert-info mt-3">
          You have selected {items[activeIndex]}
        </div>
      )}
    </div>
  );
};

export default ListItems;
