import { createGlobalStyle } from 'styled-components'


export const Theme ={
  colors: {
    colorWhite:'#edfffb',
    softBlack:'#4f4f4f',
    blue:'#075252',
    white:'#ffffff',
    colorButton:'#557859',    
  },
  font: {
    regular: "Poppins, cursive",
    extra: "Lobster, cursive",   
  },
}



/**
 * Contient le style globale de l'application
 */

export const AppGlobalStyle = createGlobalStyle`
  :root {
    font: 18px;
    font: ${Theme.font.extra};
    color: ${Theme.colors.softBlack};
    background-color: ${Theme.colors.colorWhite};
  }

  html, body{
    margin: 0;
    padding: 0;
    background: #edfffb;    
    display: flex;
    flex-direction: column; 
    align-items : center ;
    text-align :center ;
  }
  h2{
    font-family: Lobster, cursive;
    font-size: 2rem;
  }
   li{
    list-style-type: none;
   }
   a{
    text-decoration: none;    
    padding: 2rem;
   }
   
   button {
    background-color: ${Theme.colors.colorButton};
    border: none;
    border-radius: 10px;
    height: 55px;
    color: ${Theme.colors.white};
    font-size: 1.3rem;
   }
   button a {
    color: ${Theme.colors.white};
  }

   input[type="email"], input[type="password"] {
    padding: 15px;
    display: block;
    border: none;
    border-bottom: 1px solid #4f4f4f;    
  }
  `
  