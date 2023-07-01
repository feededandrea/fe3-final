import { createContext, useContext, useState, useEffect, useReducer } from "react";
import axios from "axios";

const CardStates = createContext()

const InitialCardState = {
    cardList: [],
    card: {},
    favs: JSON.parse(localStorage.getItem('favs')) || []
}


const cardReducer = (state, action) => {
    switch(action.type){
        case 'GET_LIST':
            return {...state, cardList: action.payload}
        case 'GET_CARD':
            return {...state, card: action.payload}
        case 'ADD_FAV':
            return {...state, favs: [...state.favs, action.payload ]}
        case 'DELETE_FAV':
            return {...state, favs: state.favs.filter((fav) => fav.id !== action.payload.id)}
        default:
            throw new Error()
    }
}

const Context = ({children}) => {
    const [cardState, cardDispatch] = useReducer(cardReducer, InitialCardState)
    const [theme, setTheme] = useState(localStorage.getItem('theme') || "light")

    const toggleTheme = () => {
        if(theme === 'dark'){
            setTheme('light')
            localStorage.setItem('theme', 'light')
        }
        else {
            setTheme('dark')
            localStorage.setItem('theme', 'dark')
        }
    }

    useEffect(()=>{
        const localTheme = localStorage.getItem('theme')
        if(localTheme){
            setTheme(localTheme)
        }
    }, [])

    const urlList = 'https://jsonplaceholder.typicode.com/users'

    useEffect(() => {
        axios(urlList)
        .then(res => cardDispatch({type:'GET_LIST', payload:res.data}))
        .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        localStorage.setItem('favs', JSON.stringify(cardState.favs))
    }, [cardState.favs])

    return (

        <CardStates.Provider value={{
            cardState, cardDispatch, theme, toggleTheme
        }}>
        {children}
        </CardStates.Provider>
    )
}


export default Context

export const useCardStates = () => useContext(CardStates)