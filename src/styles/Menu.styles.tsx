import styled from 'styled-components'
import { Theme  } from '../styles/App.style'

/**
 * Display the bottom bar menu
 */
export const BottomBar = styled.nav`
  display: flex;
  position: fixed;
  justify-content: space-between;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: ${Theme.colors.blue};
`
/**
 * Display a burger button
 */
export const BurgerButton = styled.button`
  border: 0;
  outline: 0;
  background-color: transparent;
  display: flex;  
  align-items: center;
  justify-content: center;
  padding: 1rem;


  i {
    font-size: 1.7rem;
    color: ${Theme.colors.white};
  }
`
export const UserButton = styled.button`
  border: 0;
  outline: 0;
  background-color: transparent;
  display: flex;
  align-items: center;  
  justify-content: center;
  padding: 1rem;  

  i {
    font-size: 1.7rem;
    color: ${Theme.colors.white};
  }
`


/**
 * Container for the open menu
 */
export const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${Theme.colors.blue};
  display: flex;
  flex-direction: column;
  align-items: stretch;
`

/**
 * Header for the menu
 */
export const MenuHeader = styled.div`
  display: flex;
  padding: 1rem;
  color: ${Theme.colors.white};
  align-items: center;

  i {
    font-size: 1.4rem;
    display: flex;
    margin-right: 1rem;
  }

  p {
    color: ${Theme.colors.white};
    font-size: 2rem;
    margin: 0;
    font-weight: bold;
  }
`

/**
 * Item for a menu element
 */
export const MenuItem = styled.p`
  font-size: 1.3rem;
  color: ${Theme.colors.white};
  padding: 1rem;
  margin: 0;

  a {
    text-decoration: none;
    outline: none;
    border: none;
    color: ${Theme.colors.white};
  }
`