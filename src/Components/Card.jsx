import React from "react";
import { useCardStates } from '../Context'
import { Link } from 'react-router-dom';


const Card = ({ name, username, id, darkMode }) => {

  const {cardState, cardDispatch} = useCardStates();
  const {theme, toggleTheme} = useCardStates();

  const alreadyAdded = cardState.favs.find( fav => fav.id === id)

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    if(!alreadyAdded){
      cardDispatch({type: 'ADD_FAV', payload: { name, username, id}})
    }
    else {
      cardDispatch({type: 'DELETE_FAV', payload: { name, username, id}})
    }
  }

  return (
        /* En cada card deberan mostrar en name - username y el id */

        /* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */

        /* Ademas deberan integrar la logica para guardar cada Card en el localStorage */
        <div class="doctorCard">
        <Link to={'/detail/' + id}>
            <li> 
            <img src="./images/doctor.jpg"></img>
              <li style={{color: theme === 'dark' ? '#FFF':'#000'}}>{name}</li>
              <p style={{color: theme === 'dark' ? '#FFF':'#000'}}>{username}</p>
              </li>
          </Link>
          <button onClick={addFav} className={alreadyAdded ? "favButton gris" : "favButton normal"}><img src="./images/estrella.png"></img></button>
          </div>   
  );
};

export default Card;
