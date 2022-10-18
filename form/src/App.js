import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  return (
    <form>
      <input 
      type='text'
      placeholder='Username'
      />
      <input 
      type='text' 
      placeholder='Email'
      />
      <button type='submit'>Submit</button>
    </form>
  );
}

export default App;
