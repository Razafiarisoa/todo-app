import { StrictMode } from 'react'
import { Routes, Route } from 'react-router'
import { BrowserRouter, Link } from 'react-router-dom'
import { AppGlobalStyle } from '../styles/App.style'
import Subscription from './Subscription'
import Connexion from './Connexion'
import TodoList from './TodoList'
import Accueil from './Accueil'
import Liste from './NuwListe'
import Menu from './Menu'



export default function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <AppGlobalStyle />
          <Routes>
            <Route path="/" element={<Accueil/>} />
            <Route path="/connexion" element={<Connexion />} />
            <Route path="/inscription" element={<Subscription />} />
            <Route path="/todolist" element={<TodoList />} />
            <Route path="/nouvelle-liste" element={<Liste />} />
          </Routes>
          <Menu />
      </BrowserRouter>
    </StrictMode>  
    );  
}