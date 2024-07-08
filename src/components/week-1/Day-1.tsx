import React, { FormEvent, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function InputValue() {
  // Create refs using useRef
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (nameRef.current && ageRef.current) {
      console.log('Name:', nameRef.current.value); // Log the value of the name input field
      console.log('Age:', ageRef.current.value);  // Log the value of the age input field
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2>Form Handling</h2>
          <form onSubmit={handleSubmit} className="border p-4 shadow-sm rounded">
            <div className='mb-3'>
              <label htmlFor="name" className='form-label'>Name</label>
              <input 
                ref={nameRef} 
                id='name' 
                type="text" 
                className='form-control' 
                placeholder="Enter your name" 
              />
            </div>
            <div className='mb-3'>
              <label htmlFor="age" className='form-label'>Age</label>
              <input 
                ref={ageRef} 
                id='age' 
                type="text" 
                className='form-control' 
                placeholder="Enter your age" 
              />
            </div>
            <div className='mb-3'>
              <button type="submit" className="btn btn-primary w-100">Log Input Values</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default InputValue;
