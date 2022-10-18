import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form>
      <label htmlFor='Username'>Username:</label>
      <input 
      type='text'
      name='Username'
      placeholder='Username'
      value={username}
      onChange={(e) => {console.log(e.target.value); setUsername(e.target.value)}}
      />
      <label htmlFor='Email'>Email:</label>
      <input 
      type='email'
      name='Email'
      placeholder='Email'
      value={email}
      onChange={(e) => {console.log(e.target.value); setEmail(e.target.value)}}
      />
      <label htmlFor='Password'>Password:</label>
      <input 
      type='password'
      name='Password' 
      placeholder='Password'
      value={password}
      onChange={(e) => {console.log(e.target.value); setPassword(e.target.value)}}
      />
      <button type='submit'>Submit</button>
    </form>
  );
}

export default App;
