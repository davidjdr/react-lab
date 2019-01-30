//Sirve para crear componentes
import React from 'react';
//Sirve para renderizar los componentes en el navegador
import ReactDOM from 'react-dom';
//Componentes
import Media from './src/playlist/components/media';

// console.log('Hola mundo');
const app = document.getElementById('app');


//recibe, que va a renderizar (componente o elemento) y donde
const holaMundo = <h1>Hola Mundo!</h1>;
ReactDOM.render(<Media title="¿Qué es responsive design?" author="David De Freitas" image="./images/covers/bitcoin.jpg" />, app);
