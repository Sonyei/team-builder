import React, { useState } from 'react';
import teamData from './constants/teamData'
import TeamForm from './teamForm/teamForm'
import Team from './teamForm/team'
import './App.css';


function App() {

const [teamMembers, setTeamMembers] = useState(teamData)

const newPerson = (newTeamMembers) => {
  setTeamMembers([...teamMembers, newTeamMembers])
}

  return (

    <div className="App">
      <header className="App-header"></header>
      <div>
         <TeamForm newTeamMember={newPerson}/>
      </div>
        <div>
          <Team people={teamMembers}/>
        </div>
    </div>
  );
}

export default App;