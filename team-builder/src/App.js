import React, { useState } from 'react';
import teamData from './constants/teamData'
import TeamForm from './teamForm/teamForm'
import logo from './logo.svg';
import './App.css';

function App(props) {

  return (
    <div className="App">
      <header className="App-header"></header>
      <TeamForm teamData={teamData} />
    </div>
  );
}

export default App;
