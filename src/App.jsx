
import { Link, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import './App.css';
import { useCardStates } from "./Context";

function App() {

  let darkMode =  localStorage.getItem('darkmode') || false
  const {theme, toggleTheme} = useCardStates();


  return (
      <>
      <div class={theme === 'dark' ? "body darkBody" : "body"}>
        <div class={theme === 'dark' ? "header darkHeader" : "header"}>
          <div class="nav">
            <Link to="/">Home</Link>
            <Link to="/favs">Favoritos</Link>
            <Link to="/contact">Contacto</Link>
            <button onClick={toggleTheme} class="darkModeButton">{theme === 'dark' ? "Light Mode" : "Dark Mode"}</button>
          </div>
        </div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/favs' element={<Favs/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer/>
      </div>
      </>
  );
}

export default App;
