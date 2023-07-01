import React from 'react'
import { useCardStates } from '../Context';

const Footer = () => {
  const {theme, toggleTheme} = useCardStates();
  return (
    <footer style={{filter: theme === 'dark' ? 'invert(1)':'none'}}>
        <p>Powered by</p>
        <img src="./images/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer
