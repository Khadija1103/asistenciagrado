import {createGlobalStyle} from 'styled-components'
import PrimaryFont from '../src/Utils/Fonts/Negrilla.woff'
import SecundaryFont from '../src/Utils/Fonts/Light.woff'
export const GlobalStyle = createGlobalStyle` 


p, input, select, button, #grafica label{
    font-family: Delgada;
}
h1, h2{
    font-family: Negrilla;
}
/*Fuentes*/
@font-face{
    font-family: 'Negrilla';
    src: local('Negrilla'), url(${PrimaryFont}) format('woff');
    font-style: normal;
}
@font-face{
    font-family: 'Delgada';
    src: local('Delgada'), url(${SecundaryFont}) format('woff');
    font-style: normal;
}

`;
 
export default GlobalStyle;