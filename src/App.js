import './App.css';
import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [showName, setShowName] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleButtonClick = () => {
    if (name.trim() === '') {
      setErrorMessage('Please enter your name!');
      setShowName(false);
    } else {
      setShowName(true);
      setErrorMessage('');
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className='container'>
      <p className='hidden'>Learn React</p>
      <label className='label'>
        What's your name?
        <br></br>
        <input type="text" value={name} onChange={handleNameChange} className='inputName'/>
      </label>
      <br></br>
      <button onClick={handleButtonClick} className='button'>Submit</button>
      {errorMessage && <p className='error'>{errorMessage}</p>}
      {showName && <p className='output'>Welcome, {name}!</p>}
    </div>
  );
}

export default App;
