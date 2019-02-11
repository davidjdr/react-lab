import React from 'react';
import Media from './media.js';
import './playlist.css';

/*
Componente Funcional: Es una función la cual solo retorna el JSX de nuestro 
componente (renderiza UI), es mas sencillo, mas fácil de probar y 
este componente no tiene ciclo de vida.
*/
/*
function Playlist(props) {
    return (
        <div>
            {props}
        </div>
    )
}*/


function Playlist(props) {
        const playlist = props.data.categories[0].playlist;
        console.log(props.data);
        return (
            <div className="Playlist">
                {
                    playlist.map((item) => {
                        return <Media {...item} key={item.id} />
                    })
                }
            </div>
        )
}

export default Playlist;