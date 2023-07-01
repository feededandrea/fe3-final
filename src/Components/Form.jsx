import React, { useState } from 'react';
import { useCardStates } from '../Context';

const Formulario = () => {
  const {theme, toggleTheme} = useCardStates();
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [texto, setTexto] = useState('');
  const [nombreError, setNombreError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [motivoError, setMotivoError] = useState('');
  const [satisfactoriamente, setSatisfactoriamente] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (nombre.trim() === '') {
      setNombreError('Ingrese su nombre correctamente');
      setSatisfactoriamente('')
    } else if (nombre.length < 3) {
      setNombreError('El nombre ingresado es muy corto');
      setSatisfactoriamente('')
    }else {
      setNombreError('');
    }
    if (texto.trim() === '') {
      setMotivoError('Ingrese su motivo de consulta');
      setSatisfactoriamente('')
    } else if (texto.length < 3) {
      setMotivoError('El motivo ingresado es muy corto');
      setSatisfactoriamente('')
    } else {
      setMotivoError('');
    }

    if (email.trim() === '') {
      setEmailError('Ingrese su email');
      setSatisfactoriamente('')
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('El email ingresado no es válido');
      setSatisfactoriamente('')
    } else {
      setEmailError('');
      if (nombreError === ''&& motivoError === '' ) {
        setSatisfactoriamente('El formulario ha sido enviado sactifactoriamente');
        console.log("El formulario ha sido enviado sactifactoriamente")
      }
    }

  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label style={{color: theme === 'dark' ? '#FFF':'#000'}}>Nombre:</label>
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        
      </div>
      <div>
        <label style={{color: theme === 'dark' ? '#FFF':'#000'}}>Email:</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label style={{color: theme === 'dark' ? '#FFF':'#000'}}>Motivo de consulta:</label>
        <input type="text" value={texto} onChange={(e) => setTexto(e.target.value)} />
      </div>
      <button className={{color: theme === 'dark' ? 'darkButton':''}} type="submit">Enviar</button>
      {(emailError || nombreError || motivoError) && <div className='infoError'>
        {emailError && <span>{emailError}</span>}
        {nombreError && <span>{nombreError}</span>}
        {motivoError && <span>{motivoError}</span>}
      </div>
      }
      
            {satisfactoriamente && <div className='infoSuccess'><span>{satisfactoriamente}</span></div>}
      
    </form>
  );
};

export default Formulario;