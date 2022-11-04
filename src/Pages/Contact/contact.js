import React from 'react'
import './contact.scss'
import Form from '../../Components/Form/form'
import Button from '../../Components/Button/button'
const contact = () => {
  return (
    <div className='contact_page'>
        <h1>Contact Me</h1>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
        <Form/>
        <Button/>
    </div>
  )
}

export default contact