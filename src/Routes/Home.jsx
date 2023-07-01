import React from 'react'
import Card from '../Components/Card'
import { useCardStates } from '../Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Home = (darkMode) => {

  const {cardState} = useCardStates();


  return (
    <main className="" >
      <div className='card-grid'>
        {cardState.cardList.map(card => <Card name={card.name} username={card.username} id={card.id}/>
        )}
      </div>
    </main>
  )
}

export default Home