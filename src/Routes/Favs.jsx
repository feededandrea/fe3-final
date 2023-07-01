import React from "react";
import Card from "../Components/Card";
import { useCardStates } from '../Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const {cardState} = useCardStates();
  const {theme, toggleTheme} = useCardStates();

  return (
    <>
      <h1 style={{color: theme === 'dark' ? '#FFF':'#000'}}>Favoritos</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {cardState.favs.map(card => <Card name={card.name} username={card.username} id={card.id}/>
        )}


      </div>
    </>
  );
};

export default Favs;
