import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  BottomBar,
  BurgerButton,
  MenuContainer,
  UserButton,
  MenuItem,
} from '../styles/Menu.styles'

/**
 * Composant affichant le menu, il vient avec 2 versions :
 * - Une version fermé
 * - Une version ouvert
 */
export default function Menu() {
  const [isOpen, setIsOpen] = useState(false)

  function toggleMenu() {
    setIsOpen(!isOpen)
  }

  if (!isOpen) {
    return (
      <BottomBar>
        <BurgerButton onClick={toggleMenu}>
          <i className="fa-solid fa-bars"></i>          
        </BurgerButton>
        <UserButton onClick={toggleMenu}>
          <i className="fa-solid fa-user"></i>
        </UserButton>
      </BottomBar>
    )
  }

  return (
    <MenuContainer>
      {/* <MenuHeader>
        <i onClick={toggleMenu} className="fa-solid fa-bars"></i>
       <i onClick={UserHome}className="fa-solid fa-user"></i>
      </MenuHeader> */}
      <MenuItem>
        <Link to="/" onClick={toggleMenu}>
          Accueil
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/connexion" onClick={toggleMenu}>
          Connexion
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/inscription" onClick={toggleMenu}>
          Inscription
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/todoList" onClick={toggleMenu}>
          TodoList
        </Link>
      </MenuItem> 
    </MenuContainer>
  )
}