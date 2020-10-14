import React, { useState } from 'react'

function TeamForm(props) {   

const [formValues, setFormValues] = useState({name: '', email: '', role: ''});

const onSubmit = event => {
    event.preventDefault();
    props.newTeamMember(formValues);
};

const onChange = event => {
setFormValues({ ...formValues,[event.target.name]: event.target.value});
};

return (

        <form onSubmit={event => onSubmit(event)}>
            <div>
        <label>Name: 
            <input
            type='text'
            name='name'
            onChange={event => onChange(event)}
            value={formValues.name}
            /> </label>
            <br />

        <label>Email: 
            <input
            type='email'
            name='email'
            onChange={event => onChange(event)}
            value={formValues.email}
            /></label>
            <br />

        <label>Role: 
            <input
            type='text'
            name='role'
            value={formValues.role}
            onChange={event => onChange(event)}
            />
            </label>
            <br />
                <button>Add New Member</button>
            </div>
        </form>
    
)
}

export default TeamForm;