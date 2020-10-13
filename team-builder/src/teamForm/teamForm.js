import React, { useState } from 'react'

export default function teamForm(props) {

const { teamData } = props

return (
    <div>
        <p>Name: {teamData.name}</p>
        <p>Role: {teamData.role}</p>
    </div>
)

}