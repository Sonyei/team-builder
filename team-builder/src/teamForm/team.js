import React from 'react'

const Team = (props) => {

return (

    <div>
    {props.people.map((person, index) => (
        <div key={person.id}>
        <h2>{person.name}</h2>
        <p>Role: {person.role}</p>
        <p>Email: {person.email}</p>
        </div>
    ))}
    </div>
    );
};

export default Team;