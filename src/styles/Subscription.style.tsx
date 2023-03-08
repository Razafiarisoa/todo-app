import styled from 'styled-components'
import { Theme } from './App.style'

/**
 * Contient le style globale de l'application
 */
export const BlockSubscription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 250px;
  margin-top: 52px; 
`
export const Button = styled.div`
  background-color: ${Theme.colors.colorButton};
`