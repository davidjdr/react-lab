//Sirve para crear componentes
import React from 'react';
//Sirve para renderizar los componentes en el navegador
import ReactDOM from 'react-dom';
//Componentes
import Playlist from './src/playlist/components/playlist';

import data from './src/api.json';

// console.log('Hola mundo');
const app = document.getElementById('app');


//recibe, que va a renderizar (componente o elemento) y donde
//const holaMundo = <h1>Hola Mundo!</h1>;
//Se envían los datos dinámicos como atributos (propiedades?)
ReactDOM.render(<Playlist data={data} />, app);
