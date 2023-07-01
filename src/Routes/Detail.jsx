import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useCardStates } from '../Context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const {cardState, cardDispatch} = useCardStates()
  const {theme, toggleTheme} = useCardStates();
  const {id} = useParams()
  const urlDetail = 'https://jsonplaceholder.typicode.com/users/' + id

  useEffect(()=> {
    axios(urlDetail)
    .then(res => cardDispatch({type: 'GET_CARD', payload: res.data}))
  }, [])

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  //

  return (
    <>
      <h1 style={{color: theme === 'dark' ? '#FFF':'#000'}}>Detalles del dentista</h1>
      <li class="detailCard">
          <img src="../images/doctor.jpg"></img>
          <div style={{color: theme === 'dark' ? '#FFF':'#000'}} class="infoDetailCard">
              <p class="title">{cardState.card.name}</p>
              <p>Mail: {cardState.card.email}</p>
              <p>Usuario: {cardState.card.username}</p>
              <p>Teléfono: {cardState.card.phone}</p>
              <p>Web: {cardState.card.website}</p>
          </div>
      </li>
          <div class="domicilioCompania">
            <div style={{color: theme === 'dark' ? '#FFF':'#000'}} class="infoDetailCard">
                <p class="title">Domicilio</p>
                <p>Ciudad: {cardState.card.address?.city}</p>
                <p>Direccion: {cardState.card.address?.street} {cardState.card.address?.suite}</p>
                <p>Codigo Postal: {cardState.card.address?.zipcode}</p>
            </div>
            <div style={{color: theme === 'dark' ? '#FFF':'#000'}} class="infoDetailCard">
              <p class="title">Compañia</p>
              <p>Nombre: {cardState.card.company?.name}</p>
              <p>BS: {cardState.card.company?.bs}</p>
            </div>
          </div>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail