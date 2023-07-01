import React from 'react'
import Form from '../Components/Form'
import { useCardStates } from '../Context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  
  const {theme, toggleTheme} = useCardStates();

  return (
    <div>
      <div className='contact'>
        <h2 style={{color: theme === 'dark' ? '#FFF':'#000'}}>Want to know more?</h2>
        <p style={{color: theme === 'dark' ? '#FFF':'#000'}}>Send us your questions and we will contact you</p>
      </div>
      <Form/>
    </div>
  )
}

export default Contact